import React, { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted Successfully:", formData);
      setFormData({ name: "", email: "", message: "" });
      alert("Appointment request submitted!");
    }
  };

  return (
    <>
        <div class="form-back-drop"></div>
        <section className="hidden-bar">
        <div className="inner-box text-center">
            {/* Close Button */}
            <div className="cross-icon">
            <span className="fa fa-times"></span>
            </div>

            {/* Title */}
            <div className="title">
            <h4>Get Appointment</h4>
            </div>

            {/* Appointment Form */}
            <div className="appointment-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    onChange={handleChange}
                    required
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
                </div>
                <div className="form-group">
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email Address"
                    onChange={handleChange}
                    required
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
                </div>
                <div className="form-group">
                <textarea
                    name="message"
                    value={formData.message}
                    placeholder="Message"
                    rows="5"
                    onChange={handleChange}
                    required
                />
                {errors.message && <p className="error-text">{errors.message}</p>}
                </div>
                <div className="form-group">
                <button type="submit" className="theme-btn style-two">
                    Submit now
                </button>
                </div>
            </form>
            </div>

            {/* Social Icons */}
            <div className="social-style-one">
            <a href="contact.html">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="contact.html">
                <i className="fab fa-facebook-f"></i>
            </a>
            <a href="contact.html">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
                <i className="fab fa-pinterest-p"></i>
            </a>
            </div>
        </div>
        </section>
    </>
  );
};

export default AppointmentForm;
