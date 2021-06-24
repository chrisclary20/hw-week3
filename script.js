// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterRange = document.getElementById("#characterRange")
var characterNumber = document.getElementById("#characterNumber")
var lowercase = document.getElementById("#lower");
var uppercase = document.getElementById('#upper')
var numbers = document.getElementById('#numbers');
var specialChar = document.getElementById('#specialChar');
var password = generatePassword("#password");
var passwordText = document.querySelector("#password");

// syncing the range input with the number input
characterNumber.addEventListener("input", syncCharacterRange);
characterRange.addEventListener("input", syncCharacterRange);

// characterNumber.addEventListener("input", function (e) {
//   characterRange.value = e.target.value;
// });

// characterRange.addEventListener("input", function (e) {
//   characterNumber.value = e.target.value;
// });
// function for syncing range and number input
function syncCharacterRange(e) {
  const value = e.target.value 
  characterRange.value = value
  characterNumber.value = value
}



lowercase = 'abcdefghijklmnopqrstuvwxyz';
uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
numbers = '1234567890'
specialChar = ',.?<>":;[{!@#$%^&*()'
// Write password to the #password input
function writePassword(lowercase, uppercase, numbers, specialChar) {
  if (lowercase && uppercase && numbers && specialChar) {
    return password;
  }

}

// Add event listener to generate button
generate.addEventListener("click", writePassword);
