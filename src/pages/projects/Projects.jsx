import React from "react";
import PageTitle from "../../components/page_title/PageTitle";
import Card from "../../components/card/Card";

const Projects = () => {

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
      <Card lists={projects} />
    </div>
  );
};

export default Projects;
