import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { LazyMotion, domAnimation } from "framer-motion";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/dp.jpg"
          type="image/x-icon"
        />

        <title>{`Ahmed's Portfolio`}</title>

        <meta name="title" content="Ahmed's Portfolio" />
        <meta name="description" content="Ahmed Hassan's Portfolio" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ahmed's Portfolio" />
        <meta property="og:description" content="Ahmed Hassan's Portfolio" />
        <meta property="og:image" content="/avatar.jpg" />
      </Head>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </>
  );
}

export default MyApp;
