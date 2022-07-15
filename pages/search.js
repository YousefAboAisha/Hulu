import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Thumnail from "../Components/thumnail";
import Spinner from "../Components/spinner/spinner";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress

export default function Search() {
  const [Query, setQuery] = useState("");
  const [Data, setData] = useState();
  const [Loading, setLoading] = useState(null);
  const [ErrorText, setErrorText] = useState("");

  const searchHandler = async () => {
    NProgress.start();
    const req = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8e1b4952140dfb6e08f859338eb922de&query=${Query}&page=1`
    );
    const result = await req.json();

    if (result) {
      setData(result.results);
      NProgress.done();
      console.log(result);

      if (result.errors) {
        setErrorText(result.errors[0] ?? "");
      }
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };

  console.log(Data);

  return (
    <div className="relative flex flex-col items-center mt-[80px] p-2">
      <div className="flex relative items-center p-4 w-full lg:w-6/12 md:w-10/12 my-8">
        <div
          onClick={searchHandler}
          className="absolute flex items-center justify-center bg-dark h-[42px] w-[50px] text-[#FFF] cursor-pointer"
        >
          <FontAwesomeIcon icon={faSearch} className="h-4 w-4" />
        </div>
        <input
          type={"text"}
          placeholder="Search for movies"
          onChange={(e) => setQuery(e.target.value)}
          value={Query}
          className="w-full p-2 pl-[60px] outline-none border-[#DDD] border-[1px] duration-300 focus:border-dark"
          onKeyDown={handleEnter}
        />
      </div>

      <div className="grid gap-5 md:gap-5 px-5 sm:grid md:grid-cols-2 lg:grid-cols-3 pt-[10px] pb-[50px] overflow-y-hidden xl:grid-cols-4 min-h-[400px]">
        {Loading ? (
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Spinner />
          </div>
        ) : Data && Data.length > 0 ? (
          Data.map((elem) => {
            return <Thumnail key={elem.id} result={elem} />;
          })
        ) : (
          <h2 className="text-lg absolute top-[50%] left-[50%] translate-x-[-50%] font-bold translate-y-[-50%]">
            {ErrorText ?? "No results found !"}
          </h2>
        )}
      </div>
    </div>
  );
}
