const isAdult = (age) => (age >= 18);
const canDrink = (age) => (age >= 21);
const isSeniorCitizen = (age) => (age>=65);

//single defualt export and multiple named exports
export default isSeniorCitizen;
export {isAdult,canDrink};

//install import and use

