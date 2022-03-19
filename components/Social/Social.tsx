import { FunctionComponent, useContext } from "react";

import styles from "./Social.module.css";

import { ISocial } from "../../interfaces/ISocial";
import Context from "../../store/store";

const Social: FunctionComponent<ISocial> = ({ href, icon, title }) => {
  const context = useContext(Context);

  return (
    <a
      aria-label={title}
      className={styles.social}
      href={href}
      rel="noreferrer"
      onClick={() => context.audio?.play()}
      target="_blank"
      title={title}
    >
      <i className={icon} />
    </a>
  );
};

export default Social;
