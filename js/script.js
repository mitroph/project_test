'use strict';

console.log('gg');

let number = 5;
const leftBorderWidth = 1;
var name = 'Iban';

number = 10;
console.log(number);

const obj = {
    a:50
};

obj.a = 10;

console.log(obj);
// leftBorderWidth = 10;        Error cause it's const

{
    let result = 50;
    console.log(result);
}
let apples = 2;
let oranges = 3;

console.log(`${apples} + ${oranges} = ${apples + oranges}`);

let a = '';
let b = "";
let c = ``;

const myObj = {
    name: 'John',
    age: 25,
    isMarried: false
};

console.log(myObj.name);


const answerName = prompt('Whats ur name?',"");
const answerSecondName = prompt('Whats ur second name?',"");
const answerAge = prompt('How old r u?',"");

const answers = [answerName, answerSecondName, answerAge];

