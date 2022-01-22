const headerElement = document.getElementById("header");
const mainPostsElement = document.querySelector(".main__posts");

headerElement?.addEventListener("click", () => window.location.assign("/"));

mainPostsElement?.addEventListener("click", (event: Event) => {
  const htmlElement = event.target as HTMLElement;

  switch (htmlElement.tagName) {
    /**
     * Categories are <span> elements.
     */
    case "SPAN":
      handleSpanClick(htmlElement);
      return;
    case "CODE":
      handleCodeClick(htmlElement);
      return;
  }
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

/**
 * Handles a click event on `<span>` elements.
 */
function handleSpanClick({ textContent }: HTMLElement) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  window.location.assign(`/${textContent}`);
}
