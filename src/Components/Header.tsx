import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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

  const location = useLocation();

  const isPathnameHome = location.pathname === ROUTER_PATH_HOME;

  return (
    <div
      className={` w-full grid-container fixed top-0 z-20 py-3.5 ${
        (scroll || !isPathnameHome) && "bg-white text-black shadow-lg"
      } `}
    >
      <div className="container  flex justify-between py-3 ">
        <Link to={ROUTER_PATH_HOME}>
          <div className="flex items-center justify-center ">
            <box-icon
              color={scroll || !isPathnameHome ? "black" : "white"}
              name="coffee"
            ></box-icon>
            <h1
              className={` font-semibold p-1 hover:text-orange-500 ${
                scroll || !isPathnameHome ? "text-black" : "text-white"
              } `}
            >
              Coffee.
            </h1>
          </div>
        </Link>
        <div className="flex items-center ">
          <ul className="flex">
            {headerlists.map((headerlist: any) => {
              const { list, path } = headerlist;
              return (
                <Link to={path}>
                  <li
                    className={`text-white px-10 border-r-2 border-gray-500 font-semibold hover:cursor-pointer hover:text-orange-400 ${
                      (scroll || !isPathnameHome) && "text-black"
                    } `}
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
