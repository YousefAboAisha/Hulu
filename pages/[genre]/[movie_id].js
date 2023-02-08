import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlay, faPlay } from "@fortawesome/free-solid-svg-icons"
import Carousel from "../../Components/carousel"
import Table from "../../Components/table"
import Comments from "../../Components/comments"

export default function Movie({ movie, relatedMovies, keywords, upcoming }) {
  const router = useRouter()

  // console.log("Movie Data", movie)
  // console.log("Related Movies", relatedMovies)
  // console.log("Keywords Movie", keywords)
  // console.log("Upcoming Movies", upcoming)

  const baseURL = "https://image.tmdb.org/t/p/original/"
  const imdbURL = "https://www.imdb.com/title/"

  return (
    <>
      {movie.success == false ? (
        <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center flex-col items-center gap-4 min-h-[800px]">
          <h2 className="font-bold text-xl">Movie Not Found!</h2>
          <button
            className="cursor-pointer bg-dark text-[#FFF] rounded-xl px-5 py-3"
            onClick={() => router.back()}
          >
            Click here to go back !
          </button>
        </div>
      ) : (
        <div className="relative mt-[120px] ">
          {/* Comments right section */}
          {/* <div className="hidden md:hidden lg:w-3/12 lg:fixed lg:block h-full py-5 px-6 top-[85px] overflow-y-scroll pb-[250px] ">
            <h2 className="font-bold text-dark text-lg mb-3">KEYWORDS</h2>
            <div className="relative flex gap-3 flex-row flex-wrap">
              {keywords.keywords.map((elem) => {
                return (
                  <span
                    className="bg-[#dddddd98] p-2 rounded-xl text-[14px] text-dark font-bold"
                    key={elem.id}
                  >
                    #{elem.name}
                  </span>
                );
              })}
            </div>
          </div> */}

          {/* Middle section */}
          <div className="relative w-11/12 md:w-10/12 lg:w-8/12 mx-auto min-h-[600px] ">
            <div className="relative w-full after:absolute after:w-full after:h-full after:left-0 after:top-0 after:bg-[#00000042] rounded-lg">
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

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-dark mb-6">
                {movie.title || movie.original_name} (
                {movie.release_date.split("-")[0]})
              </h2>

              <div className="relative overflow-x-auto shadow-sm rounded-lg my-2 border-l border scrollbar-hide">
                <Table movie={movie} />
              </div>

              <h2 className="mt-5 font-bold text-dark text-2xl mb-1">
                Movie Overview
              </h2>

              <p className="w-full">{movie.overview}</p>
              <div className="relative flex gap-3">
                <a href={movie.homepage} target="_blank" rel="noreferrer">
                  <button className="relative border-1 flex items-center gap-2 mt-5 p-3 rounded-md text-[#FFF] shadow-xl bg-dark">
                    Download Now
                    <FontAwesomeIcon
                      icon={faCirclePlay}
                      className="w-[22px] h-[22px] text-gold"
                    />
                  </button>
                </a>

                {movie.imdb_id ? (
                  <a
                    href={`${imdbURL}${movie.imdb_id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="relative border-1 flex items-center gap-2 mt-5 p-[11px] rounded-md text-dark border-[1px] border-dark">
                      IMDB page
                      <FontAwesomeIcon
                        icon={faPlay}
                        className="w-[22px] h-[22px]"
                      />
                    </button>
                  </a>
                ) : null}
              </div>

              <div className="my-8">
                <h2 className="mt-5 font-bold text-dark text-2xl mb-1">
                  Related Movies
                </h2>
                <Carousel data={relatedMovies.results} />
              </div>

              <div className="relative mb-[30px]">
                <Comments />
              </div>
            </div>
          </div>

          {/* Ads right section */}
          {/* <div className="hidden md:hidden lg:w-3/12 lg:fixed lg:flex gap-3 h-full border shadow-md top-[85px] p-2 right-0 text-[#FFF] lg:flex-col lg:overflow-y-scroll">
            {upcoming.results.slice(0, 3).map((elem) => {
              return (
                <div key={elem.id} className="shadow-lg">
                  <Image
                    layout="responsive"
                    height={1080}
                    width={1920}
                    src={
                      `${baseURL}${elem.backdrop_path || elem.poster_path}` ||
                      `${baseURL}${elem.poster_path}`
                    }
                    alt={elem.title || elem.original_name}
                    className="rounded-md"
                    blurDataURL="https://reactnative-examples.com/wp-content/uploads/2022/02/default-loading-image.png"
                    placeholder="blur"
                  />
                </div>
              )
            })}
          </div> */}
        </div>
      )}
    </>
  )
}

export async function getServerSideProps(context) {
  const API_KEY = process.env.API_KEY
  const { params } = context
  const { movie_id } = params

  const [req1, req2, req3, req4] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/keywords?api_key=${API_KEY}`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    ),
  ])

  const [movie, keywords, relatedMovies, upcoming] = await Promise.all([
    req1.json(),
    req2.json(),
    req3.json(),
    req4.json(),
  ])

  return {
    props: {
      movie,
      keywords,
      relatedMovies,
      upcoming,
    },
  }
}
