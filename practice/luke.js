/*Using only JS, take an object with various properties.
Then create a function that switches the keys and values.
Example:
Input:
originalObject = {
age: 19,
name: 'Luke Skywalker',
eyeColor: 'blue',
isJedi: true
};
Output:
newObject = {
19: 'age',
'Luke Skywalker': 'name',
blue: 'eyeColor',
true: 'isJedi'
}; */


// Input

let object = {
    age: 19,
    name: 'Luke Skywalker',
    eyeColor: 'blue',
    true: 'isJedi'
};
let data = {age : 19, name : 'Luke Skywalker', eyeColor : 'blue', true : 'isJedi'}
let newData = Object.keys(data).reduce(function(obj,key){
   obj[ data[key] ] = key;
   return obj;
},{});
console.log(newData);
// Output



/****************** */
/*
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  function swap(json){
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}

  */