import { searchBFS } from "./searchBFS.js";
import { roadGraph } from "./virtualCity.js";

export function goalOrientedRobot({place, parcels}, memory = []) {
    if(memory.length == 0) {
        let p = parcels[0];
        if(place !== p.place) {
            memory = searchBFS(roadGraph, place, p.place)
        } else {
            memory = searchBFS(roadGraph, p.place, p.address)
        }
    }
    return {destination: memory[0], memory: memory.slice(1)};
}