import React, { useEffect, useState } from "react"
import Thumnail from "../Components/thumnail"
import Spinner from "../Components/spinner/spinner"
import { useRouter } from "next/router"

export default function Search() {
  const { query } = useRouter()
  const [Data, setData] = useState()
  const [Loading, setLoading] = useState(null)
  const [ErrorText, setErrorText] = useState("")

  const searchHandler = async () => {
    setLoading(true)
    const req = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8e1b4952140dfb6e08f859338eb922de&query=${query.query}&page=1`
    )

    const result = await req.json()

    if (result) {
      setData(result.results)
      setLoading(false)
      console.log(result)

      if (result.errors) {
        setErrorText(result.errors[0] ?? "")
        setLoading(false)
      }
    }
  }

  //   const handleEnter = (e) => {
  //     if (e.key == "Enter") {
  //       searchHandler()
  //       console.log("fase")
  //     }
  //   }

  useEffect(() => {
    searchHandler()
  }, [query])

  console.log(Data)

  return (
    <div className="relative flex flex-col items-center mt-[120px]">
      <div className="grid gap-5 md:gap-5 sm:grid md:grid-cols-2 lg:grid-cols-3 overflow-y-hidden xl:grid-cols-4 min-h-[400px]">
        {Loading ? (
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Spinner />
          </div>
        ) : Data && Data.length > 0 ? (
          Data.map((elem) => {
            return <Thumnail key={elem.id} result={elem} />
          })
        ) : (
          <h2 className="text-lg absolute top-[50%] left-[50%] translate-x-[-50%] font-bold translate-y-[-50%]">
            {ErrorText ?? "No results found !"}
          </h2>
        )}
      </div>
    </div>
  )
}
