import { book } from "./book"

export type Proof = (typeof book)[number][1]["proof"]
export type TextMap = (typeof book)[number][1]["text"]
export type RenderData = cytoscape.ElementDefinition[]
