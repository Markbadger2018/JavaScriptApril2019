/* 
Booleans
******************
What is a boolean? Boolean can represent: true/false, yes/no, on/off
*/ 
let i = true;
let j = false;
/*        (1)
1-Keyword for boolean - no quotation marks*/
let on = true;
console.log(on); // true
let off = false;
console.log(off); // false
 
/* 
Null
******************
Null = empty value (not 0; not undefined)
It is like an empty container; nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty); // null

/*
Undefined
******************
Undefined = no value assigned (not even an empty container)

UNDEFINED IS NOT AN ERROR
*/

let undef = undefined;// never do this
console.log(undef); // undefined

let grass;
console.log(grass); // undefined

/*
Null vs. Undefined 
******************
Null is like a container with nothing in it
Undefined is when a variable has never been set, or hasnt been created yet. 

/* 
Numbers
**********
Numbers are exactly what they sounds like, numbers. In JS, you dont need anything special to write them. 
*/

let degrees = 90;
console.log(degrees);


let precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999

let rounded = 9999999999999999; // 16 9's
console.log(rounded); // 

let notQuite = 0.2 +0.1;
console.log(notQuite);

let a = '123';

let b = Number(a);
console.log(b);

/*
Strings
*********
Strings are Datatypes used to represent text and are wrapped in either a single or double quote
Strings are Primative Datatype. This also includes Numbers, Booleans, Null, Undefined and others 
*/

let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo);

let first = 1050 +100;
let second = '1050' + '100'; 

let firstname = "Mark";
let lastname = "Badger";

console.log(firstname + lastname);
console.log(firstname +' '+ lastname);
console.log(firstname, lastname)

/*
Objects
*************

*/

let car1 = {
    color: 'red',
    tires: 4,
    extras: 'A/C and Radio',
    cool: true
}

console.log(car1)// { size: 'large', quantity: 4, now: true }
console.log(typeof car1)// object


/*
Arrays
************
Arrays are containers that hold lists of items
*/
let list =  [  'item1',   'item2',    'item3', true];
 /*   (1)    (2)   (3)

1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas

Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas
*/

let burritos = ['large',4,true];
console.log(burritos); 
console.log( typeof burritos);

let firstN = Mark
let lastN = Badger
let house = 9703
let street = Bellflower 
let city = Zionsville
let state = IN
let zipcode = 46077

console.log(firstN, lastN, house, street, city, state, zipcode)

let sent = 'This sentence will be split into individual parts ';

/*
Addition vs. Concatenation
**************************
When JS sees combining two or more numbers, it adds the values together using the built-in math functionality;
 when it sees adding together one or more strings, it changes and the plus sign becomes an assignment operator-
 -it smashes the values together without trying to synthesize the values
*/
  
let third = 1050 + '100';
console.log(third); // 1050100
console.log(typeof third); // string
/*
With the plus operator, if 1 string and 1 number are given to the plus sign, it returns a string
*/
/* 
Challenge: 
Set 7 (or 8) variables:
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode
Set each variable to its respective type.
console.log your whole address (with the space between variable).
*/
let firstName = 'Autumn';
let lastName = 'Henderson';
let houseNumber = 12175;
let street = 'Visionary Way';
let city = 'Fishers';
let state = 'IN';
let zipcode = 46038;
console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode); // Autumn Henderson, 12175 Visionary Way, Fishers, IN 46038
/*
Strings - Properties
********************
Properties are qualities associated with a datatype. 
Strings have properties, or the qualities associated with that string.
The length of a string is a property.  
 */ 
let myName = "Autumn";
console.log(myName.length);
/*Methods
************
Methods are like tool that can help us manipulate our data. 
.Property and .Methods() *no parenthesis for properties*
*/
let myNameIs = "Autumn";
console.log(myNameIs.toUpperCase()); // method that changes a string to uppercase. 
let home = 'My home is indianapolis'; 
console.log(home.includes('indianapolis')); // method that checks if a certain string is included in another string
// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string
let sent = 'This sentence will be split into individual parts ';
