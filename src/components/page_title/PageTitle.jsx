import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const PageTitle = ({ title }) => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="py-10 px-0 lg:px-10" data-aos="fade-up">
      <div className="sm:container">
        <div className="border-l-[5px] border-primary pl-5">
          <h1 className="lg:text-4xl text-2xl font-bold text-gray-800 uppercase">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
