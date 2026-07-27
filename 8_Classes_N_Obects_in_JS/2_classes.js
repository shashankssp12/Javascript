class ToyotaCar{
     fuelEngine="CNG";
     model='';
    constructor(){
        console.log("fuel engine: ",this.fuelEngine)
    }

     start() {
        console.log("Car Starts")
    }

    stop(){
        console.log("Car Stops")
    }
    setModel(model){
        this.model = model;
    }
}

// let fortuner = new ToyotaCar();
// let hycross = new ToyotaCar();

let CLG_DATA = "All Information";
class User{
    name ='';
    email='';

    constructor(name,email){
        this.name = name;
        this.email = email;
        this.viewData();
    }
    viewData(){
        console.log(CLG_DATA);

    }
}

let user1 = new User("Shashank","shashank@gmail.com");
let user2 = new User("Ram","ram@gmail.com");

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(newData){
        CLG_DATA = newData;
    }
}

let admin1 = new Admin("shashank","admin@gmail.com");
