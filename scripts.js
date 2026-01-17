let btn = document.querySelector("button.enter");
let tIn = document.querySelector("#in");
let clr = document.querySelector("button.clear");
let size = 0;
btn.addEventListener("click", () => {
    console.log("pressed" + " " +  tIn.value);
    makeBoard(Number(tIn.value));
    size = tIn.value;
});
clr.addEventListener("click", () => {
    console.log("pressed" + " " +  tIn.value);
    clear();
    size = tIn.value;
});
function clear() {
    let board = document.querySelector(".sketchpad");
    board.innerHTML = '';
}
function makeBoard(x) {
    let board = document.querySelector(".sketchpad");
    board.style.margin = "auto";
    console.log("makeBoard");
    let col = document.createElement("div");
    col.style.display = "flex";
    col.style.flexDirection = "column";
    col.style.width = "auto";
    for (i=0; i<x; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.flex = "1 1 auto";
        row.style.width = "auto";
        for (j=0; j<x; j++) {
            let b = document.createElement("button");
            //b.style.width="25px";
            //b.style.height="25px";
            b.addEventListener("mouseover", () => {
                b.style.backgroundColor = "gray";
            });
            b.style.flex = "1 1 auto";
            b.style.minWidth = "5px";
            b.style.minHeight = "5px";
            console.log("added btn");
            row.appendChild(b);
        }
        col.appendChild(row);
        console.log("added row");
    }
    board.appendChild(col);
}