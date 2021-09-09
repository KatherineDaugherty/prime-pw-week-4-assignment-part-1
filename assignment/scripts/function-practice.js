console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  //console.log("Hello World!");
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

console.log('_________QUESTION_2___DONE__________');
// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
// redundant  console.log('Hello ' + name );
  return 'Hello ' + name;
}
// Remember to call the function to test
console.log(helloName('Bill'));
console.log(helloName('Jill'));



console.log('_________QUESTION_3_____________');

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log('in addNumbers:', firstNumber, secondNumber);
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
} // end addNumbers

console.log(addNumbers(4,6));
addNumbers(4,6);


console.log('_________QUESTION_4_____________');

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2 ){
  console.log("in multiplyThree:", num0, num1, num2);
  let answer = num0 * num1 *num2;
  return answer;
} // end multiplyThree

console.log('running multiplyThree', multiplyThree(1,2,3));
multiplyThree(1,2,3);



console.log('_________QUESTION_5_____________');

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } // end true
  else{
    return false;
  } // end false
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log(isPositive(3));
console.log( 'isPositive - should say false', isPositive(0) );
console.log(isPositive(0));
console.log( 'isPositive - should say false', isPositive(-3) );
console.log(isPositive(-3));



console.log('_________QUESTION_6_____________');

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let list = ['1','2','3','4','5','6','7'];

function getLast() {

return list[list.length -1] // list.length -1 will be last item in array
}
console.log('Test---', getLast(list));






console.log('_________QUESTION_7_____________');

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 


array =[2,3,4,5,6,7,8];
function find( value, array ){ // parameters value & array
  for(taco of array){ //for of loop 
    if(taco === value){ //condition
      console.log(taco); // print value
      console.log ( value + ' is in the array'); 
    return true;
    }   
  } return false;
} 
console.log('find value in an array', find (6,array));





// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
console.log('QUESTION 8- STRETCH ********* ');

function isFirstLetter(letter, string) {
  return letter === string[0];
} //return true or false.

console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
console.log('STRETCH  QUESTION 9 ******');

array = [1,2,3,4,5,6]
function sumAll( ) {
  let sum = 0
    for( let i = 0; i < array.length; i++){
      console.log(sum += array[i]); 
    }
  // TODO: loop to add items
  return sum;
}

console.log('sum of all', sumAll() );


// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

//going to work on part 2 & 3 first 


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
