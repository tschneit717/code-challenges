// Iterative method
const depthFirstSearch = (graph, source) => {
  // Initialize with a starting node
  const stack = [ source ];

  // Keep running while there are items in stack
  while (stack.length > 0) {
    // Pops the top of the stack off and sets it to the current node
    const current = stack.pop();
    console.log(current)
    //... Do logic to process node

    // Check the neighbors of the current node and add them to stack
    for (let neightbor of graph[current]) {
      stack.push(neightbor)
    }
  }
}

const dfs = (graph, source) => {
  console.log(source)
  for (let neighbor of  graph[source]) {
    dfs(graph, neighbor)
  }
}

const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
}

// depthFirstSearch(graph, 'a')
dfs(graph, 'a')