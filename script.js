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

function generatePassword (){
  var lenthEl=prompt("how long would you like the password to be (enter a number between 8 and 128)","" )
 
  if (lenthEl < 8) {alert("pasword length must be at least 8 characters")
return null
}
  if (lenthEl > 128) {alert("password length must be at most 128 characters")
return null
}

if (isNaN(lenthEl)){alert("plz only enter a number between 8 and 128")
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

  {	passwordText.write("lower " + lowerEl + "Upper "+ upperEl);
}

const typescount = lower + upper + number + symbol;

  const typesArray = [{upper}, {lower}, {number}, {symbol}].filter
  (
    item => Object.values(item)[0]
  );

  if(typescount === 0) {
    return '';
  }

  for(let i = 0; i < length; i += typescount) {
    typesArray.forEach(type => {
      const funcName = object.key(type)[0];
      // console.log(funcName)

      generatedpassword += randomFunc[funcName]();
    });
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  
 
  passwordText.value = password;

   
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

