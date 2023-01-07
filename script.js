// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var numberOfCharacters = 0;         // This varaiable will store the number of characters the user has defined
var passwordOptions = [];           // This array will store the options chosen by the user [password length, specialCharters? , numericCharacters? , lowerCasedCharacters? , upperCasedCharacters?]

// Function to prompt user for password options
function getPasswordOptions() {
  // Ask the user to confirm what character types he wwants
  var selectSpecialCharacters = confirm("Click OK to confirm you want to include special characters");
  var selectNumericCharacters = confirm("Click OK to confirm you want to include numeric characters");
  var selectLowerCasedCharacters = confirm("Click OK to confirm you want to include lower cased characters");
  var selectUpperCasedCharacters = confirm("Click OK to confirm you want to include upper cased characters");

  // Alert if password criteria not met for the character types when the user doesnt chose any types
  if (selectSpecialCharacters === false && selectNumericCharacters === false && selectLowerCasedCharacters === false && selectUpperCasedCharacters === false) {
    alert("You must select at least one character type!");
    return false;
  }

  // The characters types preferences are added to the array containing the options chosen by the user
  passwordOptions.push(selectSpecialCharacters, selectNumericCharacters, selectLowerCasedCharacters, selectUpperCasedCharacters);
  return passwordOptions;
}

// Function for getting random password from elements of an array containing all the characters selected by the user
function getRandom(arr) {
  //We only add to the array, the type of characters selected by the user
  if (arr[1] === true) {
    listOfCharactersSelected = listOfCharactersSelected.concat(specialCharacters);
  }
  if (arr[2] === true) {
    // We add the numeric characters twice to the array to have a better chance to get a number in the password as there are only 10 numeric characters
    listOfCharactersSelected = listOfCharactersSelected.concat(numericCharacters);
    listOfCharactersSelected = listOfCharactersSelected.concat(numericCharacters);
  }
  if (arr[3] === true) {
    listOfCharactersSelected = listOfCharactersSelected.concat(lowerCasedCharacters);
  }
  if (arr[4] === true) {
    listOfCharactersSelected = listOfCharactersSelected.concat(upperCasedCharacters);
  }
  
  //Loop creating a random password by adding as many characters as chosen by the user
  for (i = 1; i <= arr[0]; i++) {
    randomPassword = randomPassword + listOfCharactersSelected[Math.floor(Math.random() * listOfCharactersSelected.length)];
  }
  return randomPassword;  
}

// Function to generate password with user input
function generatePassword() {

  // Prompt the user to enter a password length
  numberOfCharacters = prompt("How many characters would you like your password to contain?");

  // Alert if password criteria not met for the length
  if (numberOfCharacters < 10) {
    alert("The password length must be at least 10 characters!")
  } else if (numberOfCharacters > 64) {
    alert("The password length must be less than 65 characters!")
  } else {
    // If the password length follows the criteria between 10 and 64, it is pushed in the array containing the options chosen by the user
    passwordOptions.push(numberOfCharacters);
    // We execute the function getPasswordOptions() to get the types of characters chosen by the user
    passwordOptions = getPasswordOptions();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);