/*
Challenge (Arrays):
Color List:

Create a function that can take in arrays.
Create an array of colors
Create an array of suffixes for placement (i.e. st (for 1st), nd (for 2nd), rd (for 3rd), etc)

In the function, filter through both arrays and print out the placement and the color for each individual colors (i.e. 1st is green, 2nd is blue, 3rd is red, 4th is orange, etc) until all of the colors are listed out with the appropriate placement.

Not to make it too hard on yourself, you can stop the count at ten
Tools: 
function that has two parameters
two arrays, one with colors, one with suffixes
some kind of for loop
should give back 1st is green or whatever color in console log. 
tells me i can stop at 10
*/

let colors = ['red', 'orange', 'coral', 'yellow', 'green', 'teal', 'blue', 'indigo', 'violet', 'black'];
let suf = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'];

function colorNums(color, sufx){
    for(let x=0; x<10;x++){
        console.log(color[x]);
        console.log(sufx[x]);
    }
}
colorNums(colors, suf);


let colors = ['red', 'orange', 'coral', 'yellow', 'green', 'teal', 'blue', 'indigo', 'violet', 'black'];
let suf = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'];

function colorNums(color, sufx){
    for(let x=0; x<10;x++){
        console.log(`${x+1}${sufx[x]} is ${color[x]}`);
        
    }
}
colorNums(colors, suf);



/*
Challenge (Strings):
Pig Latin:

Create a function that takes in strings
In the function, translate a phrase into pig latin and print both the original and pig latin version to the console.

If able to do so, return the value into another variable and print that variable

What is Pig Latin?
    * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
    * If the word begins with a vowel, simply add an 'ay' at the end of the word
*/

function piggie(str) {
    switch (str[0]) {
        case 'a':
            console.log(`${str}ay`);
            break;
        case 'e':
            console.log(`${str}ay`);
            break;
        case 'i':
            console.log(`${str}ay`);
            break;
        case 'o':
            console.log(`${str}ay`);
            break;
        case 'u':
            console.log(`${str}ay`);
            break;
        default:
        let newArr = str.split('');
        console.log(`${newArr.splice(1).join('')}${str[0]}ay`);
            break;
    }
}
piggie('ey');

function translatePigLatin(str) {
    let vowel = "aeiou"; //variable that stores vowels as a string
    let match = -1; //will check whether a match to a vowel has been found
    let index = -1; //checks the index of the vowel that has been found
    
    for (let x = 0; x < str.length && match < 0; x++) { //for loop that will check our string to find the index of the first vowel in the word.
        match = vowel.indexOf(str.charAt(x)); //sets the value of the variable match equal to the index of the vowel location (here - for this example - it should be 1. 'a' is the first vowel in our string, so the index is 1)
        if (match >= 0) { //if the variable match's value is greater than or equal to 0...
            index = x; //set the value of the index variable to x (again, in this example, it should be 1)
        }
    }

    if (index > 0) { //if the variable index is greater than 0...
        str = str.slice(index) + str.substring(0, index) + "ay"; //use the slice method to remove any character before our index's value (which is 1 - so here we should only remove 'c' in california). We then use the substring method to grab any letters between 0 (first letter - 'c') and our index (1) - this should just grab 'c'. We then tack on 'c' + 'ay' to the end of our word
    } else { //else...
        str = str.slice(index) + str.substring(0, index) + "way"; //if the first character of our word is a vowel (our index should be 0, and nothing will be sliced), this will tack on 'way' to the end of the word.
    }
    return str;
}

console.log(translatePigLatin("california"));