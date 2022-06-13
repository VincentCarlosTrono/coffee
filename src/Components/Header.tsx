import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ROUTER_PATH_BLOG,
  ROUTER_PATH_HOME,
  ROUTER_PATH_PREMIUM,
  ROUTER_PATH_PRODUCTS,
} from "../Constant";

const Header = () => {
  const headerlists = [
    {
      list: "Home",
      path: ROUTER_PATH_HOME,
    },
    {
      list: "Products",
      path: ROUTER_PATH_PRODUCTS,
    },
    {
      list: "Premium",
      path: ROUTER_PATH_PREMIUM,
    },
    {
      list: "Blog",
      path: ROUTER_PATH_BLOG,
    },
  ];

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  });

  return (
    <div
      className={` w-full grid-container fixed top-0 z-10 py-3.5 ${
        scroll && "bg-white text-black shadow-xl"
      }`}
    >
      <div className="container  flex justify-between py-3 ">
        <div className="flex items-center justify-center ">
          <box-icon color={scroll ? "black" : "white"} name="coffee"></box-icon>
          <h1
            className={` font-semibold p-1 ${
              scroll ? "text-black" : "text-white"
            }`}
          >
            Coffee.
          </h1>
        </div>
        <div className="flex items-center ">
          <ul className="flex">
            {headerlists.map((headerlist: any) => {
              const { list, path } = headerlist;
              return (
                <Link to={path}>
                  <li
                    className={`text-white px-10 border-r-2 border-gray-500 font-semibold hover:cursor-pointer hover:text-orange-400 ${
                      scroll && "text-black"
                    }`}
                  >
                    {list}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
