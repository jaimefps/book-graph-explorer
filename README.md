## todo

---

- add info icon with tooltip to the node selection header, explaining that
  we already remove options that are not applicable to the desired query mode

- when a node is focused, all the edges that come OUT OF it should change color
- when a node is focused, all the edges that come INTO it should change color?

---

BUGS:

- improve canvas & button positioning, still preventing canvas from taking over whole screen on mobile.

- descendancy (e1def3)

1. multiple edge lines to same target
2. some edge lines have no arrow

- create hook to track changes to window size, consider
  re-centering automatically when screen size changes

---

flow:

A. show large button list:

1. get ancestry tree
2. get descendancy tree
3. get connection tree
4. free exploration (postpone)

B. select statement

- one (or two) dropdowns
- book view on the right-hand side shows the text for the selected statement
- clicking text links changes the selected statement un the dropdown
- "Generate" button to pick and submit query

C. show graph

- auto focus on the root requested node
- allow for modal when

---

- create controls on top of the canvas that use the "quickdial" component"
- actions: reset, recenter, save

---

- run validation during build script

- get proof tree (complex)
- get consequences (complex)
- get connection (complex)

- highlight/colorize the source node that the user searched for?

- command+click allows for multi-selection of nodes.
  see if we can disable this or if we want to use.

- get number of proof/consequence/connection trees

- text search that shows what entries include said concept

- do Part I only for everything,
  then do the rest of the book once all features are implemented

- plain version of the book, but any mentioned to previous text is a ling to that part of the book (or open a modal with that text?)

- highlight the path (or nodes?) that is common to all versions, when multiple are found

- use gutenberg project for translations of the ethics;
  email edwin curley (or someone) asking for permition to use edwin's translation

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
