import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" prefix="og: https://ogp.me/ns#">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="A collection of my thoughts." />
        <meta property="og:title" content="blog - Rafael Negron" />
        <meta property="og:type" content="blog.rafaeln" />
        <meta property="og:url" content="https://rafaeln.me" />
        <meta property="og:image" content="/svgs/terminal.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/default.min.css"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
