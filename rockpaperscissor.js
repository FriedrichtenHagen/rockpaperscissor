
// create function that generates random choice for computer
// three options: rock, paper, scissor
function compChoice(){
    let hand = Math.floor(Math.random()*3);
    if(hand == 0){
        return "rock";
    }
    else if(hand == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener("click", e => {
        console.log(evalGame(e))
    })
})


function evalGame(e){
    const lowerChoice = e.target.className.toLowerCase();
    let compChoiceTemp = compChoice();

        if(lowerChoice === compChoiceTemp){
            return "It's a draw!";
        }
        else if(compChoiceTemp === "rock" && lowerChoice === "paper"){
            return "human wins!" // Paper beats Rock!";
        }
        else if(compChoiceTemp === "rock" && lowerChoice === "scissors"){
            return "comp wins!" //Rock beats Scissor";
        }
        else if(compChoiceTemp === "paper" && lowerChoice === "rock"){
            return "comp wins!" // paper beats rock!";
        }
        else if(compChoiceTemp === "paper" && lowerChoice === "scissors"){
            return "human wins!" // scissor beats paper!";
        }
        else if(compChoiceTemp === "scissors" && lowerChoice === "paper"){
            return "comp wins!" // scissor beats paper!";
        }
        else if(compChoiceTemp === "scissors" && lowerChoice === "rock"){
            return "human wins!" // rock beats scissor!
        }
        else{
            return "something went horribly wrong...";
        }
}   
