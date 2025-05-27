import React, { useState } from "react";
import { useContactForm } from "./hooks/useContactForm";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { loading, successMessage, errorMessage } = useContactForm();
  console.log(form, "Form>>>>>>>>>");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      Contact Form
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
        />
        <br />
        <br />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your email"
        />
        <br />
        <br />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write message"
        />
        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p> {errorMessage} </p>}
    </div>
  );
};

export default ContactForm;
