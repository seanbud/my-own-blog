const categorySelectElement = document.getElementById("category-select");
const headerElement = document.getElementById("header");
const mainPostsElement = document.querySelector(".main__posts");
const searchForm = document.querySelector(".header__search");

categorySelectElement?.addEventListener("input", (event) => {
  const categorySelect = event.target as HTMLSelectElement;
  const categorySelectValue = categorySelect.value;
  handleCategoryClick(categorySelectValue);
});

headerElement?.addEventListener("click", ({ target }) => {
  // This should only happen if the heading element is clicked.
  if ((target as HTMLHeadingElement).classList.contains("header__heading")) {
    window.location.assign("/");
  }
});

mainPostsElement?.addEventListener("click", (event: Event) => {
  const htmlElement = event.target as HTMLElement;

  switch (htmlElement.tagName) {
    /**
     * Categories are <span> elements.
     */
    case "SPAN":
      handleCategoryClick(htmlElement.textContent as string);
      return;
    case "CODE":
      handleCodeClick(htmlElement);
      return;
  }
});

searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const searchInput = form.elements.namedItem("search") as HTMLInputElement;
  window.location.assign(`/search/${searchInput.value}`);
});

/**
 * Creates a `p` tag whose `textContent` is "Copied,"
 * indicating that code was copied to the clipboard.
 * @returns {HTMLParagraphElement} A copied `p` HTMLElement.
 */
function createCopiedElement(): HTMLParagraphElement {
  const copied = document.createElement("p");
  copied.classList.add("copied");
  copied.textContent = "Copied!";
  return copied;
}

/**
 * Creates a copy element and notifies the user that
 * code was copied.
 * @param codeElement The target of the action.
 */
function copyNotice(codeElement: HTMLElement) {
  let timerID: number;

  function exec() {
    const copiedElement = createCopiedElement();
    codeElement.append(copiedElement);
    timerID = window.setTimeout(() => {
      copiedElement.remove();
      clearTimeout(timerID);
    }, 3000);
  }

  exec();
}

/**
 * Handles category selection.
 */
function handleCategoryClick(categoryName: string) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  window.location.assign(`/category/${categoryName}`);
}

/**
 * Handles a click event on `<code>` and `<pre>` elements.
 */
function handleCodeClick(codeElement: HTMLElement) {
  // This should only happen with `<code>` elements whose parents are `<pre>`'s.
  if ((codeElement.parentNode as HTMLElement).tagName !== "PRE") return;

  /**
   * I'm going to on a limb here and assume most browsers today
   * (or at least ones that most people use) have support for
   * the Clipboard.
   * @see {@link https://caniuse.com/mdn-api_clipboard_writetext}
   */
  navigator.clipboard
    .writeText(codeElement.textContent as string)
    .catch(console.error);

  copyNotice(codeElement);
}
