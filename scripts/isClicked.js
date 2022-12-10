
// This controls the display of the "Read about project" on the page

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