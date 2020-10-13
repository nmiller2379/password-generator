// I WANT to randomly generate a password that meets certain criteria

// prompted for password criteria
// var passwordLink prompts for length
// var lowercase = confirm lowercase
// var uppercase = confirm uppercase
//

// prompt for password length
var userLength = prompt(
  "Select a password thength between 8 and 128 characters."
);
console.log(userLength);

//confirm lowercase/uppercase/numerals/special characters
var lowercase = confirm("Use lowercase letters?");
var uppercase = confirm("Use UPPERCASE letters?");
var numerals = confirm("Use numerals?");
var specialCharacters = confirm("Use special characters?");
console.log(lowercase);
console.log(uppercase);
console.log(numerals);
console.log(specialCharacters);

// declare function for use later in reprompting password length
function lengthReprompt() {
  var userLength = prompt(
    "Select a password thength between 8 and 128 characters."
  );
}

// declare function for use later in reprompting
function valueReprompt() {
  var lowercase = confirm("Use lowercase letters?");
  var uppercase = confirm("Use UPPERCASE letters?");
  var numerals = confirm("Use numerals?");
  var specialCharacters = confirm("Use special characters?");
}

var character = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  ",",
  "]",
  ",",
  ",",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
console.log(character);

var capLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
console.log(capLetters);

var smallLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
console.log(smallLetters);

//convert passwordLength string to an integer
var passwordLength = parseInt(userLength);
console.log(passwordLength);

// validate user imput ensure at least one character type is selected.
// if any of the criteria is true continue
//else if all of the character criteria is false ask the user again (reprompt)
if (passwordLength < 8) {
  alert("Not enough characters.");
  lengthReprompt();
} else if (passwordLength > 128) {
  alert("Too many charaters.");
} else if ((passwordLength = false)) {
  alert("Please select a password length.");
} else (
  uppercase == false &&
  lowercase == false &&
  numerals == false &&
  specialCharacters == false
) 
  alert("Your password must contain at least one criteria");
  valueReprompt();

// User selects which criteria to include in the password

//prompt for the length of the password

// length of at least 8 characters and no more than 128 characters

//prompt for character types to include in the password

// character types include lowercase, uppercase, numeric, and/or special characters

// validate user imput ensure at least one character type is selected.
// if any of the criteria is true continue
//else if all of the character criteria is false ask the user again (reprompt)

// Password generated
//function to choose a lowercase letter it's equal to a math.random (like rps game)
// number of characters from each array determined by length var divided by 4.

// think through if else combinations

//

// store password in variable

// Display password in an alert as a string.

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
