import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const PageTitle = ({ title }) => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="py-12" data-aos="fade-up">
      <div className="sm:container">
        <div className="border-l-[5px] border-primary pl-5">
          <h1 className="text-4xl font-bold text-gray-800">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
