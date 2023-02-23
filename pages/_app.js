import "../styles/globals.css";
import "../styles/fonts.css";
import Layout from "../Containers/Layout";
import Router from "next/router";

import { useState } from "react";
import Spinner from "../Components/spinner/spinner";
import { MoviesProvider } from "../Context/MoviesProvider";
//Binding events.

function MyApp({ Component, pageProps }) {
  const [Loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => setLoading(false));
  Router.events.on("routeChangeError", () => setLoading(false));

  return Loading ? (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <Spinner />
    </div>
  ) : (
    <MoviesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MoviesProvider>
  );
}

export default MyApp;
