import React from "react";
import Card from "../../components/card/Card";
import PageTitle from "../../components/page_title/PageTitle";

const CurrentLearning = () => {

  const learningTopics = [
    {
      title: "Pandas 🐼📊",
      description:
        "Mastering data manipulation and analysis for large datasets.",
    },
    {
      title: "Java ☕💻",
      description:
        "Strengthening object-oriented programming and backend development skills.",
    },
    {
      title: "Flutter 💙📱",
      description:
        "Creating cross-platform mobile applications with beautiful UIs.",
    },
    {
      title: "Mongoose 🍃🛠️",
      description:
        "Working with MongoDB to design and maintain efficient schemas.",
    },
    {
      title: "C and C++ 🔵💡",
      description:
        "Diving deeper into system programming and algorithm efficiency.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <PageTitle title="🚀 Current Learning" />
      <Card lists={learningTopics} />
    </div>
  );
};

export default CurrentLearning;
