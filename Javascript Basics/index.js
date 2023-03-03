// console.log('START sync code: 1st console.log')
//---------------------------------

const firstFunction = () => {
    secondFunction()
    console.log('FUNCTION sync code: firstFunction')
}

const secondFunction = () => {
    thirdFunction()
    setTimeout(() => console.log('FUNCTION ASYNC code: in secondFunction'), 0)
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
console.log(1 + 1); // 2 - addition
console.log("1" + 1) //11 - concatenation
console.log(1 - 1); // 0 - substraction
console.log(2 * 2); // 4 -multiplication
console.log(2 / 2) // 1 - division
 