import { Proof, RenderData, TextMap } from "./types"
import { book } from "./book"
class GraphNode {
  children: string[] = []
  parents: Proof
  text: TextMap
  constructor(text: TextMap, parents: Proof) {
    this.text = text
    this.parents = parents
  }
}

class Graph {
  nodes: Record<string, GraphNode> = {}

  get(name: string) {
    return this.nodes[name]
  }

  addNode(name: string, text: TextMap, proof: Proof) {
    this.nodes[name] = new GraphNode(text, proof)
    // add node edges:
    const parents = proof.flat()
    for (const parent of parents) {
      this.nodes[parent].children.push(name)
    }
  }

  getChildren(name: string) {
    return this.nodes[name].children
  }

  getParents(name: string) {
    return this.nodes[name].parents.flat()
  }

  getAncestry(name: string) {
    const graph = this
    const result: Record<string, ReturnType<typeof graph.getParents>> = {}
    function dfs(curr: string) {
      const parents = graph.getParents(curr)
      result[curr] = parents
      for (const parent of parents) {
        dfs(parent)
      }
    }
    dfs(name)
    return result
  }

  getDescendancy(name: string) {
    const graph = this
    const result: Record<string, ReturnType<typeof graph.getChildren>> = {}
    function dfs(curr: string) {
      const children = graph.getChildren(curr)
      result[curr] = children
      for (const child of children) {
        dfs(child)
      }
    }
    dfs(name)
    return result
  }

  getConnection(fromName: string, toName: string) {
    const result: Record<string, string[]> = {}
    const descendants = this.getDescendancy(fromName)
    const ancestors = this.getAncestry(toName)

    result[fromName] = descendants[fromName]
    result[toName] = ancestors[toName]

    for (let key in descendants) {
      if (ancestors[key]) {
        result[key] = descendants[key]
      }
    }
    for (let key in result) {
      result[key] = result[key].filter((k) => result[k])
    }
    return result
  }

  getAncestryRenderData(name: string) {
    const graph = this
    const result: RenderData = []
    function dfs(curr: string) {
      result.push({
        data: {
          id: curr,
          label: curr,
        },
        selected: curr === name,
        grabbable: false,
      })
      const parents = graph.getParents(curr)
      for (const parent of parents) {
        result.push({
          data: {
            source: parent,
            target: curr,
          },
        })
        dfs(parent)
      }
    }
    dfs(name)
    return result
  }

  getDescendancyRenderData(name: string) {
    const graph = this
    const result: RenderData = []
    function dfs(curr: string) {
      result.push({
        data: {
          id: curr,
          label: curr,
        },
        selected: curr === name,
        grabbable: false,
      })
      const children = graph.getChildren(curr)
      for (const child of children) {
        result.push({
          data: {
            source: curr,
            target: child,
          },
        })
        dfs(child)
      }
    }
    dfs(name)
    return result
  }

  getConnectionRenderData(fromName: string, toName: string) {
    const connection = this.getConnection(fromName, toName)
    const result: RenderData = []
    for (const curr in connection) {
      result.push({
        data: {
          id: curr,
          label: curr,
        },
        grabbable: false,
      })
      // "connection" has descendants,
      // not the "proof" like usual:
      const children = connection[curr]
      for (const child of children) {
        result.push({
          data: {
            source: curr,
            target: child,
          },
        })
      }
    }
    return result
  }
}

function makeBookGraph() {
  const graph = new Graph()
  for (const entry of book) {
    const name = entry[0]
    const data = entry[1]
    graph.addNode(name, data.text, data.proof)
  }
  return graph
}

export const bookGraph = makeBookGraph()
export const result = bookGraph.getConnectionRenderData("e1def3", "e1p6")
// export const result = bookGraph.getAncestryRenderData("e1p6")

// const data = [
//   { data: { id: "1", label: "1" }, grabbable: false },
//   { data: { id: "2", label: "2" }, grabbable: false },
//   { data: { id: "3", label: "3" }, grabbable: false },
//   { data: { id: "4", label: "4" }, grabbable: false },
//   { data: { source: "1", target: "2" } },
//   { data: { source: "2", target: "3" } },
//   { data: { source: "1", target: "3" } },
//   { data: { source: "3", target: "4" } },
// ]
