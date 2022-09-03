let input = require("readline-sync")

const limit = 10
let num = parseFloat(input.question("Enter your Number"))

for( i = 1 ; i <= limit ; i++){
    console.log(i+" x "+limit+ " = "+i*num)
}