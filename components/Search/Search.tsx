import { useRouter } from "next/router";
import { FormEvent, FunctionComponent, useRef } from "react";

import styles from "./Search.module.css";

const Search: FunctionComponent = () => {
  const router = useRouter();

  const searchForm = useRef(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchForm.current) {
      const formData = new FormData(searchForm.current);
      router.push(`/search/${formData.get("search")}`);
    }
  };

  return (
    <form className={styles.search} onSubmit={onSubmit} ref={searchForm}>
      <input
        aria-label="Search"
        className={styles.search__input}
        name="search"
        type="text"
        required
      />
      <button className={styles.search__button} type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
