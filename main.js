// Task1

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
    let newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
    newText[i] = newText[i][0].toUpperCase() + newText[i].slice(1);
    }
    return newText.join(" ");
} 
//  gpt mehsulu

function addenText (text){
    return text + "!";
} 

// Task2

function modifyText(num, callback) {
  return callback(num);
}

function multiplyTwo(num){ 
    return num*2
}

function divideTwo(num){ 
    return num/2
}

function kvadratKok(num){
   if (num > 0) {
       return num ** 0.5
   }
   else {
    return "adam kimi eded ver"
   }
}

function makeNegative(num) {
    return num > 0 ? -num : num;
}

// Task3

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

function makeNegetive(num) {
    if (num > 0) {
        return num * -1
    }
    else {
        return num
    }
}

function divideBythree(num){
    if (num % 3 === 0)
    {
        return 0;
    }
    else{
        return num % 3;
    } 
}

// Task4

function findInArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i];
        }
    }
    return "Nothing found";
}

function firstEven(num) {
    return num % 2 === 0;
}

function firstBiggerthan10(num){
    return num > 10;
}
 
function firstStartwithA(text){
    if (text[0] === 'A' || text[0] === 'a') {
        return text;  
      }
      else {
          return null;
      }
}

// Task5

function processUserData(user, callback) {
    return callback(user);
}

function fullName(user) {
    return firstName + " " + lastName;
}

function ageTest(user){
    if (user.age>=18){
        return true
    }
    else {
        return false
    }
}

 function hideEmail(user){
    let emailParts = user.email.split("@");
    return "*****"+"@"+emailParts[1];
 }

let user = {
    firstName: "Elovset",
    lastName: "Rafiqov",
    age: 20,
    email: "elik@gmail.com"
};

console.log(processUserData(user,hideEmail));