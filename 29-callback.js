function myFileter( arr, callback ) {
    let sum = 0;
    for( let i of arr ) {
        sum += i;
    }

    value = callback( arr );

    return sum;
}

let k = function ( arr ) {
    let sum = 0;
    for( let i of arr ) {
        sum += i;
    }

    if( sum % 2 == 0 ) {
        return true;
    } else {
        return false;
    }
} 



arr = [ 10,20,30,40,50];
let a = myFileter( arr, k );
console.log( a );