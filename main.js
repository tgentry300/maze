const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];

    const main = document.querySelector("main")
    for (let column of map) {
        const colElement = document.createElement("div")
        colElement.classList.add("column")
        main.appendChild(colElement)
        for (let cell of column) {
            const cellElement = document.createElement("div")
            cellElement.classList.add("cell")
            colElement.appendChild(cellElement)
            if(cell === "W"){
                cellElement.classList.add("wall")
            }
        }
    }


    let boxTop = 200;
    let boxLeft = 200;
    'use strict';
    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        console.log('keydown event\n\n' + 'key: ' + keyName);
        document.getElementById("pic").style.top = boxTop + "px";
        document.getElementById("pic").style.left = boxLeft + "px";

        switch (keyName) {
            case "ArrowDown":
                boxTop += 10
                break;
            case "ArrowUp":
                boxTop -= 10
                break;
            case "ArrowLeft":
                boxLeft -= 10
                break;
            case "ArrowRight":
                boxLeft += 10
                break;
        }
    });
