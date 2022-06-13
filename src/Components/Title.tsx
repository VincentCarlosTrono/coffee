import React from "react";

const Title = (props: any) => {
  const { title, subtitle } = props;
  return (
    <div className="text-4xl">
      <h1 className=" max-w-2xl border-l-4 border-orange-500 px-2  ">
        {title}
      </h1>
      <h1 className="border-l-2 border-white px-2">{subtitle}</h1>
    </div>
  );
};

export default Title;
