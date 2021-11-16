import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "next/router";
import { useState } from "react";
import Layout from "../components/explore/Layout";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });

  return (
    <Layout loading={loading}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
