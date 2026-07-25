const BASE_URL = "https://api.frankfurter.dev/v2/rates?"

// https://api.frankfurter.dev/v2/rates?base=USD&quotes=INR


// populate options in select tag from codes.js


const selects = document.querySelectorAll(".drop-down select");

// selecting button

const btn = document.querySelector("form button")

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");


// for(code in countryList){
//     console.log(code); 
// }

for(let select of selects){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;;
        // newOption.value = countryList[currCode];
        newOption.value = currCode;
        select.append(newOption);
        // property for default selection
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
    }
        select.addEventListener("change",(evt)=>{
            updateFlag(evt.target);
        });
}


const updateFlag = (element)=>{
        let currCode = element.value;
        let countryCode = countryList[currCode];
        let newSrc =  `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img = element.parentElement.querySelector("img");
        img.src = newSrc
};



// action on btn

btn.addEventListener("click", async(evt)=> {
    //read from and to dropdowns selects
    //see the amount in input
    // show the exchange amt in the msg box area
    evt.preventDefault();
    let amount = document.querySelector("form input");
    let amtValue = amount.value;
    console.log(amtValue);
    if(amtValue==="" || amtValue<1){
        amtValue=1;
        amount.value="1";
    }
    console.log(fromCurr.value,toCurr);
    const URL = `${BASE_URL}base=${fromCurr.value}&quotes=${toCurr.value}`;
    console.log(URL);
    let response = await fetch(URL);
    let data = await response.json();
    // console.log(data[0].rate); // i get the rate from here
    const rate = data[0].rate;

    let finalAmt = amtValue * rate;
    msg.innerText = `${amtValue}${fromCurr.value} = ${finalAmt}${toCurr.value}`;

});


//to use await, we have to make the function async


// 
let sum = (a,b)=>{
    return a+b;
}
console.log(sum) //gave the definition of the sum


let enteredName=(a)=>{
    return a;
}

function vowelsAre(s){
    let count=0;
    for(let i of s){
        if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u")
            count++;
    }
    console.log("Vowels are:",count);
}
vowelsAre("aeiousdfklja;s");


let arrVowelsCount = (str)=>{
    let count=0;
    for(let i of str){
        if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u")
            count++;
    }
    console.log("ArrowFc Vowels are: ",count);
}

arrVowelsCount("shashank")

let arr = ["ram","lakshman","haumanji","mata sita"];

arr.forEach((name)=>{
    console.log("Jai ",name.toUpperCase());
});