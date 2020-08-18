import { useEffect } from "react";
import { AppProps } from "next/app";
import Router from "next/router";
import * as gtag from "../lib/gtag";
import { DefaultSeo } from "next-seo";
import seoConfig from "../next-seo.config";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.gtagPageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <DefaultSeo {...seoConfig} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
