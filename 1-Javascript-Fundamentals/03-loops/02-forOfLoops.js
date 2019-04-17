// FOR OF LOOPS



let student = {
    name: "Mark",
    awesome: true,
    degree: "JavaScript",
    week: 1
};

for (item of student) {
    console.log(item);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (let cat of catArray) {
    console.log(cat, 'says meow');
}