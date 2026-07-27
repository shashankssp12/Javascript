// synchronous-asynchronous---> promises--> callback hell

// sync progmming means --> one by one execution, it means if one step it taking time, next steps have to wait until the execution of the prev block of code
// async programming means--> regardless of squence, the code gets executed and the one block that is taking time will not block the flow

/*
function1
function2
API (takes time to load maybe)
function3 
function4
*/
/*
const hello =()=>{
    console.log("hello there");
}

setTimeout(hello,4000);

setTimeout(()=>{
    console.log("I appear after waiting 5 sec")
},5000);

console.log("I'm written after, but i appear earlier");
*/

// Part 2
// Callback Hell : is a situation where lots of callbacks are nested into one another, froming a pyramid structure. (Pyramid of Doom)
//example of callback
/*
function sum(a,b){
    console.log(a+b);
}

function operators_and_operation(a,b,callBack){
     callBack(a,b);
}

// operators_and_operation(15,5,sum);
*/

// PART 3
// now i have to make functions for synchronously 

function getData(data,getNextData){
    setTimeout(()=>{
    console.log("Data is:",data)
    if(getNextData){
        getNextData();
    }
    },2000)
}

/*All the functions work no one waits for another--> so the response stikes at onces after 2 sec */
// getData(123);
// getData(321);
// getData("fg0are23");

// we want sync to happen --> wait for one another

// getData(123,getData(321)); //here 321 is printed first infact opp happened

// this is called callback hell--> as it's difficult to manage and understand
getData(123,()=>{
    getData(321,()=>{
        getData("ga3f31@3")
    });
});

// ^^^^^^^^^ now all this happens in sync, only when one is executed , the other is called


// now that is the perfect example of callback hell