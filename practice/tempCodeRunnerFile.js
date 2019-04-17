var data = {age : 19, name : 'Luke Skywalker', eyeColor : 'blue', true : 'isJedi'}
var newData = Object.keys(data).reduce(function(obj,key){
   obj[ data[key] ] = key;
   return obj;
},{});
console.log(newData);