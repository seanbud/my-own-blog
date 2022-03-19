import Head from "next/head";
import Link from "next/link";
import { FunctionComponent, useContext } from "react";

import styles from "./Layout.module.css";

import Context from "../../store/store";
import Header from "../Header/Header";
import Posts from "../Posts/Posts";

const Layout: FunctionComponent = () => {
  const context = useContext(Context);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>blog - Rafael Negron</title>
      </Head>
      <main className={styles.main}>
        <fieldset className={styles.fieldset} style={{ width: "100%" }}>
          <Link href="/" passHref>
            <legend
              className={styles.legend}
              onClick={() => context.audio?.play()}
            >
              blog
            </legend>
          </Link>
          <section className={styles.content}>
            <Header />
            <Posts />
          </section>
        </fieldset>
      </main>
    </>
  );
};

export default Layout;
