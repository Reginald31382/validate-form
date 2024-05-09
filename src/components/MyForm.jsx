import React, { useState } from "react";
import * as Yup from "yup";

const MyForm = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthDate: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits")
      .required("Phone Number is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one symbol"
      )
      .matches(/\d/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .min(18, "You must be at least 18")
      .max(100, "Age must be less than or equal to 100")
      .required("Age is required"),
    gender: Yup.string().required("Gender is required"),
    interests: Yup.array()
      .min(1, "Select at least one interest")
      .required("Select at least one interest"),
    birthDate: Yup.date().required("Date of birth is required"),
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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckChange = (e) => {
    const { name, checked } = e.target;
    const updatedInterests = checked
      ? [...formData.interests, name]
      : formData.interests.filter((interest) => interest !== name);
    setFormData({
      ...formData,
      interests: updatedInterests,
    });
  };

  return (
    <>
      <img
        style={{
          width: "4rem",
          height: "auto",
          position: "fixed",
          bottom: "20px",
          left: "20px",
        }}
        src="https://i.ibb.co/DgnHvnF/jrome-tm.png"
        alt="jrome"
      />
      <div className="form-text">
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
            {errors.firstName && (
              <div className="error">{errors.firstName}</div>
            )}
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
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              placeholder="000-000-0000"
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <div className="error">{errors.phoneNumber}</div>
            )}
          </div>

          <div>
            <label>Service:</label>
            <label>
              <input
                type="checkbox"
                name="coding"
                checked={formData.interests.includes("coding")}
                onChange={handleCheckChange}
              />
              Business Cards
            </label>
            <label>
              <input
                type="checkbox"
                name="sports"
                checked={formData.interests.includes("sports")}
                onChange={handleCheckChange}
              />
              Flyers
            </label>
            <label>
              <input
                type="checkbox"
                name="reading"
                checked={formData.interests.includes("reading")}
                onChange={handleCheckChange}
              />
              Other
            </label>
            {errors.interests && (
              <div className="error">{errors.interests}</div>
            )}
          </div>

          <div>
            <label>Quantity:</label>
            <label>
              <input
                type="checkbox"
                name="coding"
                checked={formData.interests.includes("coding")}
                onChange={handleCheckChange}
              />
              50
            </label>
            <label>
              <input
                type="checkbox"
                name="sports"
                checked={formData.interests.includes("sports")}
                onChange={handleCheckChange}
              />
              100
            </label>
            <label>
              <input
                type="checkbox"
                name="reading"
                checked={formData.interests.includes("reading")}
                onChange={handleCheckChange}
              />
              150
            </label>
            {errors.interests && (
              <div className="error">{errors.interests}</div>
            )}
          </div>

          <button className="btn__submit" type="submit">
            Submit
          </button>
        </form>
      </div>

      <span className="image__tag">
        image by | 118535010 © Oleg Dudko | Dreamstime.com
      </span>
    </>
  );
};

export default MyForm;
