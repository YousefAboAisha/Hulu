import "../styles/globals.css";
import "../styles/fonts.css";
import Layout from "../Containers/Layout";
import Router from "next/router";

import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import { useState } from "react";
import Spinner from "../Components/spinner/spinner";
//Binding events.

function MyApp({ Component, pageProps }) {
  const [Loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => setLoading(true));
  Router.events.on("routeChangeComplete", () => setLoading(false));
  Router.events.on("routeChangeError", () => setLoading(false));

  NProgress.configure({
    minimum: 0.4,
    easing: "linear",
    speed: 500,
    showSpinner: true,
  });

  return Loading ? (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <Spinner />
    </div>
  ) : (
    <Layout className="scroll-smooth transition-all">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
