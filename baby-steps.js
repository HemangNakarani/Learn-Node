let inputs = process.argv; //taking input from console

inputs.splice(0, 2); // removing first 2 elements

let sum = inputs.reduce((total, current) => total + Number(current), 0); // sum using reducer

console.log(sum); // output
