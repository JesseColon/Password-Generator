// Assignment Code
var generateBtn = document.querySelector("#generate");
  
// functions here create random charecters for password

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


generateBtn.addEventListener("click", writePassword)

function generatePassword (){
 
//  creating popup prompts for user input

  var lengthEl=prompt("how long would you like the password to be (enter a number between 8 and 128)","" );
 
  if (lengthEl < 8) {alert("pasword length must be at least 8 characters");
return null
}
  if (lengthEl > 128) {alert("password length must be at most 128 characters");
return null
}

if (isNaN(lengthEl)){alert("plz only enter a number between 8 and 128");
return null
}
 


 var lowerEl=confirm("would you like to include lowercase letters");
 
  var upperEl=confirm("would you like to include uppercase letters");	

  var symbolEl=confirm("would you like to include symbols");

  var numberEl=confirm("would you like to include numbers");

  if (lowerEl === false && upperEl === false && symbolEl === false && numberEl === false){
    alert("must at least choose 1 character set");
    return null;
  }
  var passwordResult = "";
  if(lowerEl){
    for(var i = 0 ;i < lengthEl; i++){
        passwordResult = passwordResult + getRandomLower();
    
  }
  if (upperEl){
    passwordResult = passwordResult + getRandomUpper();
  }

  if (symbolEl){
    passwordResult = passwordResult + getRandomSymbol();
  }

  if (numberEl){
    passwordResult = passwordResult + getRandomNumber();
  }
}
  return passwordResult;


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  
 
  passwordText.value = password;

   
}
