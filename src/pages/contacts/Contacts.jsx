import React, { useState } from "react";
import emailjs from "emailjs-com";
import PageTitle from "../../components/page_title/PageTitle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setSuccessMessage("Message sent successfully! 🎉");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send message:", error.text);
        }
      );
  };

  return (
    <section
      className="min-h-screen w-screen bg-gray-100 text-black px-6"
      id="contact"
    >
      <PageTitle title="📩 Contact Me" />
      <div className="max-w-3xl mx-auto">
        <p className="text-center mb-8 font-Roboto">
          Have questions or want to collaborate? Reach out to me via this form!
        </p>
        {successMessage && (
          <p className="text-green-500 text-center mb-4">{successMessage}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 rounded bg-white text-white border border-gray-700 focus:border-gray-500 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded bg-white text-white border border-gray-700 focus:border-gray-500 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 rounded bg-white text-white border border-gray-700 focus:border-gray-500 focus:outline-none"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 border-2 border-black text-black font-semibold rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
