import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faStar,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "../../Components/carousel";

export default function Movie({ movie }) {
  const router = useRouter();

  console.log(movie);
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const imdbURL = "https://www.imdb.com/title/";

  return movie.success == false ? (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center flex-col items-center gap-4">
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
      <div className="hidden md:hidden lg:w-3/12 lg:fixed lg:block h-full bg-[#8a8597] p-2 top-[85px] text-[#FFF]">
        Right
      </div>
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
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 text-dark font-bold whitespace-nowrap"
                  >
                    Tagline
                  </th>
                  <td className="flex px-2 py-2 gap-3 my-2 items-center text-dark">
                    {movie.tagline}
                  </td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className={`px-6 py-4 text-dark font-bold whitespace-nowrap`}
                  >
                    Status
                  </th>
                  <td
                    className={`flex px-2 py-2 gap-3 my-2 items-center ${
                      movie.status == "Released"
                        ? "text-[#4cd137] font-bold"
                        : "text-dark"
                    }`}
                  >
                    {movie.status}
                  </td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 text-dark font-bold whitespace-nowrap"
                  >
                    Reviews
                  </th>
                  <td className="flex px-2 py-2 gap-2 my-2 items-center text-dark">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-gold translate-y-[-1px] w-5 h-5"
                    />
                    {movie.vote_average}
                  </td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 text-dark font-bold whitespace-nowrap"
                  >
                    Keywords
                  </th>
                  <td className="flex px-2 py-2 gap-3 my-2 items-center">
                    {movie.genres.map((elem, index) => {
                      return (
                        <span
                          className="text-dark px-2 py-1 text-[14px]"
                          key={index}
                        >
                          {elem.name}
                        </span>
                      );
                    })}
                  </td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 text-dark font-bold whitespace-nowrap"
                  >
                    Countries
                  </th>
                  <td className="flex px-2 py-2 gap-3 my-2 items-center truncate cursor-e-resize">
                    {movie.production_countries.map((elem, index) => {
                      return (
                        <span
                          className="text-dark px-2 py-1 text-[14px]"
                          key={index}
                        >
                          {elem.name} | {elem.iso_3166_1}
                        </span>
                      );
                    })}
                  </td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 text-dark font-bold whitespace-nowrap"
                  >
                    Languages
                  </th>
                  <td className="flex px-2 py-2 gap-3 my-2 items-center">
                    {movie.spoken_languages.map((elem, index) => {
                      return (
                        <span
                          className="text-dark px-2 py-1 text-[14px]"
                          key={index}
                        >
                          {elem.name} | {elem.iso_639_1}
                        </span>
                      );
                    })}
                  </td>
                </tr>

                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 text-dark font-bold whitespace-nowrap"
                  >
                    Duration
                  </th>
                  <td className="flex px-2 py-2 gap-3 my-2 items-center">
                    <span className="text-dark px-2 py-1 text-[14px]">
                      {Math.floor(movie.runtime / 60)}hours |{" "}
                      {Math.floor(movie.runtime % 60)}mins
                      <span className="ml-2 font-bold">
                        ({Math.floor(movie.runtime)} minutes)
                      </span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="mt-5 text-dark font-bold text-2xl mb-1">
            Movie Overview
          </h2>

          <p className="w-full">{movie.overview}</p>
          <div className="relative flex gap-3">
            <a href={movie.homepage} target="_blank" without rel="noreferrer">
              <button className="relative border-1 flex items-center gap-2 mt-5 p-3 rounded-md text-[#FFF] shadow-xl bg-dark hover:bg-transparent hover:text-dark ease-in-out duration-500">
                Download Now
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className="w-[22px] h-[22px]"
                />
              </button>
            </a>

            {movie.imdb_id ? (
              <a
                href={`${imdbURL}${movie.imdb_id}`}
                target="_blank"
                without
                rel="noreferrer"
              >
                <button className="relative border-1 flex items-center gap-2 mt-5 p-3 rounded-md text-dark shadow-xl border-[1px] border-dark">
                  IMDB page
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="w-[22px] h-[22px]"
                  />
                </button>
              </a>
            ) : null}
          </div>
          <div className="my-10">
            <h2 className="mb-4 text-dark font-bold text-2xl">
              Production Companies
            </h2>
            <Carousel data={movie.production_companies} url={baseURL} />
          </div>
        </div>
      </div>

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
