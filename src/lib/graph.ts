import { Proof, RenderData, Translation } from "./types"
import { book } from "./book"
class GraphNode {
  children: string[] = []
  parents: Proof
  entryIdx: number
  constructor(parents: Proof, entryIdx: number) {
    this.parents = parents
    this.entryIdx = entryIdx
  }
}

class Graph {
  nodes: Record<string, GraphNode> = {}

  get(name: string) {
    return this.nodes[name]
  }

  addNode(name: string, proof: Proof, idx: number) {
    this.nodes[name] = new GraphNode(proof, idx)
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
    // todo: handle nested proofs:
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

    const descKeys = Object.keys(descendants)
    for (const key of descKeys) {
      if (ancestors[key]) {
        result[key] = descendants[key]
      }
    }

    const resKeys = Object.keys(result)
    for (const key of resKeys) {
      result[key] = result[key].filter((k) => result[k])
    }

    return result
  }

  getAncestryRenderData(name: string) {
    const graph = this
    const result: RenderData = []
    const visited: Record<string, 1> = {}
    function dfs(curr: string) {
      const shouldHighlight = curr === name
      result.push({
        data: {
          id: curr,
          label: curr,
          ...(shouldHighlight ? { target: shouldHighlight } : {}),
        },
        // selected: shouldHighlight,
      })
      const parents = graph.getParents(curr)
      for (const parent of parents) {
        result.push({
          data: {
            source: parent,
            target: curr,
          },
        })
        // prevent edge duplication
        if (visited[parent]) continue
        visited[parent] = 1
        dfs(parent)
      }
    }
    dfs(name)
    return result
  }

  getDescendancyRenderData(name: string) {
    const graph = this
    const result: RenderData = []
    const visited: Record<string, 1> = {}
    function dfs(curr: string) {
      const shouldHighlight = curr === name
      result.push({
        data: {
          id: curr,
          label: curr,
          ...(shouldHighlight ? { target: shouldHighlight } : {}),
        },
        // selected: shouldHighlight,
      })
      const children = graph.getChildren(curr)
      for (const child of children) {
        result.push({
          data: {
            source: curr,
            target: child,
          },
        })
        // prevents creating the
        // same edge more than once:
        if (visited[child]) continue
        visited[child] = 1
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
      const shouldHighlight = curr === fromName || curr === toName
      result.push({
        data: {
          id: curr,
          label: curr,
          ...(shouldHighlight ? { target: shouldHighlight } : {}),
        },
        // selected: shouldHighlight,
      })
      // "connection" has descendants,
      // not the "parents" like usual:
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
  for (let i = 0; i < book.length; i++) {
    const entry = book[i]
    const name = entry[0]
    const data = entry[1]
    graph.addNode(name, data.proof, i)
  }
  return graph
}

export const bookGraph = makeBookGraph()

// todo: consider moving
// into book graph class:
export function getNodeIdx(node: string) {
  return bookGraph.get(node).entryIdx
}

export function getNodeText(node: string, lang: Translation) {
  return book[getNodeIdx(node)][1].text[lang]
}
