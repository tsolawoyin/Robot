export default function buildGraph(road) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if(!graph[from]) graph[from] = [to];
        else graph[from].push(to)
    }
    for(let [from, to] of road.map(road => road.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}