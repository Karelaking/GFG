// import React from "react";
// import PageTitle from "../../components/page_title/PageTitle";

// const About = () => {
//   return (
//     <section className="w-screem h-screen px-16">
//       <PageTitle title="About Us" />
//       <h1 className="text-4xl font-bold pt-4 pb-5">Mradul kumar katiyar</h1>
//       <p className="font-semibold pb-2">
//         👨‍🎓 Computer Science Student || 🐍 Python || 🔙 Backend Developer || 🌐
//         Web Dev Enthusiast || 🚀 Aspiring Innovator
//       </p>
//       <p className="font-normal font-xl pt-2">
//         🌟 Passionate Programmer | Tech Explorer | Lifelong Learner Namaste! 🙏
//         I’m a programming enthusiast with a love for discovering new tech. 💻🌐
//         I’m always eager to learn, dive into projects, and grow my skills with
//         each challenge! 📈✨ 💬 I believe in Jugaad—creative problem-solving—and
//         enjoy connecting with people from different backgrounds. My strong
//         communication skills and friendly approach help me collaborate
//         effectively, bringing out the best in team projects. 🚀 Guided by
//         discipline and focus, I stay committed to my goals, continuously working
//         on personal and professional growth. 📚💪 Let’s connect and explore the
//         tech world together! 🌍👥
//       </p>
//       <div className="flex gap-4 py-6">
//         <button className="bg-black border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5">
//           Get Started
//         </button>
//         <button className="bg-black border-dark dark:border-dark-2 border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-body-color hover:border-body-color disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5">
//           Get Started
//         </button>
//       </div>

//     </section>
//   );
// };

// export default About;

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
        className="w-screen h-screen px-16 bg-gradient-to-br from-gray-50 to-gray-200"
        id="about"
      >
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <div data-aos="fade-down">
            <PageTitle title="👋 About Me" />
          </div>

          {/* Heading */}
          <h1
            className="text-4xl font-bold pb-6 text-gray-900"
            data-aos="fade-up"
          >
            👩‍💻 Mradul Kumar Katiyar
          </h1>

          {/* Short Intro */}
          <p
            className="font-semibold text-lg text-gray-700 flex items-center gap-2 pb-4"
            data-aos="fade-right"
          >
            👨‍🎓 Computer Science Student &nbsp;|| &nbsp;🐍 Python Developer
            &nbsp;|| &nbsp;🔙 Backend Developer &nbsp;|| &nbsp;🌐 Web Dev
            Enthusiast
          </p>

          {/* About Text */}
          <p
            className="font-normal text-xl font-Roboto text-gray-600 leading-7"
            data-aos="fade-left"
          >
            🌟 Passionate Programmer | Tech Explorer | Lifelong Learner
            Namaste! <br />
            🙏 I’m a programming enthusiast with a love for discovering
            new tech. 💻🌐 I’m always eager to learn, dive into projects, and
            grow my skills with each challenge! 📈✨
            <br />
            💬 I believe in Jugaad—creative problem-solving—and enjoy connecting
            with people from different backgrounds. My strong communication
            skills and friendly approach help me collaborate effectively,
            bringing out the best in team projects. 🚀
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
