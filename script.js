// Assignment Code
var generateBtn = document.querySelector("#generate");

const randomFunc = {
   lower: getRandomLower,
   upper: getRandomUpper,
   number: getRandomNumber,
   symbol: getRandomSymbol
  };
  
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!?@#$%^&*(){}=<>/,.-+';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// console.log(getRandomLower(), getRandomUpper(), getRandomNumber(), getRandomSymbol());

generateBtn.addEventListener("click", writePassword)

function generatePassword (length, lower, upper, number, symbol){
 
 

  var lengthEl=prompt("how long would you like the password to be (enter a number between 8 and 128)","" )
 
  if (lengthEl < 8) {alert("pasword length must be at least 8 characters")
return null
}
  if (lengthEl > 128) {alert("password length must be at most 128 characters")
return null
}

if (isNaN(lengthEl)){alert("plz only enter a number between 8 and 128")
return null
}
 
 var lowerEl=confirm("would you like to include lowercase letters")
 
  var upperEl=confirm("would you like to include uppercase letters")	

  var symbolEl=confirm("would you like to include symbols")

  var numberEl=confirm("would you like to include numbers")

  if (lowerEl === false && upperEl === false && symbolEl === false && numberEl === false){
    alert("must at least choose 1 character set")
    return null
  }

  {	
    
}

var typescount = lower + upper + number + symbol;

  var typesArray = [{upper}, {lower}, {number}, {symbol}].filter
  (
    item => Object.values(item)[0]
  );

  for(let i = 0; i < length; i += typescount) {
    typesArray.forEach(type => {
      const funcName = object.key(type)[0];

     passwordText += randomFunc[funcName]();
    });
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  
 
  passwordText.value = password;

   
}