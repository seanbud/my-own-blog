import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" prefix="og: https://ogp.me/ns#">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="A collection of my thoughts." />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:title" content="blog - Rafael Negron" />
        <meta property="og:type" content="blog.rafaeln" />
        <meta property="og:url" content="https://rafaeln.me" />
        <meta property="og:image" content="/svgs/terminal.svg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
