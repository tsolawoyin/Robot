import { goalOrientedRobot } from "./goalOrientedRobot.js";
import { randomRobot } from "./randomRobot.js";
import { routeRobot } from "./routeRobot.js";
import { VillageState } from "./virtualCity.js";

let run_box = document.querySelector('#run-box'), input = document.querySelector('input')

function runRobot(state, robot, memory) {
    for(let turns = 0;;turns++) {
        if(state.parcels.length == 0) {
            run_box.innerHTML += `<p>${robot.name} completed delivering in ${turns} turns</p>`
            break;
        }
        let action = robot(state, memory);
        state = state.move(action.destination);
        memory = action.memory;
        run_box.innerHTML += `<p>Moved to => ${action.destination}</p>`;
    }
}

const currRobot = [];

let x = document.querySelectorAll('.robots')

x.forEach((e) => {
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
            currRobot.unshift()
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

document.querySelector("button").addEventListener('click', () => {
    if(currRobot.length) {
        let robotType = currRobot;
        if(robotType == "randomRobot") robot(input.value, randomRobot);
        else if(robotType == "routeRobot") robot(input.value, routeRobot);
        else robot(input.value, goalOrientedRobot)
        currRobot.pop()
    };
})

function robot(num, robot) {
    if(!num) {
        run_box.innerHTML += "<p>Please enter a valid number!</p>";
    }  else {
        runRobot(VillageState.generateParcel(num), robot)
    }
}

let clicked = false;

document.querySelector('a').addEventListener('click', () => {
    if(!clicked) {
        document.querySelector("#info").style.display = "block";
        clicked = true
    }  else {
        document.querySelector("#info").style.display = "none";
        clicked = false
    } 
});
