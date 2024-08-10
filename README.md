## life

- cancel amazon prime
- how much is namecheap charging me?
- how much is heroku charging me?

- need to make spreadsheet to track spending;
  include chatgpt and midjourney

## todo

---

- 0 welcome
- 1 spinoza
- 2 notation
- 3 mode picker:book
- 4 mode picker:connection
- 5 node picker: entry
- 6 node picker: preview
- 7 node picker: submit
- 8 graph: query details
- 9 book: show book page
- 10 book: entry header (fav, etc)
- 11 book: entry proofs
- 12 book: appbar controls
- 13 (mobile) open notes
- 14 book: notes
- 15 graph: recenter & reset
- 16 credits

-- reset all states onExit and go to /explore

---

TODOS:

- demo flow (NOW)
- about pages
- apply portrait-only alert to book modal (maybe to app as a whole).
- move book/opensource to about, then use that space for feedbackfish
- add a a middle step between clicking a node and opening the book reader...?

---

- "about" page itself has tabs to split stuff up in:
  - spinoza
  - notation
  - credit

---

- replace "What is this?" with "Demo"
- maybe just force the demo mode if first time visit tracked in localStorage
- the Open source github should link to the spinoza.io webpage

---

- "go back to graph" button.
- add feedback button on about
  or maybe add a "Contact" tab.

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

- maybe an input for degrees of search, e.g., so that we only get 3 degrees of ancestry

---

- sentry io & error boundary around whole app
  (and report what query broke the app, likely based on the URL state)

---

- when a node is focused, all the edges that come OUT OF it should change color
- when a node is focused, all the edges that come INTO it should change color?

---

- run validation during build script

---

- get proof tree (complex)
- get consequences (complex)
- get connection (complex)
- highlight the path (or nodes?) that is common to all versions, when multiple are found
- get number of proof/consequence/connection trees
- text search that shows what entries include said concept

---

- give credit to all other tools, and gutenberg project

---

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

question: are there any dead-end propositions besides the last one in the book? is it something to note as important that some statements are made just to reach them, and nothing afterwards?

---

book tests:

- all members of proof exist as entry names
- sch and cor contain their parent as proof
- no repeated parents in proof list
