import React from "react";
import { useTranslation } from "react-i18next";
import Title from "../Components/Title";
import Blog from "../Components/Blog";

const BlogPage = () => {
  const { t } = useTranslation();
  return (
    <div className="grid-container pt-40">
      <div className="container">
        <div className="md:px-0 px-10">
          <Title title={t("Blog.Title")} subtitle={t("Blog.SubTitle")} />
        </div>
        <Blog />
      </div>
    </div>
  );
};

export default BlogPage;
