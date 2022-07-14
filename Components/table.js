import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Table({ movie }) {
  return (
    <>
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
              {movie.tagline || " - "}
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
                movie.status === "Released"
                  ? "text-[#4cd137] font-bold"
                  : "text-dark"
              }`}
            >
              {movie.status || " - "}
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
              Genres
            </th>
            <td className="flex px-2 py-2 gap-3 my-2 items-center">
              {movie.genres.map((elem, index) => {
                return (
                  <span className="text-dark px-2 py-1 text-[14px]" key={index}>
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
                  <span className="text-dark px-2 py-1 text-[14px]" key={index}>
                    {elem.name || " - "} | {elem.iso_3166_1 || " - "}
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
                  <span className="text-dark px-2 py-1 text-[14px]" key={index}>
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
    </>
  );
}
