export function searchBFS(graph, from, to) {
    let work = [{at: from, route:[]}]; // the route array stores information about the road
    for(let i = 0; i < work.length; i++) {
        let {at, route} = work[i];
        for(let place of graph[at]) {
            if(place == to) return route.concat(place);
            if(!work.some(e => e.at == place)) {
                work.push({at:place, route: route.concat(place)})
            }
        }
    }
}