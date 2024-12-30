import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import PageTitle from "../../components/page_title/PageTitle";
import Card from "../../components/card/Card";

const Projects = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: "Portfolio Website 💻🎨",
      description:
        "A responsive portfolio showcasing my skills, projects, and experience with React and TailwindCSS.",
      link: "https://yourportfolio.com",
    },
    {
      title: "Weather Info App 🌤️📱",
      description:
        "A modern weather information app built with ReactJS and OpenWeather API.",
      link: "https://weatherapp.com",
    },
    {
      title: "E-commerce API 🛒🛠️",
      description:
        "A RESTful API for an e-commerce platform built with Node.js, Express, and MongoDB.",
      link: "https://ecommerceapi.com",
    },
    {
      title: "KinoCircle 🎥🕊️",
      description:
        "A synchronized movie streaming platform for watching content with friends online.",
      link: "https://kinocircle.com",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <PageTitle title="🚀 My Projects" />
      {/* <div
        data-aos="fade-up"
        className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md border-2 rounded-lg p-6 transform transition-all hover:scale-105"
            data-aos="zoom-in"
          >
            <h2 className="text-2xl sm:text-lg font-bold text-gray-600 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-400 lg:text-8xl pb-2">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm font-semibold hover:underline"
            >
              Get Code
            </a>
          </div>
        ))}
      </div> */}
      <Card lists={projects} />
    </div>
  );
};

export default Projects;
