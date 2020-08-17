let moves = ["Rock", "Paper", "Scissor"]

const rock_btn = document.createElement("button");
rock_btn.textContent = "ROCK"
const paper_btn = document.createElement("button");
paper_btn.textContent = "PAPER"
const scissor_btn = document.createElement("button");
scissor_btn.textContent = "SCISSOR"
const btn_div = document.getElementById("buttons");

btn_div.appendChild(rock_btn);
btn_div.appendChild(paper_btn);
btn_div.appendChild(scissor_btn);


const score_div = document.getElementById("score");
const score_text = document.createElement("p");

score_div.appendChild(score_text);
function computerPlay() {
    let random_index = Math.floor(Math.random() * moves.length)
    return moves[random_index].toLowerCase();
}

rock_btn.addEventListener("click", function (e) {
    playRound("rock", computerPlay().toLowerCase())
});

paper_btn.addEventListener("click", function (e) {
    playRound("paper", computerPlay().toLowerCase())
});

scissor_btn.addEventListener("click", function (e) {
    playRound("scissor", computerPlay().toLowerCase())
});


function playRound(player_selection, computer_selection) {
    let ps;
    ps = player_selection.toString().toLowerCase();
    let cs;
    cs = computer_selection.toString().toLowerCase();

    if (ps === cs) {
        score_text.textContent ="DRAW"
    } else if (ps === "rock" && cs === "paper") {
        score_text.textContent ="You Lose! Paper beats rock"

    } else if (ps === "rock" && cs === "scissor") {
        score_text.textContent ="You Win!  Rock beats paper"

    } else if (ps === "paper" && cs === "rock") {
        score_text.textContent ="You Win! Paper beats rock"

    } else if (ps === "paper" && cs === "scissor") {
        score_text.textContent ="You Lost! Scissor beats paper"

    } else if (ps === "scissor" && cs === "paper") {
        score_text.textContent ="You Win! Scissor beats paper"

    } else if (ps === "scissor" && cs === "rock") {
        score_text.textContent ="You Lost! Rock beats the scissor "

    }
}





