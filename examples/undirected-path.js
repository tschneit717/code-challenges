// const graph = {
//   i: ['j', 'k'],
//   j: ['i', 'k'],
//   k: ['i', 'j', 'l', 'm'],
//   m: ['k'],
//   l: ['k'],
//   o: ['n'],
//   n: ['o']
// }

const source = 'i'
const destination = 'l'


const hasPath = (graph, source, destination, visited) => {
  if (source === destination) return true
  if (visited.has(source)) return false

  visited.add(source)

  for (let neighbor of graph[source]) {
    if (hasPath(graph, neighbor, destination, visited) === true) return true
  }
  return false
}

// to prevent loops, mark nodes as visited
const undirectedPath = (edges, source, destination) => {
  const graph = buildGraph(edges)
  console.log(graph)

  return hasPath(graph, source, destination, new Set())
}

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
]

const buildGraph = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge
    if (!(a in graph)) graph[a] = []
    if (!(b in graph)) graph[b] = []
    graph[a].push(b);
    graph[b].push(a);
  }

  return graph
}