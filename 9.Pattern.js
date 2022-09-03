let input = require("readline-sync")

let limit = 5

for(i = 1 ; i <= limit ; i ++){

    // Assigning a new variable
    let x = ""
    for(j = 1 ; j <= i ; j ++){
        
        // Adding each elamant in x
        x += j
    }
    console.log(x)
}
