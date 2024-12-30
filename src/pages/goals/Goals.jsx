import React from "react";
import Card from "../../components/card/Card";
import PageTitle from "../../components/page_title/PageTitle";

const Goals = () => {
  const goals = [
    {
      title: "Become a Full-Stack Developer 🖥️⚙️",
      description:
        "Master both frontend and backend technologies, including React, Node.js, and cloud platforms like AWS and Netlify.",
    },
    {
      title: "Contribute to Open Source 🤝🌍",
      description:
        "Actively participate in open-source projects and contribute meaningful code to the developer community.",
    },
    {
      title: "Launch My YouTube Channel 🎥💡",
      description:
        "Create a unique tech-focused channel, sharing tips, tutorials, and innovations not seen before.",
    },
    {
      title: "Learn Advanced AI Concepts 🤖📚",
      description:
        "Dive deeper into artificial intelligence and machine learning to build smarter applications.",
    },
    {
      title: "Build an Innovative Product 🚀🛠️",
      description:
        "Create and launch a product that solves a real-world problem, standing out in the tech space.",
    },
    {
      title: "Master Data Structures and Algorithms 📊🧠",
      description:
        "Enhance problem-solving skills by mastering DSAs for interviews and scalable solutions.",
    },
    {
      title: "Start Writing Technical Blogs ✍️📘",
      description:
        "Share knowledge and insights by publishing well-documented and engaging tech blogs.",
    },
    {
      title: "Attend International Tech Events 🌐🎤",
      description:
        "Participate in global hackathons and conferences to network, learn, and showcase innovative solutions.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <PageTitle title="🎯 My Goals" />
      <Card lists={goals} />
    </div>
  );
};

export default Goals;
