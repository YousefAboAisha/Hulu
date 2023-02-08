import { useState } from "react"
import Link from "next/link"
import React from "react"
import { Routes } from "../Data/Routes"
import { RiMovie2Line } from "react-icons/ri"
import { useRouter } from "next/router"

export default function Navbar() {
  const [Query, setQuery] = useState("")
  const router = useRouter()

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      router.push(`/search?query=${Query}`)
    }
  }

  return (
    <div className="fixed w-[100%] bg-dark z-50 h-[75px] ">
      <div className="container flex justify-between items-center h-full overflow-hidden">
        <Link href={"/trending/?page=1"}>
          <RiMovie2Line size={35} className="text-gold cursor-pointer" />
        </Link>

        <div className="lg:w-9/12 w-8/12 mx-2">
          <input
            type={"search"}
            placeholder="Search for a movie..."
            className={`h-[45px] pl-4 pr-2 border rounded-[8px] outline-none duration-300 w-full focus:border-gold bg-white`}
            onChange={(e) => setQuery(e.target.value)}
            value={Query}
            onKeyDown={handleEnter}
          />
        </div>

        <div className="relative flex items-center justify-center gap-4">
          {Routes.map((tab, index) => {
            return (
              <Link href={`/${tab.title.toLowerCase()}`} key={index}>
                <div className="relative flex flex-col justify-center items-center cursor-pointer group w-fit gap-1 rounded-xl border border-[#dddddd2f] p-2 ">
                  <tab.icon size={20} className="text-[#FFF]" />
                  {/* <span className="text-[#FFF] text-[15px] lg:block hidden">
                    {tab.title}
                  </span> */}
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
