import React from "react";

export default function Comment({ comment }) {
  return (
    <div className="relative flex flex-col mt-5 bg-[#FFF]  shadow-md p-4 rounded-sm rounded-tr-2xl rounded-bl-xl">
      <h2 className="font-bold text-[14px] truncate">Yousef Rashad</h2>
      <p className="text-[13px] break-words">{comment}</p>
    </div>
  );
}
