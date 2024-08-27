const playertext = document.querySelector("#playertext");
const computertext = document.querySelector("#computertext");
const resulttext = document.querySelector("#resulttext");
const choicebutton = document.querySelectorAll(".choicebutton");
let player;
let computer;
let result;

choicebutton.forEach(button => {
    button.addEventListener("click", () => {
        player = button.textContent.toUpperCase();  // Convert player choice to lowercase
        computerTurn();
        playertext.textContent = "YOU : " + player;
        computertext.textContent = "COMPUTER : " + computer;
        resulttext.textContent = checkWinner();
    });
});

function computerTurn() {
    const randnum = Math.floor(Math.random() * 3 + 1);
    switch (randnum) {
        case 1:
            computer = "STONE";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSOR";
            break;
    }
}

function checkWinner() {
    if (player === computer) {
        result = "DRAW";
    } else if (computer === "STONE") {
        if (player === "PAPER") {
            result = "YOU WIN";
        } else {
            result = "YOU LOSE";
        }
    } else if (computer === "PAPER") {
        if (player === "SCISSOR") {
            result = "YOU WIN";
        } else {
            result = "YOU LOSE";
        }
    } else if (computer === "SCISSOR") {
        if (player === "STONE") {
            result = "YOU WIN";
        } else {
            result = "YOU LOSE";
        }
    }
    return result;
}
