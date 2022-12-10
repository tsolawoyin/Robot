const dark = document.querySelector("#dark");
const robots = document.querySelectorAll(".robots")
let clicked = false;

dark.addEventListener("click", e => {
    if(!clicked) {
        document.body.style.color = "white";
        document.body.style.backgroundColor = "#020122"
        dark.textContent = "Light mode"
        robots.forEach(e => e.style.borderColor = "white")
        clicked = true;
    } else {
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white"
        dark.textContent = "Dark mode"
        robots.forEach(e => e.style.borderColor = "black")
        clicked = false;
    }
})