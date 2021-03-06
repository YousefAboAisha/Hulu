import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Pagination() {
  const router = useRouter();
  const { genre, page } = router.query;

  const prevHandler = () => {
    if (page <= 1) {
      router.push(`/${genre}/?page=1`);
    } else {
      router.push(`/${genre}/?page=${parseInt(page) - 1}`);
    }
  };

  const nextHandler = () => {
    router.push(`/${genre}/?page=${parseInt(page) + 1}`);
  };

  return (
    <div className="flex relative items-center mb-[50px] my-5 justify-center gap-5">
      <button
        className="inline-flex items-center gap-2 py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={prevHandler}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
        Previous
      </button>

      <div>
        Page <span className="font-bold">{page}</span>
      </div>

      <button
        className="inline-flex items-center gap-2 py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onClick={nextHandler}
      >
        Next
        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
      </button>
    </div>
  );
}
