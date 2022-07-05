const api_key = process.env.API_KEY;

const fetchData = {
  trending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${api_key}&language=en-US`,
  },

  toprated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  },

  action: {
    title: "Action",
    url: `/discover/movie?api_key=${api_key}&with_genres=28`,
  },

  comedy: {
    title: "Comedy",
    url: `/discover/movie?api_key=${api_key}&with_genres=35`,
  },

  horror: {
    title: "Horror",
    url: `/discover/movie?api_key=${api_key}&with_genres=27`,
  },

  romance: {
    title: "Romance",
    url: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  },

  mystrey: {
    title: "Mystrey",
    url: `/discover/movie?api_key=${api_key}&with_genres=9648`,
  },

  scifi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${api_key}&with_genres=878`,
  },

  western: {
    title: "Western",
    url: `/discover/movie?api_key=${api_key}&with_genres=37`,
  },

  animation: {
    title: "Animation",
    url: `/discover/movie?api_key=${api_key}&with_genres=16`,
  },

  tvmovie: {
    title: "TV-Movie",
    url: `/discover/movie?api_key=${api_key}&with_genres=10770`,
  },
};

export default fetchData;
