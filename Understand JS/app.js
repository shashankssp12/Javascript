// divs.getAttribute();

let firstDiv = document.querySelector(".box");
firstDiv.style.backgroundColor = "pink";

let allDivs = document.querySelectorAll(".box");

allDivs.forEach((div)=>{
    // div.style.backgroundColor="pink";
    div.style.fontSize = "2.5rem";
    div.innerText="From JS";
});


// Creating elements inside html
//create elements, set position in document

let newHeading = document.createElement("h1")
newHeading.setAttribute("id","#head1");
console.log(newHeading.getAttribute("id"));
newHeading.innerText = "I am the new Heading from JS"
firstDiv.before(newHeading);

// delete node/ element from the dom

let oldHeading = document.querySelector("h1");
console.log(oldHeading);
// oldHeading.remove();