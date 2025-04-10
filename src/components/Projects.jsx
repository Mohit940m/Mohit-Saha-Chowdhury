import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion"; // Import motion

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='my-20 text-center text-4xl'>Projects</h1>
      </motion.div>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              {/* Wrap the image in an anchor tag for the link */}
              <a
                href={project.link || "#"} // Use project.link if available in constants, otherwise fallback to #
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security best practice
                className="inline-block transition-transform duration-300 hover:scale-110" // Add hover effect
                aria-label={`Link to ${project.title} project`} // Accessibility
              >
                <img
                  src={project.image}
                  width={150} // Consider moving width/height styling to CSS/Tailwind if needed
                  // height={150} // You might want consistent height too
                  alt={project.title}
                  className="mb-6 rounded" // Removed width/height from here if handled by parent/props
                />
              </a>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:w-3/4'
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span key={index} className='mr-2 mt-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span> // Added mt-2 and inline-block for better wrapping
              ))}
               {/* Optionally add a direct link here too if desired */}
               {project.link && (
                 <a
                   href={project.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="mt-4 inline-block text-blue-400 hover:underline"
                 >
                   View Project
                 </a>
               )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
