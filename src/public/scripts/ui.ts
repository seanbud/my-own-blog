const headerElement = document.querySelector(".header");
const mainPostsElement = document.querySelector(".main__posts");

headerElement?.addEventListener("click", () => window.location.assign("/"));

mainPostsElement?.addEventListener("click", (event: Event) => {
  const htmlElement = event.target as HTMLElement;

  /**
   * Categories are <span> elements.
   */
  if (htmlElement.tagName === "SPAN") {
    const categoryName = htmlElement.textContent;

    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    window.location.assign(`/${categoryName}`);
  }
});
