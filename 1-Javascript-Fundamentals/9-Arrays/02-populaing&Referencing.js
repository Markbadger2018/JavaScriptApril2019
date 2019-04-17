
/*
Arrays
************
Arrays are containers that hold lists of items
 
let list =  [  'item1',   'item2',    'item3'];
     (1)    (2)   (3)
 
1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas
 
Denoted by []
Has values ('blue', 'green', 'yellow'), separated with commas
 
console.log(typeof list);
 
Why is that?  The definition of an object is a container that can hold multiple datatypes.  Arrays fit under that category.
 
What is an array?
  Has [] brackets
  Can hold multiple datatypes
  Great for listing 
*/
 
let list =  [  'item1',   'item2',    'item3'];
console.log(typeof list);
 
let list2 = ['orange', 'banana', 'oreos']; 
 
console.log(list2[1]);
 
let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Amira']];
console.log(typeof students);
console.log(students instanceof Array);
console.log(students[2]);
console.log(students[6][1]);
 
 
let students = ['Tony', 'Marshall', 'Rhys', 
'Ray', 23, true, ['Ryan', 'Iesha',['Randy','Trevor'], 'Amira']];
console.log(typeof students);
console.log(students instanceof Array);
console.log(students[2]);
console.log(students[6][1]);
 
 
 
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
 
for( let item in food){
    console.log(food[item])
}
 
 
 
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
 
food.forEach(f => {
    console.log(f);
})
  
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
 
food.forEach((food,number, arr) => {
    console.log(number);
    console.log(food);
    console.log(arr)
})
 
let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors);
console.log(colors.toString());
let newColors = colors.toString();
console.log(newColors[2]);

let movies = ['Phantom Menance*','Attack of the Clones','Revenge of the Sith','Solo','Rogue One','A New Hope','The Empire Strikes Back','Return of the Jedi'];

movies.push('Force Awakens');
movies.splice(3,1,'Obi Wan');

movies.forEach(f => { console.log(f); });

 