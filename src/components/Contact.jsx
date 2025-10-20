import { CONTACT } from "../constants";
import { motion } from "framer-motion"; // Import motion
import { FaLinkedin, FaGithub, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";

const socials = [
  { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/mohit-saha-chowdhury/", user: "mohit-saha-chowdhury" },
  { name: "GitHub", icon: <FaGithub />, url: "https://github.com/Mohit940m", user: "Mohit940m" },
  { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/sahachowdhurymohit/", user: "sahachowdhurymohit" },
  { name: "X", icon: <FaSquareXTwitter />, url: "https://x.com/SahaMohit", user: "SahaMohit" },
];

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
      

      <div className="flex flex-wrap ">
        {/* Left Section: Contact Info */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/3"
        >
          <div className="text-center lg:text-left">
            <p className="my-4">{CONTACT.address}</p>
            <a href={`mailto:${CONTACT.email}`} className="border-b">
              {CONTACT.email}
            </a>
          </div>
        </motion.div>

        {/* Right Section: Socials */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-2/3"
        >
          <div className="my-8 flex flex-wrap justify-center gap-x-8 gap-y-6 lg:my-0 lg:justify-end">
            {socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-2xl transition-transform duration-300 hover:scale-110">
                {social.icon}
                <span className="hidden text-sm lg:block">
                  <span className="text-neutral-400">{social.name}: </span>
                  <span className="text-white">{social.user}</span>
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
