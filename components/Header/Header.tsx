import { FunctionComponent } from "react";

import styles from "./Header.module.css";

import Social from "../Social/Social";

const Header: FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <Social
        href="https://github.com/User5842"
        icon="fab fa-github-alt"
        title="GitHub"
      />
      <Social
        href="https://www.linkedin.com/in/rafaelnegron/"
        icon="fab fa-linkedin-in"
        title="LinkedIn"
      />
      <Social
        href="https://discord.gg/S5R9ehA8t6"
        icon="fab fa-discord"
        title="Discord"
      />
      <Social
        href="/files/Rafael-Negron-Resume.pdf"
        icon="far fa-file"
        title="Resume"
      />
    </header>
  );
};

export default Header;
