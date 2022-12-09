import { roadGraph } from "./virtualCity.js";


const generateRandom = currLocation => roadGraph[currLocation][Math.floor(Math.random() * roadGraph[currLocation].length)];

// randomRobot implementation;
const randomRobot = (state, memory) => { // random robot doesnt have a working memory
    return {destination: generateRandom(state.place)};
}

export { randomRobot };