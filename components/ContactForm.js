"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example: send data to Bitrix webhook
    // const response = await fetch("YOUR_BITRIX_WEBHOOK_URL", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     fields: {
    //       TITLE: `New Lead from ${formData.name}`,
    //       NAME: formData.name,
    //       PHONE: [{ VALUE: formData.phone, VALUE_TYPE: "WORK" }],
    //       EMAIL: [{ VALUE: formData.email, VALUE_TYPE: "WORK" }],
    //       COMMENTS: formData.message,
    //     },
    //   }),
    // });
    // const result = await response.json();
    // console.log(result);

    // For now, just log data
    console.log(formData);

    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          style={{ borderRadius: "8px", border: "1px solid #ccc" }}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="tel"
          name="phone"
          placeholder="Enter Your Phone Number"
          className="form-control"
          value={formData.phone}
          onChange={handleChange}
          style={{ borderRadius: "8px", border: "1px solid #ccc" }}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email Address"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          style={{ borderRadius: "8px", border: "1px solid #ccc" }}
          required
        />
      </div>

      <div className="mb-3">
        <textarea
          name="message"
          rows="3"
          placeholder="Your Message"
          className="form-control"
          value={formData.message}
          onChange={handleChange}
          style={{
            borderRadius: "8px",
            border: "1px solid #ccc",
            resize: "none",
          }}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn w-100"
        style={{
          backgroundColor: "#9f8151",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          fontWeight: "600",
        }}
      >
        Send Message
      </button>
    </form>
    </div>
  );
}
