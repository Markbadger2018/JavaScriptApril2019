let colors = ['red', 'orange', 'coral', 'yellow', 'green', 'teal', 'blue', 'indigo', 'violet', 'black'];
let suf = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'];

function colorNums(color, sufx){
    for(let x=0; x<10;x++){
        console.log(`${x+1}${sufx[x]} is ${color[x]}`);
        
    }
}
colorNums(colors, suf);