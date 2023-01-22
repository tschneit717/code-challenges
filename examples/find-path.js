let source = 'f';
let destination = 's';

let graph = {
  f: ['g', 'i'],
  g: ['h'],
  i: ['k', 'g'],
  j: ['i'],
  k: [],
  h: []
}

const hasPath = (graph, source, destination) => {
  if (source === destination) {
    return true
  }
  for (let neighbor of graph[source]) {
    if (hasPath(graph, neighbor, destination) === true) {
      return true
    }
  }
  
  return false
}

const hasPathBreadth = (graph, source, destination) => {
  const queue = [source];

  while (queue.length > 0) {
    let current = queue.shift()

    if (current === destination) return true
    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }
  return false;
}

console.log(hasPath(graph, source, destination))
console.log(hasPathBreadth(graph, source, destination))