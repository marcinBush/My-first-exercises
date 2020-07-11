const square = document.createElement("div");
document.body.appendChild(square);

let grow = true;
let size = 100;

square.style.height = size + "px";
square.style.width = size + "px";

window.addEventListener("scroll", function () {


    if (size >= window.innerWidth / 2) {
        grow = !grow;
    } else if (size <= 0) {
        grow = !grow;
    }

    if (grow) {
        size += 5;
        square.style.height = size + "px";
        square.style.width = size + "px";
    } else {
        size -= 5;
        square.style.height = size + "px";
        square.style.width = size + "px";
    }

})