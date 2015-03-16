// Daniel Davis, dataSet, holds the info of for a new graph //

load('graph.js'); // loads up graph info

g = new graph(12); // new graph with 12 vertices and 24 edges
g.addEdge(0,1);
g.addEdge(0,3);
g.addEdge(0,7);
g.addEdge(1,2);
g.addEdge(1,4);
g.addEdge(1,5);
g.addEdge(2,3);
g.addEdge(2,5);
g.addEdge(2,6);
g.addEdge(3,6);
g.addEdge(3,10);
g.addEdge(3,13);
g.addEdge(4,7);
g.addEdge(4,8);
g.addEdge(5,8);
g.addEdge(5,9);
g.addEdge(6,8);
g.addEdge(6,10);
g.addEdge(7,11);
g.addEdge(8,11);
g.addEdge(8,12);
g.addEdge(9,12);
g.addEdge(9,13);
g.addEdge(10,13);
g.showGraph(); // shows graph

