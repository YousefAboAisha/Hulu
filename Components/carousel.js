import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Spinner from "./spinner/spinner";
import Link from "next/link";
import { useRouter } from "next/router";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Slider({ data }) {
  const router = useRouter();
  const genre = router.query.genre;
  const movie_id = router.query.movie_id;
  const baseURL = "https://image.tmdb.org/t/p/original/";

  // console.log(movie_id);

  const filteredData = data.filter((elem) => {
    return elem.id != movie_id;
  });

  // console.log(filteredData);

  return (
    <Carousel responsive={responsive} className="relative py-3 flex gap-2">
      {filteredData && filteredData !== null ? (
        filteredData.map((elem) => {
          return (
            <Link href={`/${genre}/${elem.id}`} key={elem.id}>
              <div className="flex flex-col items-center gap-3 w-fit h-fit p-2">
                <Image
                  src={
                    `${baseURL}${elem.backdrop_path || elem.poster_path}` ||
                    `${baseURL}${elem.poster_path}`
                  }
                  height={300}
                  width={400}
                  alt={elem.name}
                  blurDataURL
                  className="border-[1px] border-[#DDD] bg-[#DDD] rounded-lg cursor-grab"
                />
              </div>
            </Link>
          );
        })
      ) : (
        <Spinner />
      )}
    </Carousel>
  );
}
