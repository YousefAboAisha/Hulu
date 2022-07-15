import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";

export default function Categories() {
  const router = useRouter();

  // console.log("dasldpa", Object.entries(requests));

  return (
    <div className="relative flex justify-center mt-5 mb-[40px]">
      <div className="flex items-center whitespace-nowrap py-6 overflow-x-scroll space-x-5 scrollbar-hide  px-5 ">
        {Object.entries(requests).map(([key, { title, url }]) => {
          // console.log(key);
          return (
            <span
              className="min-w-[100px] p-2 bg-dark text-center text-[#FFF] rounded-3xl text-[14px] border-[1px] border-transparent cursor-pointer duration-300 ease-in-out hover:bg-transparent hover:text-dark hover:border-[1px] hover:border-dark"
              key={key}
              onClick={() => router.push(`/${key}/?page=1`)}
            >
              {title}
            </span>
          );
        })}
      </div>
      <div className="absolute top-[50%] translate-x-[-50%] translate-y-[-50%] right-[-7%] bg-gradient-to-l from-[#FFF] h-10 w-[10%]"></div>
    </div>
  );
}
