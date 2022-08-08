console.log("Lets play rock paper scissor!");



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
        return "scissor";
    }
}


//function that takes input from human (toLowerCase to ensure comparablitiy with CompChoice)
function humanChoice(){
    const val = document.querySelector('input').value;
    const lowerCaseVal = val.toLowerCase();
    if(lowerCaseVal === "rock" || lowerCaseVal === "paper" || lowerCaseVal === "scissor"){
        return lowerCaseVal;
    }
    else{
        console.log("Come back when you understand the game, kid!");
        return "Error";
    }
}


//function that compares compChoice and humanChoice
//and outputs result

/*
function evalGame(){
    if(compChoice() === humanChoice()){
        return "It's a draw!";
    }
    else if(compChoice() === "rock" && humanChoice() === "paper"){
        return "Human wins! Paper beats Rock!";
    }
    else if(compChoice() === "rock" && humanChoice() === "scissor"){
        return "Computer wins! Rock beats Scissor";
    }
    else if(compChoice() === "paper" && humanChoice() === "rock"){
        return "Comp wins! paper beats rock!";
    }
    else if(compChoice() === "paper" && humanChoice() === "scissor"){
        return "Human wins! scissor beats paper!";
    }
    else if(compChoice() === "scissor" && humanChoice() === "paper"){
        return "comp wins! scissor beats paper!";
    }
    else if(compChoice() === "scissor" && humanChoice() === "rock"){
        return "Human wins! rock beats scissor!";
    }
    else{
        return "something went horribly wrong...";
    }
}
*/

// repeat game 5 times 

function evalGame(){
    let alertChoice = prompt("Enter your choice");
    const lowerChoice = alertChoice.toLowerCase();
    let compChoiceTemp = compChoice();

            if(lowerChoice === compChoiceTemp){
                return "It's a draw!";
            }
            else if(compChoiceTemp === "rock" && lowerChoice === "paper"){
                return "human wins!" // Paper beats Rock!";
            }
            else if(compChoiceTemp === "rock" && lowerChoice === "scissor"){
                return "comp wins!" //Rock beats Scissor";
            }
            else if(compChoiceTemp === "paper" && lowerChoice === "rock"){
                return "comp wins!" // paper beats rock!";
            }
            else if(compChoiceTemp === "paper" && lowerChoice === "scissor"){
                return "human wins!" // scissor beats paper!";
            }
            else if(compChoiceTemp === "scissor" && lowerChoice === "paper"){
                return "comp wins!" // scissor beats paper!";
            }
            else if(compChoiceTemp === "scissor" && lowerChoice === "rock"){
                return "human wins!" // rock beats scissor!
            }
            else{
                return "something went horribly wrong...";
            }
}   



function fiveGames(){
    let compScore = 0;
    let humanScore = 0;

    for(let i=0; i<5; i++){
        let resultGame = evalGame();
        console.log(resultGame);

        if(resultGame === "human wins!"){
            humanScore++;
        }
        else if(resultGame === "comp wins"){
            compScore++;
        }
        console.log("human score: " + humanScore +" computer score: "+ compScore);
       
    }
    if(humanScore < compScore){
        console.log("Computer wins!!!!!!!!!!!!!!!!!!")
    }
    else if(compScore < humanScore){
        console.log("human wins!!!!!!!!!!!!!!!!!!!!!!!1")
    }
    else{
        console.log("It is a draw!!!!!!!!!!!!!!!!!!!!!!!")
    }
}