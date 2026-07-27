
/*
let promise = new Promise((resolve,reject)=>{
    console.log("This is a promise");
    resolve("Status:200 | Ok");
    reject("some error occured")
})
*/
// promise is an object in js
// resolve and reject -- these two are inbuilt functions of promises
// There are 3 states of a promise--> pending | fulfilled | rejected


// APIs gives data through promises
/*
function getData(data,nextGetData){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(data)
        resolve("Success");
        if(nextGetData){
            nextGetData();
        }

    },2000);
    })
}

getData(1,()=>{
    getData(2)
})


let thisPromise = getData(1,()=>{
    getData(2)
});

*/


    // Generally speaking, we usually dont make promises, 
    // Usually the API gives us promises , we have to manage that


    /* Now above all was about creating a promise by yourself, now we'll manage promises----> .then(),.catch() */ 

// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("Inside Promise");
//         // resolve("success");
//         reject("error-xyz")
//     })
// }

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("The result is: ",res);
//     console.log("Using data from promise...");
// });

// promise.catch((err)=>{
//     console.log("Error msg: ",err);
//     console.log("Taking required action to handel promise rejection...");
// })


// promise chaining: 

function getData(data){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data: ",data)
        resolve("Success");
    },2000);
    })
}


// let promise2 = getData(1);
getData(1).then((res)=>{
    console.log(res);
    getData(2).then((res)=>{
        console.log(res);
    })
})

//or a bit adv way to write it : 


// so a PROMISE CHAIN
getData(1).then((res)=>{
    return getData(2);
}).then((res)=>{
    return getData(3);
}).then((res)=>{
    console.log(res);
});