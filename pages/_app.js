import "../styles/globals.css";
import "../styles/fonts.css";
import Layout from "../Containers/Layout";
import Router from "next/router";

import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({
  minimum: 0.4,
  easing: "linear",
  speed: 500,
  showSpinner: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="scroll-smooth transition-all">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
