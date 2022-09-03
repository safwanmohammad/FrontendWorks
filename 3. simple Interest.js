let input = require("readline-sync")

let P = parseInt(input.question("Enter Your Principal Amount: "))
let R = parseFloat(input.question("Enter Your Intrest Rate: "))
let n = parseFloat(input.question("Enter Your Number Of Years: "))

let SI = (P*R*n)/100 ;

console.log("Your Simple Intrest Is: "+SI)