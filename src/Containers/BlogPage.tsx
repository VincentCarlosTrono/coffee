import React from "react";
import Title from "../Components/Title";
import Blog from "../Components/Blog";

const BlogPage = () => {
  return (
    <div className="grid-container pt-40">
      <div className="container">
        <div className="md:px-0 px-10">
          <Title
            title="Our Blogs Coffee with trending topic for"
            subtitle=" this week"
          />
        </div>
        <Blog />
      </div>
    </div>
  );
};

export default BlogPage;
