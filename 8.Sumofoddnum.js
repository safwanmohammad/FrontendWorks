let input = require("readline-sync")

let limit = parseInt (input.question("Enter a Limit: ")) 
let sum=0

for(i = 1 ; i < limit ; i++ ){
    if( i % 2 == 1){

        sum=sum+i
    }
}
console.log("Sum of Odd Number: "+sum)