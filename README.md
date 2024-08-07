## life

- cancel amazon prime
- supermercado

## todo

---

- finish refactoring graph flow

---

- handle graph state in a Context so that
  it doesn't go away if they change tabs.

---

LATER: gather proofs

- book data: Part III
- book data: Part IV
- book data: Part V

- review everything using the spanish version here:
  https://archive.org/details/etica-de-spinoza/page/n1/mode/2up

- use {{ | }} notation to add corrections to Elwes version;

---

- script that merges all scholium and corollaries into the parent. Then parses all proofs to redirect 'sch' and 'cor' to the main parent as well. and write a validation script to ensure it worked...

---

- instead of <BookLink/>, just have a list of links ("shortcuts") that use the proof array to link to the dependencies. That way we can leave the raw text without adding markup to it.

---

- make text portion into a drawer when in graph mode,
  to allow for more space for the graph; when the drawer opens, it takes up half the screen,
  and after the drawer is finished opening, it automatically fires the fitToScreen function

---

- maybe an input for degrees of search, e.g., so that we only get 3 degrees of ancestry

---

- sentry io & error boundary around whole app
  (and report what query broke the app, likely based on the URL state)

---

- as part of the book feature, being able to leave bookmarks?

---

- consider if "notes" should be treated as standalone nodes, as we do with corollaries?

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

---

contact:

- nadler
- della rocca
- don garrett
- yove
- rebbecca goldstein
- antonio damasio
- johnathan bennett
- mathew stewart (the courier and the heretic)
- melamed
- clare carlisle
- curley
- isreal
- mike g.
- mi profe de la upr..
- paco pepe
- ettiene helmer
- reddit philosophy channels
- philosophy nous magazine or whoever published the thing about the previous app?

---

main page tabs:

- explorer
- statistics
- about
- buy me coffee

---

- "about" page itself has tabs to split stuff up in:
  - about me
  - about reasoning
  - about other apps out there
  - about sources

---

question: are there any dead-end propositions besides the last one in the book? is it something to note as important that some statements are made just to reach them, and nothing afterwards?

---

book tests:

- all members of proof exist as entry names
- sch and cor contain their parent as proof
- no repeated parents in proof list
