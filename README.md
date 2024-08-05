## todo

NOW: text with link and modal for navigating content

---

- auto focus on the root requested node
- open modal when clicking text links

---

- create hook to track changes to window size, consider
  re-centering automatically when screen size changes; only applied when screen is shrunk, not enlarged

---

- maybe auto-filter some elements from the autocomplete, if so add info-icon to the section header explaining why they are disabled or removed.
- when a node is focused, all the edges that come OUT OF it should change color
- when a node is focused, all the edges that come INTO it should change color?

---

- create controls on top of the canvas
  that use the "quickdial" component
- actions: reset, recenter, save

---

- run validation during build script

- get proof tree (complex)
- get consequences (complex)
- get connection (complex)

- get number of proof/consequence/connection trees

- text search that shows what entries include said concept

- do Part I only for everything,
  then do the rest of the book once all features are implemented

- plain version of the book, but any mentioned to previous text is a link to that part of the book (or open a modal with that text?)

- highlight the path (or nodes?) that is common to all versions, when multiple are found

- use gutenberg project for translations of the ethics;
  email edwin curley (or someone) asking for permission to use edwin's translation

- give credit to all other tools, and gutenberg project

- max zoom relative to number of nodes in results

- start with plain text, but later move towards having react component (formatted and with links) that is later parsed when doing text search. (see chatgpt link for code samples)

// function makeDomEntry(title: string, content: string) {
// return `//   <div className="entry">
//     <h3 className="entry-title"></h3>
//     <p className="entry-text"></p>
//   </div>
//  `
// }

// function stripHtmlWithDOMParser(html: string) {
// const parser = new DOMParser()
// const doc = parser.parseFromString(html, "text/html")
// return doc.body.textContent || ""
// }
