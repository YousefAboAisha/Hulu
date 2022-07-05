import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCircle } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Thumnail({ result }) {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  const genre = router.query.genre;
  console.log(router);

  console.log(result);

  return (
    <div className="group rounded-md linear duration-500 hover:scale-[1.02] shadow-2xl">
      <Link href={`/${genre}/${result.id}`}>
        <Image
          layout="responsive"
          height={1080}
          width={1920}
          src={
            `${baseURL}${result.backdrop_path || result.poster_path}` ||
            `${baseURL}${result.poster_path}`
          }
          alt={result.title || result.original_name}
          className="cursor-pointer"
        />
      </Link>

      <div className="p-2 bg-dark text-[#FFF]">
        <h2 className="my-2 truncate">
          {result.title || result.original_name}
        </h2>
        <p className="truncate max-w-md text-light text-[14px]">
          {result.overview || "Overview Not Supported!"}
        </p>

        <div className="flex items-center gap-3 p-1 mt-1">
          <span className="text-[13px]">
            {result.release_date || result.first_air_date}
          </span>
          <FontAwesomeIcon
            icon={faCircle}
            className="w-[4px] h-[4px] text-light"
          />
          <div className="relative flex items-center justify-center gap-2">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="w-[17px] h-[17px] text-gold mb-[3px]"
            />
            <span className="text-[12px] text-light">
              {Math.floor(result.popularity)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
