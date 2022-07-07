import Comment from "./comment";
import { useState } from "react";
import useSWR from "swr";
import Spinner from "./spinner/spinner";

export default function Comments() {
  const [comment, setComment] = useState("");
  const [Loading, setLoading] = useState(null);

  const fetcher = (url) =>
    fetch("https://hulu-5b829-default-rtdb.firebaseio.com/comments.json").then(
      (res) => res.json()
    );

  const commentHandler = async (e) => {
    setLoading(true);
    e.preventDefault();

    let data = {
      text: comment,
      date: new Date(),
    };

    const req = await fetch(
      "https://hulu-5b829-default-rtdb.firebaseio.com/comments.json",
      {
        method: "post",
        body: JSON.stringify(data),
      }
    );

    const result = await req.json();
    console.log(result);
    if (result) {
      setLoading(false);
      clearInputs();
    }
  };

  const clearInputs = () => {
    setComment("");
  };

  const { data, error } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher
  );

  if (error) return <div>Failed to load</div>;

  //   console.log(data);

  return (
    <form className="relative flex flex-col text-dark p-2">
      <h2 className="font-bold text-xl mb-5">Comments</h2>
      <textarea
        className="text-[14px] outline-none border-[2px] border-[#DDD] rounded-md p-2 pl-3 focus:border-dark resize-none ease-linear duration-300"
        cols={10}
        rows={5}
        placeholder="Add Your Comment about the film"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        maxLength={120}
      ></textarea>

      <div className="relative flex gap-2 items-center">
        <button
          onClick={(e) => commentHandler(e)}
          className="text-[13px] mt-2 px-2 min-w-[100px] py-2 rounded text-[#FFF] bg-dark"
        >
          {Loading ? "POSTING..." : "POST"}
        </button>

        <button
          className="text-[13px] mt-2 px-5 py-[6px] rounded text-dark font-bold border-[1px] border-dark "
          onClick={(e) => clearInputs(e)}
        >
          CLEAR
        </button>
      </div>

      {data ? (
        Object.entries(data).map(([key, { text, date }]) => {
          return <Comment key={date} comment={text} />;
        })
      ) : (
        <Spinner />
      )}
    </form>
  );
}
