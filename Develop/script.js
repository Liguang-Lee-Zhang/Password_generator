// Assignment Code
let generateBtn = document.querySelector("#generate");

// user click, leads to 5 prompt for password criteria, entries stored

generateBtn.addEventListener("click", start_generator);

let user_input = [false, false, false, false];
let proceed =  user_input[0] || user_input[1] || user_input[2] || user_input[3];
let password_length;

console.log(user_input);
function start_generator(){
  while (proceed==false) {
    criteria_gathering();
    function criteria_gathering(){
      password_length = window.prompt("What is your desired password length?", "Less than 8 or between 8 to 128 characters");

      if(((password_length=="between 8 to 128 characters")||(password_length=="Less than 8"))==false){
        window.alert("Please enter valid password length! Entry is case-sensitive.");
        return;
      }

      user_input[0] = window.prompt("Do you wish to include lowercase characters?", "Y for yes or N for no");
      user_input[1] = window.prompt("Do you wish to include uppercase characters?", "Y for yes or N for no");
      user_input[2] = window.prompt("Do you wish to include numbers?", "Y for yes or N for no");
      user_input[3] = window.prompt("Do you wish to include special characters such as -'?,.?", "Y for yes or N for no");

      console.log(user_input);
      for (i=0; i<user_input.length; i++){
        if (user_input[i]== "Y") {
          user_input[i]==true;
        } else {
          user_input[i]==false;
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

}



/*
if (proceed==Y) {
  console.log("proceed works");
  generatePassword();
 
}

*/

// functino to generate password
let password="";
function generatePassword(){

  //the characters to generate the password from
  let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password_length=0;
  //random number generator to generate a number between 8 to 128 
  while (password_length<8){
    password_length = Math.floor(Math.random())* 128;
  }
  

  //random letter/number generator to generate each letter/number of the password
  for(i=0; i<password_length.length; i++){
    let random_index = Math.floor(Math.random())*chars.length;
    password += chars.substring(random_index, random_index+1);
    console.log(password);
  }
  console.log(password);
  writePassword();

  //while loop to check that the password satisfies user selected criteria


}


// Write password to the #password input
function writePassword() {
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}