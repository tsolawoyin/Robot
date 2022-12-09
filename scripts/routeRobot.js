export function routeRobot(state, memory = []) { //defaulting it just in case the caller forgets to pass in array.
    let route = ["Alice's House", "Cabin", "Alice's House", "Bob's House", "Town Hall", "Daria's House", "Ernie's House", "Grete's House", "Shop", "Marketplace", "Farm", "Marketplace", "Post Office", "Alice's House"];
    if(memory.length == 0) memory = route;
    return {destination: memory[0], memory: memory.slice(1)};
}