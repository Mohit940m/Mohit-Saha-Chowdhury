import { useState } from "react";
import { motion } from "framer-motion";


// A reusable input field component for our form
const FormInput = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  required = false,
}) => (
  <div className="w-full">
    <label htmlFor={id} className="block text-sm font-medium text-neutral-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`mt-1 block w-full rounded-md border-neutral-700 bg-neutral-800 p-3 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm ${
        error ? "border-red-500" : "border-neutral-700"
      }`}
    />
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

// A reusable textarea component
const FormTextarea = ({
  id,
  label,
  rows = 4,
  value,
  onChange,
  placeholder,
  error,
  required = false,
}) => (
  <div className="w-full">
    <label htmlFor={id} className="block text-sm font-medium text-neutral-300">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={id}
      name={id}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`mt-1 block w-full rounded-md border-neutral-700 bg-neutral-800 p-3 text-white shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm ${
        error ? "border-red-500" : "border-neutral-700"
      }`}
    ></textarea>
    {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
  </div>
);

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    query: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required.";
    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.query) newErrors.query = "Your query is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    // This is where you will send data to your Google Apps Script
    // You will need to replace 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL'
    // with the actual URL from your deployed script.
    const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    // Build a plain object payload that we'll POST as JSON.
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      query: formData.query,
      description: formData.description,
      timestamp: new Date().toISOString(),
    };

    sendData(scriptURL, payload);
  };

  const sendData = async (url, payload) => {
    try {
      if (!url) {
        console.error("Google Script URL is not defined. Please set `VITE_GOOGLE_SCRIPT_URL` in your environment.");
        setStatus("error");
        return;
      }

      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // With 'no-cors', we can't read the response. We assume success if fetch doesn't throw an error.
      // The request is sent, and we proceed as if it was successful.
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        query: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };


  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact Me
      </motion.h1>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="mx-auto mb-12 max-w-3xl text-center text-lg text-neutral-400"
      >
        I've been solving diverse technical challenges for clients, including corporate projects. Feel free to share your project details or questions with me here. I'm happy to help.
      </motion.p>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="mx-auto max-w-3xl"
      >
        <form id="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            <FormInput id="firstName" label="First Name" value={formData.firstName} onChange={handleInputChange} error={errors.firstName} required />
            <FormInput id="lastName" label="Last Name" value={formData.lastName} onChange={handleInputChange} error={errors.lastName} required />
            <FormInput id="email" label="Email" type="email" value={formData.email} onChange={handleInputChange} error={errors.email} required />
            <FormInput id="phone" label="Phone Number" type="tel" value={formData.phone} onChange={handleInputChange} error={errors.phone} />
            <div className="sm:col-span-2">
              <FormTextarea id="query" label="Your Query" value={formData.query} onChange={handleInputChange} error={errors.query} required />
            </div>
            <div className="sm:col-span-2">
              <FormTextarea id="description" label="More Description" value={formData.description} onChange={handleInputChange} error={errors.description} />
            </div>
          </div>
          <div className="mt-8 text-center">
            <button type="submit" disabled={status === 'submitting'} className="rounded bg-cyan-600 px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-neutral-600">
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        {status === 'success' && <p className="mt-4 text-center text-green-400">Message sent successfully! Thank you.</p>}
        {status === 'error' && <p className="mt-4 text-center text-red-500">Something went wrong. Please try again.</p>}
      </motion.div>
    </div>
  );
};

export default Form;