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
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
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

    if (formData.file && formData.file.size > 5 * 1024 * 1024) { // 5 MB
      newErrors.file = "File size must be under 5 MB.";
    }

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
    const form = new FormData();

    // Append form fields
    for (const key in formData) {
        if (key !== 'file') {
            form.append(key, formData[key]);
        }
    }

    // Handle file upload. Google Apps Script needs special handling for files.
    // A common way is to convert the file to a base64 string.
    if (formData.file) {
        const reader = new FileReader();
        reader.readAsDataURL(formData.file);
        reader.onload = () => {
            const fileData = reader.result.split('base64,')[1];
            form.append('fileData', fileData);
            form.append('fileName', formData.file.name);
            form.append('fileType', formData.file.type);
            sendData(scriptURL, form);
        };
        reader.onerror = (error) => {
            console.error('Error reading file:', error);
            setStatus("error");
        };
    } else {
        sendData(scriptURL, form);
    }
  };

  const sendData = async (url, data) => {
  try {
    if (!url) {
      console.error("Google Script URL is not defined. Please check your .env file.");
      setStatus("error");
      return;
    }

    const response = await fetch(url, {
      method: 'POST',
      body: data,
    });

    // Check if response is ok before trying to parse JSON
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Server response:', result);
    
    if (result.result === "success") {
      setStatus("success");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", query: "", description: "", file: null });
      document.getElementById('contact-form').reset();
    } else {
      setStatus("error");
      console.error("Server error:", result.message);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
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
        For over a decade, I've been solving diverse technical challenges for clients, including corporate projects. Feel free to share your project details or questions with me here. I'm happy to help.
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
            <div className="sm:col-span-2">
              <label htmlFor="file" className="block text-sm font-medium text-neutral-300">Attach File (Image or PDF)</label>
              <input type="file" id="file" name="file" onChange={handleFileChange} accept="image/*,.pdf" className="mt-1 block w-full text-sm text-neutral-400 file:mr-4 file:rounded-md file:border-0 file:bg-neutral-700 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-neutral-600"/>
              <p className="mt-1 text-xs text-neutral-500">Max file size: 5 MB.</p>
              {errors.file && <p className="mt-1 text-xs text-red-500">{errors.file}</p>}
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