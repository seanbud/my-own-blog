import Link from "next/link";
import { FunctionComponent } from "react";

import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <Link href="" passHref>
        <h1 className={styles.header__title}>blog</h1>
      </Link>
      <nav className={styles.header__navigation}>
        <Link href="#">Discord</Link>
        <Link href="#">LinkedIn</Link>
        <Link href="#">GitHub</Link>
        <Link href="#">Resume</Link>
      </nav>
    </header>
  );
};

export default Header;
