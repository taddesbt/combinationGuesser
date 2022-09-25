
const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message");
let score = 0;
let gamePlay = false;


button.addEventListener("click", function () {
    if (!gamePlay) {
        gamePlay = true;
        score = 0;
        gameArea.innerHTML = "";
        maker(6);
        message.innerHTML = "Guess the combo";
        button.innerHTML = "Check Combo";
    }
})