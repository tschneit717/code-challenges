graph = nodes + edges
        nodes: data values
        edges: connections between pairs of nodes

directed graph vs undirected graph
  directed: have directions, can go from A to B, but not B to C
    Ex:     A -> B
            v    v
            C <- D
            v
            E <- F

    Terminology: 
      A has neighbors of B and C
      At B, B only has a neighbor at D

    Adjacency list:
      {
        a: [b, c],
        b: [d],
        c: [e],
        d: [],
        e: [b]
      }

      Objects in JS, Dicts in Python
      Keys are the nodes, values are their neighbors.
      If there are no outgoing edges for a node, you should still represent the key

  Traversal: 
    Depth First Traversal: a -> c -> e
      Explore one direction as far as possible before switching direction
    Breadth first traversal: a -> c -> b
      Explore all immediate neighbors of nodes, searches evenly
    
    Depth first traversal creates a stack:
      Ad to the top, remove from the top
    
    Breadth first uses Queue:
      Add to the bottom, remove from the top


Starting node to initialize stack
pop off the stack to analyize it, to look at b and c, push them to the stack. 
if my stack has data, pop off top of stack and make it current, add neighbor to stack.
Repeat until stack is empty

acyclic - graph does not loop over previous nodes