let newArr = ['Brie', 17, true, {ketup: true, pickles: false, meat: true}];
//arrays have numbered elements. the numbers are index-es and the values are the elements


console.log(newArr[3]);
// newArr[3].pickles = true;
console.log(newArr[3]);
newArr[3] = 'Zack is one bad dude with styling';
console.log(newArr[3]);



//conditionals

let isRainy = true;
let isWarm = true;

if (isRainy == true){
console.log('bring your umbrella');
} else {
    console.log('leave the umbrella at home');
}

if (isWarm){
    console.log('wear shorts');
} else {
    console.log('wear a parka');
}

let gpas = [1.9, 3.5, 4.0, 2.8]
let singleGpa = gpas[1]; //3.5

if (singleGpa === 4.0){
    console.log('wow!  that is amazing!');
  } else {
    console.log('...eh, you might wanna hit the books');
  }


/*  Challenge 1:
Write an array with at least 5 different numbers stored as values in the array.  Use if-elseif statements to change one value of the array based upon the index number passed to the conditional.  Use the =, +=, /=, %=, and **= operators to make the change of the array value (only use one operator per conditional statement).*/

let chall = [1, 2, 3, 4, 5];
let zero = 6;

if (chall [1]<= zero) {
    chall [1] **=5;
}
console.log(chall);

let Oreo = [1, 2, 3, 4, 5];
let indexNum = 2

if (indexNum == 0) {
  Oreo [0] **= 5;
}  if (indexNum == 1) {
  Oreo [1] **= 5;
}  if (indexNum == 02) {
  Oreo [2] **= 5;
}  if (indexNum == 3) {
  Oreo [3] **= 5;
}  if (indexNum == 4) {
  Oreo [4] **= 5;
}
console.log(Oreo);



/*Challenge 2:
Write an object that stores information about your favorite movie.  nameOfMovie, runTime, characters, and genre should be keys directly inside the object.  Inside of characters should be no more than 2 character  objects, each of which stores name, age, and items.  Inside of items should be no more than 2 item objects, each of which stores name and color.

Use console.log statements to show that you can print out the nameOfMovie, the characters, the age of a character, and colors for the objects the characters have.
*/

let movie = {nameOfMovie: 'Star Wars Episode VIII: The Last Jedi',
 runTime: '2h 33m',
  characters: {
      protagonist: {
          name : 'Rey',
          age: 19
        
        },
      antagonist: {
          name: 'Kylo Ren',
          age: 29
        }
    },
genre: 'Science-Fiction and Fantacy'}

console.log(movie.characters.protagonist.age);

let lotrObj = {
    nameOfMovie: 'Lord of the Rings: The Fellowship of the Ring',
    runTime: 'long',
    characters: {
        charOne: {
            name: 'Legolas',
            age: 2931,
        },
        charTwo: {
            name: 'Gandalf',
            age: 2019,
        }
    },
    genre: 'Action & Adventure'
}

/*
Challenge 3:
Try to predict the behavior of each variable separatey (first, second, and third).
//1st example:
console.log(first);
console.log(second);
console.log(third);
var first = 1;
let second = 2;
const third = 3;

//2nd example:
hoistTest();
var first = 5;
function hoistTest() {
  console.log(first);
}

//3rd example:
function hoistTest(){
  console.log(first, second, third);
  if (true){
    var first = 1;
    let second = 2;
    const third = 3;
  }
  console.log(first, second, third);
}
hoistTest();
*/

console.log(first);
console.log(second);
console.log(third);
var first = 1;
let second = 2;
const third = 3;

//1 2 3