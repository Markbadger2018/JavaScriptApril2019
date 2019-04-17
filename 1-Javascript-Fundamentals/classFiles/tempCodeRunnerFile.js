function func1(input){
    return input(Math.floor(Math.random()*10));
}

function func2(num){
    return num + ':i am a number';
}

console.log(func1(func2));