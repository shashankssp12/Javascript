let btn = document.querySelector("button");
let count =1 ;
let currMode="light-mode";


btn.addEventListener("click",()=>{
    if(currMode==="light-mode"){
    document.body.style.backgroundColor = "black";
    btn.style.backgroundColor = "black";
    btn.style.color="white";
    currMode = "dark-mode";
    }else{
    document.body.style.backgroundColor = "white";
    btn.style.backgroundColor = "white";
    btn.style.color="black";
    currMode = "light-mode";
    }
        });

// btn.addEventListener("click",(evt)=>{
//     if(count%2==1){
//     document.body.style.backgroundColor = "black";
//     btn.style.backgroundColor = "black";
//     btn.style.color="white";
//     }else{
//     document.body.style.backgroundColor = "white";
//     btn.style.backgroundColor = "white";
//     btn.style.color="black";
//     }
//     count++;
//         });
// btn.addEventListener("click",(evt)=>{
//     document.body.style.backgroundColor = "white";
//     btn.style.backgroundColor = "black";
//     btn.style.color="black";

// });