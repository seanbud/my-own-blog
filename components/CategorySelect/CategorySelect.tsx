import { useRouter } from "next/router";
import { FormEvent, FunctionComponent, useContext } from "react";

import styles from "./CategorySelect.module.css";

import Context from "../../store/store";

const CategorySelect: FunctionComponent = () => {
  const context = useContext(Context);

  const router = useRouter();

  const onCategorySelect = (event: FormEvent<HTMLSelectElement>) => {
    const selectElement = event.target as HTMLSelectElement;
    const { textContent } = selectElement.options[selectElement.selectedIndex];
    router.push(`/category/${textContent}`);
  };

  return (
    <select
      aria-label="Category"
      className={styles.select}
      onInput={onCategorySelect}
    >
      <option value="">Select a category</option>
      {context.categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategorySelect;
