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

// Write password to the #password input
function writePassword(lowerEl, upperEl, numberEl, symbolEl, lengthEl) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  var lowerEl=prompt("Please enter Y or N","")
  var upperEl=prompt("Please enter Y or N","")	
  var symbolEl=prompt("Please enter Y or N","")
  var numberEl=prompt("Please enter Y or N","")
  
  if (lowerEl!=null && lowerEl!="Y")	
  {}

  {					if (upperEl != null && upperEl != "Y")	

  {	passwordText.write("lower " + lowerEl + "Upper "+ upperEl);
}
  passwordText.value = password;

   

}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

