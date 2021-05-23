///////////////////////////////////////////////////////////////
//
// ** create a webpage which generates a password for a user **
//
//   input drop down "how many characters in this password? 8-128"
//    after at least 1 character type has been selected display "click 'generate' now"

function myFunction() {
  let pwLength = prompt("How many characters long?", "(8-128)");
  if (pwLength >= 8) {
    document.getElementById("demo").innerHTML =
      "Password will be " + pwLength + " characters long";
    window.pwLength = pwLength;
  } else alert("use at least 8 characters");
  return pwLength;
}

//   use a display box with 4 options (uppercase, lowercase, numbers, special chars)
//   show "choose which character types to include in this password"
//    wait for user input
document.getElementById('submit').onclick = function () {
  var select = document.getElementById('types');
  var selected = [...select.selectedOptions]
    .map(option => option.value);
  alert("you've chosen " + selected);
  var whichTypes = [selected];
  console.log(whichTypes);

// determines the number of types of selected
  function pwTypeLength() {
    var selectedAmount = parseInt(selected);
  }
  // divides the number of characters chosen by the number of desired character types 
  pwTypeLength = (pwLength / selected.length);
  console.log(pwTypeLength);

  //the random number generator
  function generateRandomNumber(length) {
  window.numbRand = Math.random().toString().substr(2, pwTypeLength);
  console.log(numbRand);
  }

  //uppercase generator
  function generateUpperCaseString(length) {
    let result = '';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = upperCase.length;
    for (let i = 0; i < length; i++) {
      result += upperCase.charAt(Math.floor(Math.random() * charactersLength));
    }
    window.resultUpper = result;
    console.log(resultUpper);
  }

  //lowercase generator
  function generateLwrCaseString(length) {
    let result = '';
    const lwrCase = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = lwrCase.length;
    for (let i = 0; i < length; i++) {
      result += lwrCase.charAt(Math.floor(Math.random() * charactersLength));
    }
    window.resultLower = result;
    console.log(resultLower);
  }

  //special character generator
  function generateSpclCaseString(length) {
    let result = '';
    const spclCase = "@%+\/'!#$^?:.(){}[]~-_.";
    const charactersLength = spclCase.length;
    for (let i = 0; i < length; i++) {
      result += spclCase.charAt(Math.floor(Math.random() * charactersLength));
    }
    window.resultSpcl = result;
    console.log(resultSpcl);
  }

// calling functions
(generateUpperCaseString(pwTypeLength) + generateLwrCaseString(pwTypeLength) + generateRandomNumber(pwTypeLength) + generateSpclCaseString(pwTypeLength));

// gathering all the strings
  window.pwString = [];
  window.trimmedString = '';
  window.string = '';
 if (selected.includes("Uppercase")) pwString.push(resultUpper);
 if (selected.includes("Lowercase")) pwString.push(resultLower);
 if (selected.includes("Numbers")) pwString.push(numbRand);
 if (selected.includes("Special Characters")) pwString.push(resultSpcl);
console.log(pwString);

//joining the strings together
pwString = pwString.join('');
console.log(pwString);

//trimming the string to the selected length
trimmedString = pwString.substring(0, pwLength);
console.log(trimmedString);

//trimming the string to fit
const el = document.createElement('textarea');
el.value = trimmedString;	
document.body.appendChild(el);
el.select();
document.execCommand('copy');
document.body.removeChild(el);


// Assignment Code - writes the generate button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//   wait for button click
//   once button is clicked 
// Write password to the #password input
function writePassword() { 
  document.getElementById('password').innerHTML = trimmedString;
  }
  document.getElementById('clip').innerText = "(Copies to clipboard)";
}

