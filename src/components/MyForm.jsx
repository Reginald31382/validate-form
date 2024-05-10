import React, { useState } from "react";
import * as Yup from "yup";
import Modal from "./Modal";
import { TiInfoLarge } from "react-icons/ti";

const MyForm = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    services: [],
    quantity: [],
    quality: [],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits")
      .required("Phone Number is required"),
    services: Yup.array()
      .min(1, "Select at least one service")
      .required("Select at least one service"),
    quantity: Yup.array()
      .min(1, "Select at least one quantity")
      .required("Select at least one quantity"),
    quality: Yup.array()
      .min(1, "Select at least one quality")
      .required("Select at least one quality"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form Submitted", formData);
      // Reset form state after successful submission
      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleServiceChange = (e) => {
    const { name, checked } = e.target;
    const updatedServices = checked
      ? [...formData.services, name]
      : formData.services.filter((service) => service !== name);
    setFormData({
      ...formData,
      services: updatedServices,
    });
  };

  const handleQuantityChange = (e) => {
    const { name, checked } = e.target;
    const updatedQuantities = checked
      ? [...formData.quantity, name]
      : formData.quantity.filter((quantity) => quantity !== name);
    setFormData({
      ...formData,
      quantity: updatedQuantities,
    });
  };

  const handleQualityChange = (e) => {
    const { name, checked } = e.target;
    const updatedQuality = checked
      ? [...formData.quality, name]
      : formData.quality.filter((item) => item !== name);
    setFormData({
      ...formData,
      quality: updatedQuality,
    });
  };

  return (
    <div className="form-text">
      <img
        src="https://i.ibb.co/DgnHvnF/jrome-tm.png"
        alt="jrome"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          width: "3rem",
          height: "auto",
        }}
      />
      <span
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          fontSize: "8px",
        }}
      >
        image by | 118535010 © Oleg Dudko | Dreamstime.com
      </span>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="First name"
            onChange={handleChange}
          />
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>

        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Last name"
            onChange={handleChange}
          />
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div>
          <label>Service:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="cards"
                checked={formData.services.includes("cards")}
                onChange={handleServiceChange}
              />
              Business Cards
            </label>
            <label>
              <input
                type="checkbox"
                name="flyers"
                checked={formData.services.includes("flyers")}
                onChange={handleServiceChange}
              />
              Flyers
            </label>
            <label>
              <input
                type="checkbox"
                name="other"
                checked={formData.services.includes("other")}
                onChange={handleServiceChange}
              />
              Other
            </label>
          </div>
          {errors.services && <div className="error">{errors.services}</div>}
        </div>

        <div>
          <label style={{ display: "flex", alignItems: "center" }}>
            Quality:
            <TiInfoLarge
              onClick={() => setShowModal(true)}
              style={{ cursor: "pointer" }}
            />
          </label>
          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <Modal />
                <button onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          )}
          <div>
            <label>
              <input
                type="checkbox"
                name="basic"
                checked={formData.quality.includes("basic")}
                onChange={handleQualityChange}
              />
              Basic
            </label>
            <label>
              <input
                type="checkbox"
                name="standard"
                checked={formData.quality.includes("standard")}
                onChange={handleQualityChange}
              />
              Standard
            </label>
            <label>
              <input
                type="checkbox"
                name="premium"
                checked={formData.quality.includes("premium")}
                onChange={handleQualityChange}
              />
              Premium
            </label>
          </div>
          {errors.quality && <div className="error">{errors.quality}</div>}
        </div>

        <div>
          <label>Quantity:</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="50"
                checked={formData.quantity.includes("50")}
                onChange={handleQuantityChange}
              />
              50
            </label>
            <label>
              <input
                type="checkbox"
                name="100"
                checked={formData.quantity.includes("100")}
                onChange={handleQuantityChange}
              />
              100
            </label>
            <label>
              <input
                type="checkbox"
                name="150"
                checked={formData.quantity.includes("150")}
                onChange={handleQuantityChange}
              />
              150
            </label>
          </div>
          {errors.quantity && <div className="error">{errors.quantity}</div>}
        </div>

        <input className="btn__submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MyForm;
