let btn1 = document.querySelector("#btn1");

// btn1.addEventListener(onclick,(evt)=>{
//     console.log(evt);

// });

const fnc = (evt)=>{
    console.log("HANDLER 1:",evt);
}
btn1.addEventListener("click",fnc);
btn1.addEventListener("click",(evt)=>{
    console.log("HANDLER 2: ",evt)
});

// let a=1
// btn1.onclick = ()=>{
//     console.log("Hello");
//     console.log("Click count: ",a);
//     a++;
// }
// the coolest thing is event object--> everybackground info about the event that occurs. whenever an event happens this automatically gets created -->the event object: 

//usage of EVENT OBJECT

// btn1.onclick = (event)=>{
//     console.log("####event occured####")
//     console.log(event);
//     console.log(event.clientX,event.clientY);
    
// }

// // body part continuous realtime mouse position data

// // let body = document.querySelector("body");
// document.body.onmousemove = (event) => {
//     // console.log("client:", event.clientX, event.clientY);
//     // console.log("screen:", event.screenX, event.screenY);
// };


