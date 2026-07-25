// getting the events

let rockBtn = document.querySelector("#rock-btn");
let paperBtn = document.querySelector("#paper-btn");
let scissorBtn = document.querySelector("#scissor-btn");

let selection ="";

rockBtn.addEventListener("click",()=>{
    alert("You chose rock");
    selection="rock"
    console.log(selection);
})

paperBtn.addEventListener("click",()=>{
    alert("You chose paper");
    selection="paper";
    console.log(selection);
})
scissorBtn.addEventListener("click",()=>{
    alert("You chose scissor");
    selection="scissor";
    console.log(selection);
})

console.log(selection);