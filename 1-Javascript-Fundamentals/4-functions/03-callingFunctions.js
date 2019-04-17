/**************************
CALLING FUNCTIONS
*************************
function hi() {
  console.log('HI');
}

hi();
(1);

1- This is how we call, or 'invoke' our function


*/

function hi() {
    console.log('Hi!')
}



function caller() {
    let arr = ['This', 'is', 'really', 'cool']
    
    for( let x of arr) {
        console.log(x);
    }
}
 

/**************************
PARAMETERS
***********************

function hi(name){
            (1)
  console.log(`Hi ${name}`)
                    (2)
}

hi('Autumn');
      (3)

1- The parameter(s) we need to take into the function
2- Using string interpolation, we can refer to the parameter we passed
3- This is where we define what the parameter's value will be
*/

function pet(animal){
    console.log(`I have ${animal} for a pet`);
}

pet('dog');

function name1(first , last){
    let fullName = `${first} ${last}`;
    console.log(`Hello, my name in ${fullName}`);
}

name1('Mark' , 'Badger');


function myName(fName , lName ){
    let fullName = `${fName} ${lName}`;
    console.log(`Hello, my name is ${fullName}`);
}

myName('Erin');
myName('Zach', 'Maynard');

/**************************
FAT ARROW FUNCTIONS
*********************
let hi = ()   => {
      (1)     (2)
  console.log('hi')
};

1- We need to set the fat arrow function to a variable
2- We use the 'fat arrow' to signify its a function


Consice
*********************
let hi = () => console.log('hi');

Block Body
*********************
let hi = () => {
  console.log('hi')
}*/

let apples = x => console.log(`There are ${x} apples`)
apples(10);

let apple = (x) => {console.log(`There are ${x} apples.`)}//block will not have implied return if more than one line
apple(10)

/**************************
RETURN
***************

let hi = () => {
  return 'hi';
    (1)
};

let newName = hi();
      (2)      (3)

console.log(newName)

1- The keyword that brings our data out of our function
2- We need a new variable to hold the value of the return
3- When called, the function becomes the value of the return



***********/

function captializeName(name) {
    let capName = '';
    for (let l in name){
      if (l == 0){
        capName += name[l].toUpperCase();
      } else {
        capName += name[l].toLowerCase();
      }
    }
 
    return capName
  }

const myNameIs =  captializeName('Autumn');

console.log(`${myNameIs} how are you doing?`);