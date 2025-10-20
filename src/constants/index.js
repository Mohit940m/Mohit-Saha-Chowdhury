import project1 from "../assets/projects/task_manager_03.jpg";
import project2 from "../assets/projects/contact_list_01.jpg";
import project3 from "../assets/projects/weather app.jpg";
import project4 from "../assets/projects/portfolio.jpg";
import project5 from "../assets/projects/Contact_manage_01_compress.jpg";
import project6 from "../assets/projects/Recipy_App_02.jpg";
import project7 from "../assets/projects/Todo_app.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with expertise in building dynamic and responsive web applications. My experience includes working with front-end technologies like React.js and Next.js, as well as back-end frameworks like Django and Flask. With a background in Mechanical Engineering, I bring an analytical mindset and problem-solving skills to software development, focusing on delivering high-quality, scalable solutions.`;

export const ABOUT_TEXT = `I am a dedicated software developer transitioning from Mechanical Engineering into full-stack development. After completing my B.Tech in Mechanical Engineering from JIS College of Engineering, I gained experience in MEP Design engineering before shifting my focus to software development. I have worked on various projects using technologies such as React, Next.js, Django, and Flask, and I am continuously expanding my skills by building full-stack applications and working on AI integration. My goal is to contribute to innovative projects and collaborate with forward-thinking teams in the tech industry.`;

export const EXPERIENCES = [
  {
    year: "April 2025 - Present",
    role: " Frontend Developer Intern → Node.js Developer Intern (Remote)",
    company: "Talentrise Technokrate Pvt. Ltd.",
    description: ` Started as a Frontend Intern (Apr–Jun 2025), enhancing UI components and integrating APIs before transi
tioning to backend development.
 • Developed and optimized backend services using Node.js and Express, implementing secure single-device login,
 JWTauthentication, and integrating Auth0 and Brave in separate projects; also built real-time communication
 features with Socket.io.
 • Assisted the DevOps team in deploying and managing applications using AWS EC2, Docker, and NGINX.`,
    technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "Socket.io", "AWS EC2", "Docker", "NGINX", "Auth0", "Brave"],
  },
  {
    year: "January 2023 - September 2023",
    role: "Trainee MEP Design Engineer ",
    company: "SANJIVANI ENGINEERING CONSULTANTS",
    description: `Assisted in developing and implementing MEP design plans. Prepared design calculations and drawings using CAD and Excel, and collaborated with engineers, architects, and contractors to enhance teamwork and communication skills.`,
    technologies: ["AutoCAD", "Excel"],
  },
  {
    year: "March 2022 - August 2022",
    role: "Graduate Engineering Trainee ",
    company: "L.T. ELEVATOR PRIVATE LIMITED",
    description: `Engaged in hands-on elevator installation and site visits, improving problem-solving skills. Gained insights into elevator sales and client interaction, honing communication and crafting tailored solutions for clients.`,
    technologies: ["Mechanical Engineering", "Problem Solving"],
  },
];

export const PROJECTS = [
  {
    title: "Real-Time Collaborative Kanban App",
    image: project7, // replace with your actual image import
    description:
      "Built a full-stack real-time Kanban-style ToDo application with multi-board support, role-based access, and live task updates using Socket.IO. Features include JWT authentication, activity logs, task drag-and-drop (mobile and desktop), and board invitations by email. Developed using React.js, Node.js, Express.js, MongoDB, and Socket.IO with a responsive UI using Material UI and conditional rendering. Frontend hosted on Netlify, backend on Render with CORS and environment-based configuration.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    link: "https://todo-kanban-style.netlify.app/"
  },
  {
    title: " AI-Powered Recipe Application ",
    image: project6,
    description:
      "Developed a full-stack Recipe To-Do web application integrating Gemini AI API for intelligent recipe suggestions based on user ingredients. Built using React.js, Node.js, Express.js, and MongoDB with JWT authentication and secure routing. Users can add ingredients, receive recipe ideas, and manage cooking tasks in a responsive tailwindcss. Deployed both frontend and backend on Render with environment-based configurations and proper error handling.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI API"],
    link: "https://recipe-app-i61u.vercel.app/" // project link
  },
  {
    title: " Contact Management Web Application ",
    image: project5,
    description:
      "Built a full-stack Contact Management Web Application using React.js, Node.js, Express.js, and MongoDB. Implemented JWT authentication, CRUD operations, and search functionality with a responsive UI using Material UI. Deployed both frontend and backend on Render with proper CORS configuration for secure API communication. Focused on clean architecture, error handling, and real-world deployment practices.",
    technologies: ["Node.js", "Express.js", "React.js", "MongoDB"],
    link: "https://contact-management-web-application-hk2g.onrender.com" // project link
  },
  {
    title: " Full-Stack Task Manager",
    image: project1,
    description:
      "Built a Task Management Web Application using Django as the backend and Bootstrap for a responsive frontend. Features task creation, editing, deletion, and photo upload.",
    technologies: ["Bootstrap", "Django",],
    link: "https://www.linkedin.com/posts/mohit-saha-chowdhury_django-bootstrap-taskmanagement-activity-7243611744269434880-n_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACBTBocBoLyjm1RdLF5DrIDgVuY7RowR0sw" // <-- Add actual project link here
  },
  {
    title: "Full-Stack Contact List",
    image: project2,
    description:
      "Developed a contact list application using Flask for the backend and a clean, minimalist frontend interface.",
    technologies: ["Flask", "HTML", "CSS"],
    link: "https://github.com/Mohit940m/Full-Stack-contact-list-using-Flask"
  },
  {
    title: "Weather AI App",
    image: project3,
    description:
      "Built a responsive weather application with a mobile-compatible UI, providing real-time weather data using the OpenWeather API and Gemini AI for enhanced user experience. The app features a clean design with Tailwind CSS and is fully functional on both desktop and mobile devices.",
    technologies: ["React.js", "Tailwind CSS", "OpenWeather API", "Gemini AI"],
    link: "https://weather-app-react-chi-ten.vercel.app/"
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and career journey, built with responsive design and an intuitive user interface.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    link: "#" // 
  },
];

export const CONTACT = {
  address: "Kolkata",
  email: "sahachowdhurymohit@gmail.com",
  linkedin: "www.linkedin.com/in/mohit-sahachowdhury",
  github: "github.com/Mohit940m",
};

