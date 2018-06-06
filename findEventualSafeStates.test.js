/**
 * In a directed graph, we start at some node and every turn, walk along a directed edge of the graph.  If we reach a node that is terminal (that is, it has no outgoing directed edges), we stop.

Now, say our starting node is eventually safe if and only if we must eventually walk to a terminal node.  More specifically, there exists a natural number K so that for any choice of where to walk, we must have stopped at a terminal node in less than K steps.

Which nodes are eventually safe?  Return them as an array in sorted order.

The directed graph has N nodes with labels 0, 1, ..., N-1, where N is the length of graph.  The graph is given in the following form: graph[i] is a list of labels j such that (i, j) is a directed edge of the graph.

Example:
Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
Output: [2,4,5,6]
 */

const test = require('tape');

test('should return an array that contains the index of input graph', t => {
  const graph = [[],[],[],[],[],[],[]];
  const result = findEventualSafeStates(graph);
  t.deepEqual(result, [0,1,2,3,4,5,6]);
  t.end()
});
test('should return an array  that is [] ', t => {
  const graph = [[0],[1],[2],[3],[4],[],[]];
  const result = findEventualSafeStates(graph);
  t.deepEqual(result, [5,6]);
  t.end()
});

test('should return an array  that  does not end in loops', t => {
  const graph = [[1,2],[2,3],[5],[0],[5],[],[]];
  const result = findEventualSafeStates(graph);
  t.deepEqual(result, [2,4,5,6]);
  t.end()
});

const findEventualSafeStates = (graph) => {
  const outGraph = graph.reduce((acc, value, index) => {
    acc[index] = value;
    return acc
  }, {});

  const inGraph = graph.reduce((acc, value, index) => {
        const accumulator = acc;
        value.forEach((i) => {
           if(accumulator[i]){
              accumulator[i] = [...accumulator[i], index]
           }else{
             accumulator[i] = [index]
           }
        })
        return accumulator
  }, {});

  const queue = graph.reduce((acc, value, index) => {
       if(value.length == 0) return [...acc, index]
       return acc
  }, []);
  const result = graph.map((value, index) => {
    return false;
  })
  const findEventualSafeStatesRecursive = (result, queue) => {
       const head = queue.shift();
       result[head] = true;
       //look up parents from inGraph and remove edge from outGraph
       if(inGraph[head])
       inGraph[head].forEach((i) => {
          outGraph[i] = outGraph[i].filter((j) => {
                 return j !== head });
          if(outGraph[i].length == 0) queue.push(i);      
       });
       if(queue.length == 0) return result

       return findEventualSafeStatesRecursive(result, queue)
  }
  return findEventualSafeStatesRecursive(result, queue)
  .reduce((acc,value, index) => {
    if(value) acc = [ ...acc, index]
    return acc
  },[])
}