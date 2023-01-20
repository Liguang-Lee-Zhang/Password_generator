// Assignment Code
let generateBtn = document.querySelector("#generate");

// user click, leads to 5 prompt for password criteria, entries stored

generateBtn.addEventListener("click", start_generator);

let user_input = [false, false, false, false];
let proceed =  user_input[0] || user_input[1] || user_input[2] || user_input[3];
let password_length;
  //the characters to generate the password from
let available = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789", "!@#$%^&*();:"];
let chars="";
console.log(user_input);

function start_generator(){
  while (proceed==false) {
    criteria_gathering();

    function criteria_gathering(){
      password_length = window.prompt("What is your desired password length?", "Enter a number between 8 to 128");

      if((password_length<8)||(password_length>128)){
        window.alert("Please enter valid password length!");
        return;
      }

      user_input[0] = window.prompt("Do you wish to include lowercase characters?", "Y for yes or N for no").toUpperCase;
      user_input[1] = window.prompt("Do you wish to include uppercase characters?", "Y for yes or N for no").toUpperCase;
      user_input[2] = window.prompt("Do you wish to include numbers?", "Y for yes or N for no").toUpperCase;
      user_input[3] = window.prompt("Do you wish to include special characters such as -'?,.?", "Y for yes or N for no").toUpperCase;

      console.log(user_input);
      for (i=0; i<user_input.length; i++){
        if (user_input[i]== "Y") {
          user_input[i]==true;
          chars+= available[i];
        } else if (user_input[i]== "N"){
          user_input[i]==false;
        } else { window.alert("Please make sure you enter only Y or N!");
        return;
        }
      }
      }
      proceed = user_input[0] || user_input[1] || user_input[2] || user_input[3];
      console.log(proceed);
      if (proceed==false) {
        window.alert("Please choose at least one character criteria!");
      }
    
    }
  }
  console.log("proceed works");
  generatePassword();



console.log(chars);
// functino to generate password
let password="";
function generatePassword(){
 
  //random letter/number generator to generate each letter/number of the password
  for(i=0; i<password_length; i++){
    let random_index = Math.floor(Math.random())*chars.length;
    password += chars.substring(random_index, random_index+1);
    console.log(password);
  }
  console.log(password.length);
  writePassword();
}


// Write password to the #password input
function writePassword() {
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}