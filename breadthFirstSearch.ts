// Perform a breadth-first search on a graph given a starting node
const breadthFirstSearch = (
  graph: Object, source: string, callback: Function
): { ok: Boolean, node: string, visited: string[] } => {
  const queue = [];

  // keep track of which nodes are visited
  const visited = [source];

  queue.push(...graph[source]);

  // while the queue is not empty
  while (queue.length > 0) {
    const node = queue.shift(); // grap the first node off the queue

    if (visited.includes(node)) continue;

    // mark this node as visited
    visited.push(node);

    // check whether it's what we are looking for
    if (callback(node)) {
      return { node, ok: true, visited };
    } else {
      // no it's not, add all of node's neighbors to the queue
      queue.push(...graph[node]);
    }
  }

  // If we reached here, we didn't find what we are looking for
  return { ok: false, node: null, visited };
};

export {
  breadthFirstSearch,
};
