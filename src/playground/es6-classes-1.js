//a website of the car
//make
//car
//model
//paint
//wheel
//getDescriptionMethod

class Person {

    //define constructor for initializing the 
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
        console.log("Test Constructor");
    }

    getGreetings(){
        return `Hi.I am  ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}
class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    getGreetings(){
        let desc = super.getGreetings();
        if(this.homeLocation){
           return `${desc}I am visiting ${this.homeLocation}`; 
        }
        return desc;
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `Major is ${this.major}`;
        }
        return description;
    }
}

const me = new Student('Andrew Mead',27,'Computer Science');
const me1 = new Student();
console.log(me.getDescription());
console.log(me1.getDescription());

const tr1 = new Traveller('Anunay Kumar',234,'Bhagalpur');
const tr2 = new Traveller();

console.log(tr1.getGreetings());
console.log(tr2.getGreetings());
