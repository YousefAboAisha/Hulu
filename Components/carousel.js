import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

export default function carousel({ data, url }) {
  return (
    <Carousel responsive={responsive} className="relative p-5">
      {data.map((elem, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center gap-3 w-fit h-fit shadow-lg p-2 "
          >
            <Image
              src={`${url}${elem.logo_path}`}
              width={80}
              height={80}
              alt={elem.name}
            />
            <span className="text-[13px]">
              {elem.name} | {elem.origin_country}
            </span>
          </div>
        );
      })}
    </Carousel>
  );
}
