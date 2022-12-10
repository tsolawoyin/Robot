import { goalOrientedRobot } from "./goalOrientedRobot.js";
import { randomRobot } from "./randomRobot.js";
import { routeRobot } from "./routeRobot.js";
import { VillageState } from "./virtualCity.js";

let run_box = document.querySelector('#run-box'), input = document.querySelector('input');

function runRobot(state, robot, memory) {
    for(let turns = 0;;turns++) {
        if(state.parcels.length == 0) {
            moveArr.push(`<p>${robot.name} completed in ${turns} turns</p>`)
            // run_box.innerHTML += `<p>${robot.name} completed delivering in ${turns} turns</p>`
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.destination);
        memory = action.memory;
        moveArr.push(`<p>Moved to ${action.destination}</p>`)
    }
}

let currRobot = [], x = document.querySelectorAll('.robots')

x.forEach((e, i) => {
    // select button remaining for now
    e.addEventListener('click', () => {
        if(currRobot.length == 0) {
           displayHelpher(run_box, e.id)
           setTimeout(() => {
            document.querySelector(".select").textContent = `${e.id} selected successfully`;
        }, 50)
        setTimeout(() => {
            document.querySelector(".select").textContent = "";
        }, 1000)
        } else {
            currRobot = []; // if there is any value in the array, remove it and do the below code
            displayHelpher(run_box, e.id)
            setTimeout(() => {
                document.querySelector(".select").textContent = `${e.id} selected successfully`;
            }, 50)
            setTimeout(() => {
                document.querySelector(".select").textContent = "";
            }, 1000)
        }
    })
})

function displayHelpher(element, value) {
    element.innerHTML = "";
    currRobot.push(value)
}

let moveArr = [];

// this control the run button
document.querySelector("button").addEventListener('click', () => {
    if(currRobot.length) {
        let [robotType] = currRobot;
        if(robotType == "randomRobot") robot(input.value, randomRobot);
        else if(robotType == "routeRobot") robot(input.value, routeRobot);
        else robot(input.value, goalOrientedRobot);
        currRobot = [];
        // animation code succesfully completed
        let i = 0, j = 1;
        let animation = setInterval(() => {
            if(input.value) {
                run_box.innerHTML += moveArr[i], i++, j++;
                if(moveArr.length === j ) {
                    run_box.innerHTML += moveArr[i], i++, j++;
                    clearInterval(animation)
                    moveArr = [];
                }
            }
        }, 100)
    };
})

function robot(num, robot) {
    if(!num) {
        run_box.innerHTML += "<p>Please enter a valid number!</p>";
    }  else {
        runRobot(VillageState.generateParcel(num), robot)
    }
}