import React from "react";

const PageTitle = ({title, subtitle}) => {
  return (
    <section className="py-[70px] dark:bg-dark">
      <div className="mx-auto px-4 sm:container">
        <div className="border-l-[5px] border-primary pl-5">
          <h1 className="mb-2 text-2xl font-semibold text-black">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
