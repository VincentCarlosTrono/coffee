import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import feature1 from "../Media/img/blog1.png";
import feature2 from "../Media/img/blog2.png";
import { ROUTER_PATH_PRODUCTS } from "../Constant";

const Blog = () => {
  const { t } = useTranslation();
  const blogFeatures = [
    {
      image: feature1,
      name: t("Blog.BlogFeature1.Name"),
      description: t("Blog.BlogFeature1.Description"),
      icon: <box-icon color="gray" name="message-square-dots"></box-icon>,
      comment: "12",
      icon2: <box-icon color="gray" name="low-vision"></box-icon>,
      views: "76.5K",
    },
    {
      image: feature2,
      name: t("Blog.BlogFeature2.Name"),
      description: t("Blog.BlogFeature2.Description"),
      icon: <box-icon color="gray" name="message-square-dots"></box-icon>,
      comment: "45",
      icon2: <box-icon color="gray" name="low-vision"></box-icon>,
      views: "356.5K",
    },
  ];
  return (
    <div className="md:flex block gap-20 py-14 md:py-20">
      {blogFeatures.map((blogFeature: any) => {
        const { image, name, description, icon, comment, icon2, views } =
          blogFeature;
        return (
          <div className="py-5 md:py-0 md:px-0 px-10">
            <div className="relative rounded-lg overflow-hidden">
              <img src={image} alt="blogimages" />
              <div className="absolute bottom-0 right-0 p-5 bg-white rounded-tl-xl hover:cursor-pointer hover:bg-orange-500">
                <Link to={ROUTER_PATH_PRODUCTS}>
                  <div className="rotate-45">
                    <box-icon name="up-arrow-alt"></box-icon>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <h1 className="py-7 text-2xl font-semibold">{name}</h1>
              <p className="max-w-sm text-gray-500">{description}</p>
            </div>
            <div className="flex gap-5">
              <div className="flex py-3 gap-5 ">
                <div className="flex gap-2">
                  <div>{icon}</div>
                  <p className="text-gray-500">{comment}</p>
                </div>
                <div className="flex gap-2">
                  <div>{icon2}</div>
                  <p className="text-gray-500">{views}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
