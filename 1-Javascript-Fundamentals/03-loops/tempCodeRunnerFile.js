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