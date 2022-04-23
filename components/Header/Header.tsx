import { FunctionComponent } from "react";

import styles from "./Header.module.css";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>blog</h1>
      <nav className={styles.header__navigation}>
        <a
          aria-label="Discord"
          href="https://discord.gg/dQHsR5gBba"
          rel="noreferrer"
          target="_blank"
          title="Discord"
        >
          Discord
        </a>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/rafaelnegron/"
          rel="noreferrer"
          target="_blank"
          title="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          aria-label="GitHub"
          href="https://github.com/User5842"
          rel="noreferrer"
          target="_blank"
          title="GitHub"
        >
          GitHub
        </a>
        <a
          aria-label="Resume"
          href="/files/Rafael-Negron-Resume.pdf"
          rel="noreferrer"
          target="_blank"
          title="Resume"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Header;
