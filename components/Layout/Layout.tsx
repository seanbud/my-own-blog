import Head from "next/head";
import { FunctionComponent } from "react";

import styles from "./Layout.module.css";

import Header from "../Header/Header";
import Posts from "../Posts/Posts";

const Layout: FunctionComponent = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>blog - Rafael Negron</title>
      </Head>
      <main className={styles.main}>
        <Header />
        <Posts />
      </main>
    </>
  );
};

export default Layout;
