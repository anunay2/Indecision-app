var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar',nameVar);

let nameLet = 'Jen';
//no longer valid to redefine the variable .reassigning is valid.
 nameLet = 'Julie';
console.log('nameLet',nameLet);

const nameConst = 'Frank';
//cannot be redefined
//nameConst = 'Sinatara';

console.log('nameConst',nameConst);

function getPetName(){
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
//let and var functioned scope and block level code.
console.log(petName);

var fullName = 'Andrew Meades';

if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);

}
//var based variable is function scoped

//let and const is block scoped
console.log(firstName);

//const - no reassigning and no redefining and block scoped

//es5 function
function square(x){
    return x*x;
};

console.log(square(8));

//anonymous and assign it to variable.
// const squareArrow = (x) =>{
//     //could be another function call
//     return x*x;
// } ;

//advantage of the arrow function - arrow function expression syntax
//es6 
const squareArrow = (x) => x*x;

console.log(squareArrow(9));

const getFirstName = (fullName) => fullName.split(' ')[0];

const getFirstName1 = (fullName) =>{
    if(fullName){
        return fullName.split(' ')[0];
    }
}

console.log(getFirstName('Anunay Kumar'));

console.log(getFirstName1('Mike Alogo'));

//console.log(getFirstName(null));

console.log(getFirstName1(undefined));


//details of the arrow function - 
//when using arrow function can't use
// inconsistent arguments


const add = (a,b) => {
   // console.log(arguments);
    return a + b;
};

console.log(add(4,5));


const user = {
    name : 'Andrew',
    cities : ['Abc','New Delhi','Ahemadabad'],
    printPlacesLived()  {
        // console.log(this.name);
        // console.log(this.cities);
        // const that = this;
        const cityMessages = this.cities.map((city)=>{
            return city + '!';
        });

        // this.cities.forEach((city) =>
        //     console.log(this.name + ' has lived in ' + city)
        // );

        return cityMessages;
    }
};


console.log(user.printPlacesLived());

//popular array method map

const multiplier = {
    num: [1,3,5,7,8,9],
    mutiplyBy: 5,
    mutilply() {
            return this.num.map((n) => n * this.mutiplyBy);
    }
}

console.log(multiplier.mutilply());







