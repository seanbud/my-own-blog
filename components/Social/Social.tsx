import { FunctionComponent } from "react";

import styles from "./Social.module.css";

import { ISocial } from "../../interfaces/ISocial";

const Social: FunctionComponent<ISocial> = ({ href, icon, title }) => {
  return (
    <a
      aria-label={title}
      className={styles.social}
      href={href}
      rel="noreferrer"
      target="_blank"
      title={title}
    >
      <i className={icon} />
    </a>
  );
};

export default Social;
