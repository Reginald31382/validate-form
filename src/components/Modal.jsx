import React from "react";

const Modal = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        border: "2px solid black",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Quality Information</h2>
      <span style={{ textAlign: "center" }}>
        <strong>Card Size:</strong> 2"x3.5"
      </span>
      <ul
        style={{ listStyleType: "circle", width: "100%", placeSelf: "center" }}
      >
        <li>
          <strong>Basic</strong>
          <br /> <span>Slightly Thick Gloss</span> <br />
          <span>100-lb 2-Sided Gloss Cover</span>
          <br />
          <sup style={{ marginLeft: "3px" }}>Feels slick and glossy</sup>
        </li>
        <br />
        <li>
          <strong>Standard</strong>
          <br /> <span>Thick Gloss</span>
          <br />
          <span>114-lb/14-pt 2-Sided Digital Gloss Cover</span>
          <br />
          <sup style={{ marginLeft: "3px" }}>Feels slick and glossy</sup>
        </li>
        <br />
        <li>
          <strong>Premium</strong> <br />
          <span>Extra Thick Gloss</span>
          <br />
          <span>122-lb/16-pt Gloss Cover</span>
          <br />
          <sup style={{ marginLeft: "3px" }}>Feels slick and glossy</sup>
        </li>
      </ul>
    </div>
  );
};

export default Modal;
