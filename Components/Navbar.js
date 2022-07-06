import { useState } from "react";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFireAlt,
  faCircleCheck,
  faSearch,
  faUser,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [Toggle, setToggle] = useState(false);

  const tabs = [
    {
      icon: faHome,
      title: "Home",
    },
    {
      icon: faFireAlt,
      title: "Trending",
    },
    {
      icon: faCircleCheck,
      title: "Verified",
    },
    {
      icon: faSearch,
      title: "Search",
    },
    {
      icon: faUser,
      title: "Account",
    },
  ];

  return (
    <div className="fixed w-[100%] flex justify-between items-center bg-dark z-10 min-h-[85px]">
      <div className="ml-5">
        <Link href={"/trending"}>
          <a>
            <svg
              fill="#FFF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="65px"
              height="65px"
            >
              <path d="M 0 15 L 0 34 L 4 34 L 4 25 C 4 24.5 4.398438 24 5 24 L 8 24 C 8.5 24 9 24.398438 9 25 L 9 34 L 13 34 L 13 24 C 13 21.800781 11.199219 20 9 20 L 4 20 L 4 15 Z M 30 15 L 30 34 L 34 34 L 34 15 Z M 15 20 L 15 30 C 15 32.199219 16.800781 34 19 34 L 24 34 C 26.199219 34 27.992188 32.199219 28.09375 30 L 28.09375 20 L 24.09375 20 L 24.09375 28.90625 C 24.09375 29.507813 23.601563 30 23 30 L 20.09375 30 C 19.492188 30 19 29.507813 19 28.90625 L 19 20 Z M 36 20 L 36 30 C 36 32.199219 37.800781 34 40 34 L 45 34 C 47.199219 34 49 32.199219 49 30 L 49 20 L 45 20 L 45 29 C 45 29.5 44.601563 30 44 30 L 41 30 C 40.5 30 40 29.601563 40 29 L 40 20 Z" />
            </svg>{" "}
          </a>
        </Link>
      </div>

      <div className="relative flex items-center justify-center gap-10 mr-5">
        {tabs.map((tab, index) => {
          return (
            <div
              key={index}
              className="relative hidden mt-3 flex-col flex-wrap justify-center items-center gap-1 w-[60px] h-[50px] cursor-pointer group sm:flex"
            >
              <FontAwesomeIcon
                icon={tab.icon}
                className="text-[#FFF] w-[20px] h-[20px] group-hover:animate-bounce"
              />
              <span className="text-[#FFF] text-[15px]">{tab.title}</span>
            </div>
          );
        })}
        <FontAwesomeIcon
          icon={faBarsStaggered}
          className="block text-[#FFF] w-[22px] h-[22px] sm:hidden cursor-pointer"
          onClick={() => setToggle(!Toggle)}
        />
      </div>
      <Sidebar toggle={Toggle} setToggle={setToggle} />
    </div>
  );
}
