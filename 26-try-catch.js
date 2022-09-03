let myString = 004

try {
    console.log( `Rverse string is: ${ myString.split( "" ).reverse().join( "" ) }` );

} catch( err ) {
    console.log( `${ err }` );

} finally {
    console.log( `Type of String is: ${ typeof myString }` );

}