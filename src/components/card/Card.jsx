import React, {useEffect} from 'react'
import "aos/dist/aos.css";
import AOS from "aos";

const Card = ({lists}) => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

    return (
      <div
        data-aos="fade-up"
        className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2"
      >
        {lists.map((items, index) => (
          <div
            key={index}
            className="bg-white border-2 shadow-lg rounded-lg p-6 transform transition-all"
            data-aos="zoom-in"
          >
            <h2 className="text-2xl sm:text-lg font-bold text-gray-600 mb-2">
              {items.title}
            </h2>
            <p className="text-gray-400 lg:text-8xl font-Roboto mb-2">{items.description}</p>
            <a
              href={items.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm font-semibold hover:underline"
            >
              {items.link ? "Get Code" : ""}
            </a>
          </div>
        ))}
      </div>
    );
}

export default Card
