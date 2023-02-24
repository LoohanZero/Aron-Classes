// console.log('START sync code: 1st console.log')
//---------------------------------

const firstFunction = () => {
    secondFunction()
    console.log('FUNCTION sync code: firstFunction')
}

const secondFunction = () => {
    thirdFunction()
    console.log('FUNCTION sync code: secondFunction') 
}

const thirdFunction = () => {
    console.log('FUNCTION sync code: thirdFunction')
}

function oldFunction() {
    //NOT USED ANYMORE
}
//---------------------------------

// const doSthFunction = (number1, number2) => {
//     const result = number1 + number2;
//     console.log(result);
//     //DO STH FUNCTIONS DONT HAVE RETURN AND END IN THE CLOSING CURLY BRACE
// }

// const sthIsReturned = (number1, number2) => {
//     const result = number1 + number2;
//     return result;
//     //RETURN STH FUNCTIONS ALWAYS FINISH IN THE RETURN NO MATTER WHAT WE HAVE AFTER
//     console.log('this is the eeeend')
// }

// const resultDoSthFunction = doSthFunction(1, 1);
// const resultsthIsReturned = sthIsReturned(1, 1);

// console.log('resultDoSthFunction result', resultDoSthFunction)
// console.log('resultsthIsReturned result', resultsthIsReturned)
//---------------------------------
// fetch("https://gateway.marvel.com/v1/public/characters?apikey=0e10884938787c40366929ce9fde20f4&limit=18").then((response) => {
//     console.log('Async: This is the backend respose');
// }).catch((error) => {
//     console.log(error)
// })

// setTimeout(() => console.log('Async: setTimeout javascript function')) //ASYNC CALL

// //---------------------------------
// firstFunction();
// //---------------------------------
// console.log('END sync code: 2nd console.log')

//---------------------------------
// const concatenation = "1" +  1;
// console.log(1 + 1); // If they are numbers, javascript adds them
// console.log(typeof concatenation);
// console.log("1" +  1); // if one is a string, it concatenates them because if one is a string it assumes that what you want to do is join strings so the number is converted to a string
// console.log("1" - 1); // If one is is a string you cannot substract sth to a string so it assumes the string is a number and forces a conversion from the string to number
 
// console.log('SHOWS TYPE OF VARIABLE, SHOULD SAY NUMBER', typeof 1);
// console.log('SHOWS TYPE OF VARIABLE, SHOULD SAY BOOLEAN', typeof true);
// console.log('SHOWS TYPE OF VARIABLE, SHOULD SAY STRING', typeof 'Aron');
// console.log('SHOWS TYPE OF VARIABLE, SHOULD SAY OBJECT', typeof {});
// console.log('SHOWS TYPE OF VARIABLE, SHOULD SAY OBJECT', typeof []);

// console.log('NUMBER', 2 === 2);
// console.log('STRING', "aron" === "aron");
// console.log('OBJECT',  {} === {});
// console.log('ARRAY', [] === []);
const isObjectEmpty = Object.keys({}).length === 0;

// DIFFERENCE BETWEEN OBJECTS AND ARRAYS
// THEY HAVE DIFFERENT METHODS

// METHOD LENGTH DOESNT EXIST IN THE OBJETCS
// INDEX IS ARRAYS IS THE KEY, VALUE IS THE VALUE -> []
// YOU CANNOT USE NUMBERS AS KEYS IN OBJECTS, ONLY STRINGS

// const array = [ 'Aron' ]
// const object = {
//     name: "Aron"
// }

// console.log(object.name); //DOT NOTATION - ARRAYS DONT HAVE IT
// console.log(object['name']); // BRACKET NOTATION

// console.log(array[0]); // BRACKET NOTATION
// console.log(isObjectEmpty)

//---------------------------------
// ! --> negates the value, gives the opossit back
// FALSY AND TRUTHY VALUES - 
// FALSY: null, undefined, '' (empty string), 0
// TRUTHY VALUES: 'aron', [], {}, any number that's not 0

console.log(0 == {})