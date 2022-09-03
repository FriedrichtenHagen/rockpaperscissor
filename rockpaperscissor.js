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
const resultDiv = document.querySelector("div.gameResult")
const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
    button.addEventListener("click", e => {
        console.log(evalGame(e))
        console.log("Human:"+humanScore+" Computer:"+compScore)
        resultDiv.textContent = `You: ${humanScore} Computer: ${compScore}`
    })
})

let humanScore = 0
let compScore = 0
function evalGame(e){
    const lowerChoice = e.target.className.toLowerCase();
    let compChoiceTemp = compChoice();

        if(lowerChoice === compChoiceTemp){
            return "It's a draw!";
        }
        else if(compChoiceTemp === "rock" && lowerChoice === "paper"){
            humanScore++
            return "human wins!" // Paper beats Rock!";
            
        }
        else if(compChoiceTemp === "rock" && lowerChoice === "scissors"){
            compScore++
            return "comp wins!" //Rock beats Scissor";
            
        }
        else if(compChoiceTemp === "paper" && lowerChoice === "rock"){
            compScore++
            return "comp wins!" // paper beats rock!";
            
        }
        else if(compChoiceTemp === "paper" && lowerChoice === "scissors"){
            humanScore++
            return "human wins!" // scissor beats paper!";
            
        }
        else if(compChoiceTemp === "scissors" && lowerChoice === "paper"){
            compScore++
            return "comp wins!" // scissor beats paper!";
            
        }
        else if(compChoiceTemp === "scissors" && lowerChoice === "rock"){
            humanScore++
            return "human wins!" // rock beats scissor!
            
        }
        else{
            return "something went horribly wrong...";
        }
}   

