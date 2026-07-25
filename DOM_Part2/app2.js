// create button
let newBtn = document.createElement("button");
newBtn.innerHTML = "Click Me!";
newBtn.style.backgroundColor ="red";
newBtn.style.color="white";

//inserting btn
document.body.prepend(newBtn);

// creating p

let p = document.createElement("p");
p.setAttribute("class","para1");
p.innerHTML="<i>You have the all the power within you</i>"
p.style.fontSize= "2rem";

//inserting 
document.body.append(p);


// now for this para2 we have to add properties of anyother class, without overwriting the other properties

let p2 = document.querySelector(".class1");
// p2.setAttribute("class","class2"); //this overrides the existing class properties
// let newPara = document.querySelector(".class2");
// newPara.style.backgroundColor="red";

p2.classList.add("class2");
// console.log(p2);
// console.log(p2.classList);
