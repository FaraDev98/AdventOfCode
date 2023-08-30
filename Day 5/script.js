const QUANTITY = 0;
const FROM = 1;
const TO = 2;
let stacks = [
    [],
    ["N", "Q", "L", "S", "C", "Z", "P", "T"],
    ["G", "C", "H", "V", "T", "P", "L"],
    ["F", "Z", "C", "D"],
    ["C", "V", "M", "L", "D", "T", "W", "G"],
    ["C", "W", "P"],
    ["Z", "S", "T", "C", "D", "J", "F", "P"],
    ["D", "B", "G", "W", "V"],
    ["W", "H", "Q", "S", "J", "N"],
    ["V", "L", "S", "F", "Q", "C", "R"]
];

window.onload = () => {

    let initString = document.querySelector("pre").innerHTML;
    let movesArrStr = initString.split("\n");

    for (i = 0; i < movesArrStr.length; i++) {
        let move = [];
        for (j = 0; j < movesArrStr[i].length; j++) {
            if (!isNaN(Number(movesArrStr[i][j])) && Number(movesArrStr[i][j]) != 0) {
                if (movesArrStr[i].indexOf([j + 1]) < movesArrStr[i].length && movesArrStr[i][j + 1] != " ") {
                    let completeNumber = movesArrStr[i][j].concat(movesArrStr[i][j + 1] != undefined ? movesArrStr[i][j + 1] : "");
                    move.push(completeNumber);
                    j++;
                } else {
                    move.push(movesArrStr[i][j]);
                }
            }
        }

        moveCrates(move[QUANTITY], move[FROM], move[TO]);
    }

    for (s of stacks) {
        console.log(s);
    }
}


function moveCrates(quantity, from, to) {
    let multipleCrates = [];
    for (let i = 0; i < quantity; i++) {
        if (stacks[from].length > 0) {
            let crateFrom = stacks[from].shift();
            multipleCrates.unshift(crateFrom);
        }
    }
    stacks[to].reverse();
    stacks[to] = stacks[to].concat(multipleCrates);
    stacks[to].reverse();

}



