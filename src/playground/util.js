const square = (x) => x*x;

const add = (a,b) => a + b;

const substract = (a,b) => a-b;

console.log('utils.js is running');

//defualt export and named exports.

export default substract;

export {square,add};