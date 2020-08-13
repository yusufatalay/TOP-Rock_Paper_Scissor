let moves = ["Rock", "Paper", "Scissor"]

function computerPlay() {
    let random_index = Math.floor(Math.random() * moves.length)
    return moves[random_index]
}

function playRound(player_selection, computer_selection) {
    let ps;
    ps = player_selection.toString().toLowerCase();
    let cs;
    cs = computer_selection.toString().toLowerCase();

    if(ps === cs){
        console.log("DRAW")
    }else if(ps ==="rock" && cs ==="paper"){
        return ("You Lose! Paper beats rock")
    }else if(ps ==="rock" && cs==="scissor"){
        return ("You Win!  Rock beats paper")
    }else if(ps === "paper" && cs ==="rock"){
        return ("You Win! Paper beats rock")
    }else if(ps === "paper" && cs ==="scissor"){
        return("You Lost! Scissor beats paper")
    }else if(ps === "scissor" && cs ==="paper"){
        return("You Win! Scissor beats paper")
    }else if(ps === "scissor" && cs==="rock"){
        return("You Lost! Rock beats the scissor ")
    }
}

const ps = "rock"
const cs = computerPlay()
console.log(playRound(ps, cs))

function game(){
    for(let i = 0;i<5;i++){
        let ps = window.prompt()
        let cs = computerPlay()
        console.log(playRound(ps, cs))
    }
}

game()