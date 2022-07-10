import Head from "next/head";
import Categories from "../../Components/Categories";
import Results from "../../Components/Results";
import requests from "../../utils/requests";

export default function Home({ movies }) {
  console.log(movies.results);
  // console.log(router.query.genre);

  return (
    <div>
      <Head>
        <title>Hulu 2.2</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="mt-[90px]">
        <Categories />
      </div>

      <Results movies={movies.results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.trending.url
    }`
  );
  const data = await request.json();

  return {
    props: {
      movies: data,
    },
  };
}