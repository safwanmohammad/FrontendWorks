let input = require("readline-sync")

let mark = parseFloat(input.question("Enter Your Mark: "))

if(mark <= 100 && mark >= 50){
    console.log("Passed")
}else if (mark >= 1 && mark <= 49){
    console.log("Failed")
}else{
    console.log("Wrong Input")
}