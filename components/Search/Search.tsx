import { useRouter } from "next/router";
import { FormEvent, FunctionComponent, useRef } from "react";

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
    <form onSubmit={onSubmit} ref={searchForm}>
      <input name="search" type="text" required />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
