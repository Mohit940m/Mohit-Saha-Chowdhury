import logo from "../assets/MSCLogoGrayTransparent.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            {/* Added alt text for accessibility */}
            <img className="h-[36px] mx-4" src={logo} alt="MSC Logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/mohit-saha-chowdhury/"
            target="_blank" // Opens link in a new tab
            rel="noopener noreferrer" // Security best practice for target="_blank"
            className="inline-block transition-transform duration-300 hover:scale-110" // Added hover effect and transition
            aria-label="LinkedIn Profile" // Accessibility: Describes the link's purpose
          >
            <FaLinkedin />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/Mohit940m" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/sahachowdhurymohit/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-110"
            aria-label="Instagram Profile"
          >
            <FaInstagram />
          </a>

          {/* X/Twitter Icon */}
          <a
            href="https://x.com/SahaMohit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-300 hover:scale-110"
            aria-label="X (formerly Twitter) Profile"
          >
            <FaSquareXTwitter />
          </a>
        </div>
    </nav>
  )
}

export default Navbar
