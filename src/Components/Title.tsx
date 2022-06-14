import React from "react";

const Title = (props: any) => {
  const { title, subtitle } = props;
  return (
    <div className="md:text-4xl text-2xl">
      <h1 className=" md:max-w-2xl border-l-2 md:border-l-4 border-orange-500 px-0 md:px-2  ">
        {title}
      </h1>
      <h1 className="md:border-l-4  border-l-2 border-white md:px-2">
        {subtitle}
      </h1>
    </div>
  );
};

export default Title;
