
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "~"];
 var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 
var resultArray = [];
var userArray = [];

uppercaseArray [1]

  var numCharacter = prompt ("Ammount of characters (8-120)");
  var numbers = confirm ("Password Contains Numbers?");
  var uppercases = confirm ("Uppercase Letters?");
  var lowercases = confirm ("Lowercase Letters?");
  var characters = confirm ("Special Characters?");

if (numbers){
  resultArray = resultArray.concat(numbArray);
  
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);

}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);

}

if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)


for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }

  return userArray.join("") ;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function copyToClipboard() {
 
}
generateBtn.addEventListener("click", writePassword);
