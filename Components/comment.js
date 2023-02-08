import React, { useState } from "react"
import { IoMdClose } from "react-icons/io"
import Spinner from "./spinner/spinner"

export default function Comment({
  comment,
  movie_id,
  comment_id,
  mutate,
  data,
}) {
  const [Loading, setLoading] = useState(false)

  const deleteHandler = async (date) => {
    setLoading(true)
    await fetch(
      `https://hulu-5b829-default-rtdb.firebaseio.com/comments/${movie_id}/${date}.json`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        mutate({ ...data })
        setLoading(false)
        console.log(res.json())
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return Loading ? (
    <Spinner />
  ) : (
    <div
      className={`relative flex flex-col mt-5 bg-[#FFF] shadow-md p-4 rounded-sm rounded-tr-2xl rounded-bl-xl `}
    >
      <h2 className="font-bold text-[14px] truncate">Yousef Rashad</h2>
      <p className="text-[13px] break-words">{comment}</p>
      <IoMdClose
        className="absolute top-2 right-2 w-4 h-4 cursor-pointer ease-linear duration-200 hover:text-[red]"
        onClick={() => deleteHandler(comment_id)}
      />
    </div>
  )
}
