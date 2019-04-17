// FOR IN LOOPS

let student = {
    name: "Mark",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (let item in student) {
    //console.log(item)
    console.log(student[item]) //square bracket notation
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (let cat in catArray) {
    //console.log(cat);
    console.log(catArray[cat])
}

let studentName = 'auTuMn';
let capName;

for (let x in studentName) {
    if (x == 0){
        capName += studentName[x].toUpperCase();
    } else {
        capName += studentName[x].toLowerCase();
    }
}
console.log(capName);