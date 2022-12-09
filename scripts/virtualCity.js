import buildGraph from "./buildGraph.js";
import roads from "./roads.js";


let roadGraph = buildGraph(roads)

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if(!roadGraph[this.place].includes(destination)){
            console.log(`Can't reach ${destination} from here`) 
            return this
        };
        let parcels = this.parcels.map(p => {
            if(this.place != p.place) return p; // if robot's location isn't the same as parcel location, then robot hasnt picked it up yet. Very intuitive
            else return {place: destination, address: p.address};
        }).filter(p => p.place !== p.address) // and finally return an array of undelivered parcels;

        return new VillageState(destination, parcels)
    }

    static generateParcel(parcel = 5) {
        // the moment you think about what you want to do, a solution will come. Don't just sit there and be looking;
        let locations = Object.keys(roadGraph), parcels = [];
        for(let i = 1; i <= parcel; i++) {
            let place = locations[Math.floor(Math.random() * locations.length)], address;
            do {
                address = locations[Math.floor(Math.random() * locations.length)];
            } while(place == address)
            parcels.push({place, address})
        }
        return new VillageState("Post Office", parcels)
    }
    
}

export {VillageState, roadGraph};