//   Common way to define an of obj in JS

const xyz = {whoAmI:"im an obj", anon(){"hi"}};

// an obj has properties and methods 

const employeeInfo = {
    employeeId: "23@accentureLeX",
    name:"Shashank S Pandey",
    role:"AASE",
    location(){
        console.log("Location is Switzerland");
    },
    // this is just another way to write a function
    locationn: function(){
        console.log("Location is Indore")
    },
    cityTier:2
};

const salaryInfo ={
    salary(){
        console.log("Salary is 1 lakh")
    }
};

const empLocation = {
    location(){
        console.log("Location is Indore")
    }
}

employeeInfo.__proto__ = salaryInfo;
employeeInfo.__proto__ = empLocation;


// Whenever the obj and it's prototype is having a same function--> the object's function is executed.