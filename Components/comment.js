import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import useSWR from "swr";
import Spinner from "./spinner/spinner";

export default function Comment({ comment, movie_id, comment_id }) {
  const [Loading, setLoading] = useState(false);

  const fetcher = (url) =>
    fetch(
      `https://hulu-5b829-default-rtdb.firebaseio.com/comments/${movie_id}.json`
    ).then((res) => {
      res.json();
    });

  const { data, error, mutate } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher
  );

  const deleteHandler = async (date) => {
    setLoading(true);
    await fetch(
      `https://hulu-5b829-default-rtdb.firebaseio.com/comments/${movie_id}/${date}.json`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        console.log(res.json());
        mutate({ ...data });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="relative flex flex-col mt-5 bg-[#FFF] shadow-md p-4 rounded-sm rounded-tr-2xl rounded-bl-xl">
      <h2 className="font-bold text-[14px] truncate">Yousef Rashad</h2>
      <p className="text-[13px] break-words">{comment}</p>
      <FontAwesomeIcon
        icon={faClose}
        className="absolute top-2 right-2 w-4 h-4 cursor-pointer ease-linear duration-200 hover:text-[red]"
        onClick={() => deleteHandler(comment_id)}
      />
      {Loading ? <Spinner /> : null}
    </div>
  );
}
