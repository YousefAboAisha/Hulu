import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faPlay } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../../Components/carousel";
import Table from "../../Components/table";
import Comments from "../../Components/comments";

export default function Movie({ movie }) {
  const router = useRouter();

  console.log(movie);
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const imdbURL = "https://www.imdb.com/title/";

  const obj = {
    name: "yousef",
    age: 21,
  };

  return movie.success == false ? (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center flex-col items-center gap-4 min-h-[800px]">
      <h2 className="font-bold text-xl">Movie Not Found!</h2>
      <button
        className="cursor-pointer bg-dark text-[#FFF] rounded-xl px-5 py-3"
        onClick={() => router.back()}
      >
        Click here to go back !
      </button>
    </div>
  ) : (
    <div className="relative mt-[80px] ">
      {/* Comments right section */}
      <div className="hidden md:hidden lg:w-3/12 lg:fixed lg:block h-full p-2 top-[85px] text-[#FFF] overflow-y-scroll pb-[250px] ">
        <Comments />
      </div>

      {/* Middle section */}
      <div className="min-h-[1300px] lg:w-6/12 lg:mt-10 md:w-full mx-auto sm:w-full">
        <div className="relative lg:w-11/12 md:full sm:full mx-auto after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-[#00000042] lg:rounded-xl md:rounded-none sm:rounded-none shadow-l">
          <Image
            layout="responsive"
            height={1080}
            width={1920}
            src={
              `${baseURL}${movie.backdrop_path || movie.poster_path}` ||
              `${baseURL}${movie.poster_path}`
            }
            alt={movie.title || movie.original_name}
            priority={true}
          />
          <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black h-[20%] w-full"></div>
        </div>
        <div className="lg:p-0 md:p-3 sm:p-3 mt-[20px] p-3 lg:w-11/12 md:full sm:full mx-auto">
          <h2 className="text-2xl font-bold text-dark mb-6">
            {movie.title || movie.original_name} (
            {movie.release_date.split("-")[0]})
          </h2>

          <div className="relative overflow-x-auto shadow-sm rounded-lg my-2 border-l border scrollbar-hide">
            <Table movie={movie} />
          </div>

          <h2 className="mt-5 font-bold text-dark text-2xl mb-1">
            Movie Overview
          </h2>

          <p className="w-full">{movie.overview}</p>
          <div className="relative flex gap-3">
            <a href={movie.homepage} target="_blank" rel="noreferrer">
              <button className="relative border-1 flex items-center gap-2 mt-5 p-3 rounded-md text-[#FFF] shadow-xl bg-dark hover:bg-transparent hover:border-dark border-[1px] hover:text-dark ease-in-out duration-500">
                Download Now
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="w-[22px] h-[22px] text-gold"
                />
              </button>
            </a>

            {movie.imdb_id ? (
              <a
                href={`${imdbURL}${movie.imdb_id}`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="relative border-1 flex items-center gap-2 mt-5 p-[11px] rounded-md text-dark shadow-xl border-[1px] border-dark">
                  IMDB page
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="w-[22px] h-[22px]"
                  />
                </button>
              </a>
            ) : null}
          </div>

          {/* <div className="my-10">
            <h2 className="mt-5 font-bold text-dark text-2xl mb-1">
              Production Companies
            </h2>
            <Carousel data={movie.production_companies} url={baseURL} />
          </div> */}
        </div>
      </div>

      {/* Ads right section */}
      <div className="hidden md:hidden lg:w-3/12 lg:fixed lg:flex lg:items-center lg:justify-center h-full border shadow-md top-[85px] p-2 right-0 text-[#FFF]">
        <span className="text-[red]">Google Ads</span>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const API_KEY = process.env.API_KEY;
  const { params } = context;
  const { movie_id } = params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
  const data = await res.json();

  return {
    props: {
      movie: data,
    },
  };
}
