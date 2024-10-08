import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.fullname) {
      newErrors.fullname = "name is required";
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (formData.email) {
      const emailCond =
        "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
      if (!formData.email.match(emailCond)) {
        newErrors.email = "Please enter valid email address";
        isValid = false;
      }
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  function submitForm(e) {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted");
    } else {
      console.log("form not submit");      
    }
  }

  return (
    <>
      <div className="page-heading">
        <h3 className="title">Contact</h3>
      </div>

      <div className="map-wrapper">
        <iframe
          className="google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.6624470279094!2d72.83610131538657!3d21.165827588459745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e3b1499746b%3A0x44913179f4c51bf6!2sGayatri%20Society!5e0!3m2!1sen!2sin!4v1670496935712!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-form mb-3">
        <h2>Contact Form</h2>
      </div>

      <form className="needs-validation" noValidate onSubmit={submitForm}>
        <div className="d-md-flex user-info">
          <div className="w-100 pb-4 me-md-2 position-relative">
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              
              name="fullname"
              id="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
            />
            {errors.fullname && (
              <div className="form-error">Fill in the field</div>
            )}
          </div>
          <div className="w-100 ms-md-2 pb-4 position-relative">
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Email address"
              
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <div className="form-error">Email is incorrect</div>
            )}
          </div>
        </div>

        <div className="pb-4 position-relative">
          <textarea
            className="form-control w-100"
            name="message"
            id="message"
            rows="4"
            placeholder="Your message"
            
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          {errors.message && (
            <div className="form-error">Fill in the field</div>
          )}
        </div>

        <div className="d-md-flex justify-content-md-end ">
          <button type="submit" className="btn btn-primary float-end">
            <i className="bi bi-send-fill"></i> Send Message
          </button>
        </div>
      </form>
    </>
  );
}

export default Contact;
