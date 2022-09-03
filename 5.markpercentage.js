let input = require("readline-sync")

let tm = parseFloat(input.question("Enter Your Mark Percentage: "))

if(tm >= 90 && tm <= 100){
    console.log("Grade A")
}
else if(tm >= 80 && tm <= 89){
    console.log("Grade B")
}
else if(tm >= 70 && tm <= 79){
    console.log("Grade C")
}
else if(tm >= 60 && tm <= 69){
    console.log("Grade D")
}
else if(tm >= 50 && tm <= 59){
    console.log("Grade E")
}
else if(tm >= 0 && tm <= 49){
    console.log("Failed")
}
else{
    console.log("Wrong Input")
}