console.log("Lets play rock paper scissor!");



// create function that generates random choice for computer
// three options: rock, paper, scissor
function compChoice(){
    return Math.floor(Math.random()*3);
}


//function that takes input from human (toLowerCase to ensure comparablitiy with CompChoice)
function humanChoice(){
    const val = document.querySelector('input').value;
    const lowerCaseVal = val.toLowerCase();
    console.log(lowerCaseVal);
}




//function that compares compChoice and humanChoice
//and outputs result
/*
if(chompChoice === humanChoice){
    console.log("It's a draw!");
}
else if(compChoice === rock && humanChoice === paper){
    console.log("Human wins!");
}
*/