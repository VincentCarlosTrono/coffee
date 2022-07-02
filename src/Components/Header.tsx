import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import {
  ROUTER_PATH_BLOG,
  ROUTER_PATH_HOME,
  ROUTER_PATH_PREMIUM,
  ROUTER_PATH_PRODUCTS,
} from "../Constant";

const Header = () => {
  const { t, i18n } = useTranslation();

  const headerlists = [
    {
      list: t("Navigation.Home"),
      path: ROUTER_PATH_HOME,
    },
    {
      list: t("Navigation.Products"),
      path: ROUTER_PATH_PRODUCTS,
    },
    {
      list: t("Navigation.Premium"),
      path: ROUTER_PATH_PREMIUM,
    },
    {
      list: t("Navigation.Blog"),
      path: ROUTER_PATH_BLOG,
    },
  ];

  const [open, setOpen] = useState(false);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  });

  const location = useLocation();

  const isPathnameHome = location.pathname === ROUTER_PATH_HOME;

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div
        className={` w-full grid-container fixed top-0 z-20 py-3.5 ${
          (scroll || !isPathnameHome) && "bg-white text-black shadow-lg"
        } `}
      >
        <div className="container  flex justify-between py-3 relative ">
          <Link to={ROUTER_PATH_HOME}>
            <div className="flex items-center justify-center ">
              <box-icon
                color={scroll || !isPathnameHome ? "black" : "white"}
                name="coffee"
              ></box-icon>
              <Link to={ROUTER_PATH_HOME}>
                <h1
                  className={` font-semibold p-1 hover:text-orange-500 ${
                    scroll || !isPathnameHome ? "text-black" : "text-white"
                  } `}
                >
                  {t("Title")}
                </h1>
              </Link>
            </div>
          </Link>
          <div className="md:flex items-center hidden ">
            <ul className="flex">
              {headerlists.map((headerlist: any) => {
                const { list, path } = headerlist;
                return (
                  <Link to={path}>
                    <li
                      className={`text-white px-10 border-r-2 border-gray-500 font-semibold hover:cursor-pointer hover:text-orange-400  ${
                        (scroll || !isPathnameHome) && "text-black "
                      } `}
                    >
                      {list}
                    </li>
                  </Link>
                );
              })}
              <select
                className={` ml-5 bg-transparent   text-white font-semibold ${
                  (scroll || !isPathnameHome) && "text-black "
                } `}
                onChange={(event) => changeLanguage(event.target.value)}
              >
                <option value="en" className="text-black">
                  EN
                </option>
                <option value="ja" className="text-black">
                  JA
                </option>
                <option value="es" className="text-black">
                  ES
                </option>
              </select>
            </ul>
          </div>
          <div className="md:hidden block">
            <button
              onClick={() => {
                setOpen(!open);
              }}
            >
              <box-icon
                color={scroll || !isPathnameHome ? "black" : "white"}
                name="chevron-down-square"
              ></box-icon>
            </button>
          </div>
        </div>
      </div>

      <div className="">
        {open && (
          <ul className="md:hidden grid py-40 text-right justify-center items-center bg-darkgray w-full h-screen z-40 fixed">
            <div className="text-white absolute right-0 top-0 z-50 px-6 py-7">
              <button
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <box-icon color="white" name="chevron-up-square"></box-icon>
              </button>
            </div>
            {headerlists.map((headerlist: any) => {
              const { list, path } = headerlist;
              return (
                <Link to={path}>
                  <li
                    onClick={() => {
                      setOpen(!open);
                    }}
                    className="text-white px-10border-gray-500 font-semibold hover:cursor-pointer  text-center"
                  >
                    {list}
                  </li>
                </Link>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
