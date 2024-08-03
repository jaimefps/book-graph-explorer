import { book } from "./book"

function validate() {
  console.log("validating...")
  const nodes: Record<string, 1> = {}
  for (const entry of book) {
    const name = entry[0]
    const proof = entry[1].proof.flat()
    for (const parent of proof) {
      if (!nodes[parent]) {
        throw new Error(`Missing proof node: ${parent}`)
      }
    }
    nodes[name] = 1
  }
  console.log({ nodes })
}

validate()
