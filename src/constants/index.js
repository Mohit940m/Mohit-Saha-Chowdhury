import project1 from "../assets/projects/task_manager_03.jpg";
import project2 from "../assets/projects/contact_list_01.jpg";
import project3 from "../assets/projects/weather app.jpg"; 
import project4 from "../assets/projects/portfolio.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with expertise in building dynamic and responsive web applications. My experience includes working with front-end technologies like React.js and Next.js, as well as back-end frameworks like Django and Flask. With a background in Mechanical Engineering, I bring an analytical mindset and problem-solving skills to software development, focusing on delivering high-quality, scalable solutions.`;

export const ABOUT_TEXT = `I am a dedicated software developer transitioning from Mechanical Engineering into full-stack development. After completing my B.Tech in Mechanical Engineering from JIS College of Engineering, I gained experience in MEP Design engineering before shifting my focus to software development. I have worked on various projects using technologies such as React, Next.js, Django, and Flask, and I am continuously expanding my skills by building full-stack applications and working on AI integration. My goal is to contribute to innovative projects and collaborate with forward-thinking teams in the tech industry.`;

export const EXPERIENCES = [
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
    title: " Full-Stack Task Manager",
    image: project1,
    description:
      "Built a Task Management Web Application using Django as the backend and Bootstrap for a responsive frontend. Features task creation, editing, deletion, and photo upload.",
    technologies: ["Next.js", "AI Integration", "Django", "Flask"],
    link: "https://www.linkedin.com/posts/mohit-saha-chowdhury_django-bootstrap-taskmanagement-activity-7243611744269434880-n_7_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACBTBocBoLyjm1RdLF5DrIDgVuY7RowR0sw" // <-- Add actual project link here
  },
  {
    title: "Full-Stack Contact List",
    image: project2,
    description:
      "Developed a contact list application using Flask for the backend and a clean, minimalist frontend interface.",
    technologies: ["Flask", "HTML", "CSS"],
    link: "https://github.com/Mohit940m/Full-Stack-contact-list-using-Flask" // <-- Add actual project link here
  },
  {
    title: "Weather App",
    image: project3,
    description:
      "Built a responsive weather application with a mobile-compatible UI, providing real-time weather data using the OpenWeather API.",
    technologies: ["React.js", "CSS", "OpenWeather API"],
    link: "https://weather-app-react-chi-ten.vercel.app/" // <-- Add actual project link here
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and career journey, built with responsive design and an intuitive user interface.",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    link: "#" // <-- Add actual project link here (or maybe the GitHub repo link)
  },
];

export const CONTACT = {
  address: "Kolkata",
  email: "sahachowdhurymohit@gmail.com",
  linkedin: "www.linkedin.com/in/mohit-sahachowdhury", // Consider adding https://
  github: "github.com/Mohit940m", // Consider adding https://
};

