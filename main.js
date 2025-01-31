Task1

function modifyText(text, callback) {
 return callback(text);
}

function toLowercase(text) {
 return text.toLowerCase();
}

function removeSpaces(text) {
 let newtext = ""; 
 for (let i = 0; i < text.length; i++) {
   if (text[i] !== " ") {
     newtext += text[i];
   }
 }
 return newtext;
}

function capitalizeWords(text) { 
result 
}

function addendext (text){
    return text + "!";
} 


Task2
function modifyText(num, callback) {
  return callback(num);
}

function multiply2(num){ 
    return num*2
}

function divide2(num){ 
    return num/2
}
function kvadratkok(num){
   if (num > 0) {
       return num ** 0.5
   }
   else {
    return "adam kimi eded ver"
   }

}

function module(num){ 
    if (num < 0) {
        return num * -1
    }
    else {
        return num
    }
}

console.log(modifyText(9, kvadratkok)); 

Task3

function transformArray(array, callback)
{

   for (let i = 0; i < array.length; i++) {
       array[i] = callback(array[i]);
   }
   return array;
}

function addOne(num) {
    return num + 1;
}

function makenegetive(num) {
    if (num > 0) {
        return num * -1
    }
    else {
        return num
    }
}
function find3remainder(num){
    let result = [];

 

}






Task4

function findInArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i];
        }
    }
    return "Nothing found";
}

function firsteven(num) {
    return num % 2 === 0;
}

function firstbiggerthan10(num){
    return num > 10;
}
 
function firststartwithA(text){
    if (text[0] === 'A' || text[0] === 'a') {
        return text;  
      }
      else {
          return null;
      }
}
console.log (findInArray([ ferid, kamil,akif, Amil ], firststartwithA));