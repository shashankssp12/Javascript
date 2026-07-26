// getting the events

let rockBtn = document.querySelector("#rock-btn");
let paperBtn = document.querySelector("#paper-btn");
let scissorBtn = document.querySelector("#scissors-btn");
let msgBox = document.querySelector("#msgBox")
let userScoreBox = document.querySelector("#userScore h1");
let compScoreBox = document.querySelector("#compScore h1");


let userSelection ="";
let compSelection=""
let list = ["rock","paper","scissors"];

let compScore=0;
let userScore=0;


function compareSelection(){
    console.log(userSelection);

    if(userSelection===compSelection){
        msgBox.innerText="It's a draw";
        msgBox.style.backgroundColor = " rgb(30, 30, 81)";
    }
    else if(userSelection==="rock" && compSelection==="paper"){
        msgBox.innerText="You lost! Computer's "+compSelection+" beats your "+ userSelection;
        msgBox.style.backgroundColor = "red";
        compScore++;
    }
     else if(userSelection==="rock" && compSelection==="scissors"){
        msgBox.innerText="User Wins";
        msgBox.style.backgroundColor = "green";

        userScore++;
     }
     else if(userSelection==="paper" && compSelection==="rock"){
        msgBox.innerText = "User Wins"
        msgBox.style.backgroundColor = "green";
        userScore++
     }
     else if(userSelection==="paper" && compSelection==="scissors"){
        msgBox.innerText="Computer Wins";
        msgBox.style.backgroundColor = "red";
        compScore++;
      }
     else if(userSelection==="scissors" && compSelection==="rock"){
        msgBox.innerText="Computer Wins";
        msgBox.style.backgroundColor = "red";
        compScore++;
      }
       else if(userSelection==="scissors" && compSelection==="paper"){
        msgBox.innerText="User Wins";
        msgBox.style.backgroundColor = "green";
        userScore++;
      }
        userScoreBox.innerText = userScore;
        compScoreBox.innerText = compScore;
}


function rand1to3(){
    return Math.floor(Math.random()*3);
    // Math.floor(Math.random()*3)+1
}


rockBtn.addEventListener("click",()=>{
    userSelection="rock";
    compSelection= list[rand1to3()];
    compareSelection();
    })

paperBtn.addEventListener("click",()=>{
    userSelection="paper";
    compSelection= list[rand1to3()];
    compareSelection();
})
scissorBtn.addEventListener("click",()=>{
    userSelection="scissors";
    compSelection= list[rand1to3()];
    compareSelection();
})







// todo: 
// - Generate random id out of 3
// - call that function to work everytime I press the buttons
// - Give id to each button 
// - function to update score on everyclick


// - so on everyclick of button ---> 
// i have my button id
// have computer select Number
// if(myNo==randomNo){
//     noChange
// }
// if 6 other combinations
// counter of score


// - Then for every btn click show the msg in the msg box