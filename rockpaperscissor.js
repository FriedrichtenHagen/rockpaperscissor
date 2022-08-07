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

function evalGame(){
    if(compChoice() === humanChoice()){
        console.log("It's a draw!");
    }
    else if(compChoice() === "rock" && humanChoice() === "paper"){
        console.log("Human wins! Paper beats Rock!");
    }
    else if(compChoice() === "rock" && humanChoice() === "scissor"){
        console.log("Computer wins! Rock beats Scissor");
    }
    else if(compChoice() === "paper" && humanChoice() === "rock"){
        console.log("Comp wins! paper beats rock!");
    }
    else if(compChoice() === "paper" && humanChoice() === "scissor"){
        console.log("Human wins! scissor beats paper!");
    }
    else if(compChoice() === "scissor" && humanChoice() === "paper"){
        console.log("comp wins! scissor beats paper!");
    }
    else if(compChoice() === "scissor" && humanChoice() === "rock"){
        console.log("Human wins! rock beats scissor!");
    }
    else{
        console.log("something went horribly wrong...");
    }
}

