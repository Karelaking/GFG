import React, { useEffect } from "react";
import PageTitle from "../../components/page_title/PageTitle";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="w-screen flex items-center h-full lg:h-screen bg-gradient-to-br from-gray-50 to-gray-200"
      id="about"
    >
      <div className="mx-auto lg:px-24 px-8">
        {/* Page Title */}
        <div data-aos="fade-down">
          <PageTitle title="👋 About Me" />
        </div>

        {/* Heading */}
        <h1
          className="lg:text-6xl text-4xl font-bold lg:pb-10 pb-4 lg:mt-20 text-gray-900"
          data-aos="fade-up"
        >
          👩‍💻 Mradul Kumar Katiyar
        </h1>

        {/* Short Intro */}
        <p
          className="font-semibold lg:text-2xl lg:px-8 text-gray-700 flex items-center gap-2 lg:pb-8 pb-4"
          data-aos="fade-right"
        >
          👨‍🎓 Computer Science Student &nbsp;|| &nbsp;🐍 Python Developer
          &nbsp;|| &nbsp;🔙 Backend Developer &nbsp;|| &nbsp;🌐 Web Dev
          Enthusiast
        </p>

        {/* About Text */}
        <p
          className="font-normal lg:text-3xl lg:px-8 mb-12  font-Roboto text-gray-600"
          data-aos="fade-left"
        >
          🌟 Passionate Programmer | Tech Explorer | Lifelong Learner Namaste!{" "}
          <br />
          🙏 I’m a programming enthusiast with a love for discovering new tech.
          💻🌐 I’m always eager to learn, dive into projects, and grow my skills
          with each challenge! 📈✨
          <br />
          💬 I believe in Jugaad—creative problem-solving—and enjoy connecting
          with people from different backgrounds. My strong communication skills
          and friendly approach help me collaborate effectively, bringing out
          the best in team projects. 🚀
          <br />
          Guided by discipline and focus, I stay committed to my goals,
          continuously working on personal and professional growth. 📚💪
          <br />
          Let’s connect and explore the tech world together! 🌍👥
        </p>
      </div>

      {/* Decorative Gradient Elements */}
      <div
        className="absolute top-0 left-[-100px] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-3xl opacity-60"
        data-aos="zoom-in-right"
      ></div>
      <div
        className="absolute bottom-0 right-[-100px] w-[300px] h-[300px] rounded-full bg-gradient-to-l from-green-400 via-blue-400 to-purple-500 blur-3xl opacity-60"
        data-aos="zoom-in-left"
      ></div>
    </section>
  );
};

export default About;
