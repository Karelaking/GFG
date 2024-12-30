import React from "react";
import Card from "../../components/card/Card";
import PageTitle from "../../components/page_title/PageTitle";

const Resolutions = () => {
  const resolutions = [
    {
      title: "Stay Consistent 📅",
      description:
        "Work diligently every day towards my goals, no matter how small the step.",
    },
    {
      title: "Learn New Skills 📘",
      description:
        "Dedicate time to mastering new technologies and enhancing my expertise.",
    },
    {
      title: "Focus on Health 🏋️‍♂️",
      description:
        "Prioritize physical and mental well-being through exercise and mindfulness.",
    },
    {
      title: "Contribute to Community 🤝",
      description:
        "Actively engage in sharing knowledge and supporting others in tech communities.",
    },
    {
      title: "Build a Product 🚀",
      description:
        "Create and launch a meaningful project that makes a positive impact.",
    },
    {
      title: "Stay Curious 🔍",
      description:
        "Explore innovative ideas and remain open to learning from every experience.",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-black py-12 px-6">
        <PageTitle title="🌟 Resolutions for 2025" />
      <div className="max-w-7xl flex flex-col mx-auto">
        <p className="text-xl mb-10 text-gray-600 text-center font-Roboto">
          These resolutions define my commitment to continuous improvement and
          achieving greatness.
        </p>
        <Card lists={resolutions} />
      </div>
    </section>
  );
};

export default Resolutions;
