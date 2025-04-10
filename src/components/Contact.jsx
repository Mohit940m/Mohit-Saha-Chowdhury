import { CONTACT } from "../constants";
import { motion } from "framer-motion"; // Import motion

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Animate the heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h1>

      {/* Animate the contact details section */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }} // Changed x to y for a slide-up effect
        initial={{ opacity: 0, y: 100 }}   // Start from below
        transition={{ duration: 1 }}      // Slightly longer duration
        className="text-center tracking-tighter"
      >
        <p className="my-4">{CONTACT.address}</p>
        {/* Make the email link functional */}
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
