let turn = "X";
let toggleTurn = true
let box = document.querySelectorAll(".box");
let winner = document.getElementById("win");
let announce = document.querySelector("#win h1");
var clickAudio = new Audio('music/audioclick.wav');
var gameAudio = new Audio('music/gameaudio.mp3');
var gameover = new Audio('music/gameover.wav');
let w;
let m = 0;
function changeTurn(turn) {
    toggleTurn = !toggleTurn;
    if (toggleTurn == false) {
        turn = "O";
        document.getElementById("x").classList.remove("active");
        document.getElementById("o").classList.add("active");
    }
    else {
        turn = "X";
        document.getElementById("o").classList.remove("active");
        document.getElementById("x").classList.add("active");
    }
    return turn;
}
function checkWin() {
    let win = [[0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [6, 4, 2]];
    for (let i = 0; i < win.length; i++) {
        k = win[i];
        if ((box[k[0]].innerText == box[k[1]].innerText && box[k[1]].innerText == box[k[2]].innerText && box[k[0]].innerText != "")) {
            winner.classList.remove("deactivate");
            announce.innerText = turn + " is winner";
            gameover.play();
            w=0;
        }
    }
    m = m + 1;
    console.log();
    if (m == 9 && w!=0) {
        winner.classList.remove("deactivate");
        announce.innerText = "Its a draw";
        gameAudio.pause();
    }

}
document.querySelector("#win button").addEventListener("click", () => {
    winner.classList.add("deactivate");
    for (let i = 0; i < box.length; i++) {
        box[i].innerText = "";
    }
    m=0;
    w=1;
})
for (var i = 0; i < box.length; i++) {
    let element = box[i];
    element.addEventListener("click", function () {
        if (element.innerText == "") {
            clickAudio.play();
            element.innerText = turn;
            checkWin();
            turn = changeTurn(turn);
        }
    })
}

