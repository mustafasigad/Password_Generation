// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// This is ran as soon the user click on the Generate Password button 
generateBtn .addEventListener("click", function() {
 
   pwrdlenght()
   numberChar()
   upperchart()
   lowercharact()
   specialCharact() 
   writePassword()
 }
);
   //--------------------------------------------------------------------------
  var userChoice; // Declare userChoice as a global variable
  // Ask user what lenght password and save the 
  var pwrdlenght = function() 
   {
      userChoice = window.prompt("choose Password lenght between 8-128 ");
  // stop user from inputing that is less than 8   
  if (userChoice <8 || userChoice > 128) {
     window.alert("try again");
     pwrdlenght()
  }
    }

//---------------------------------------------------------------------------
var special
// Do you need special characters
var specialCharact = function(){
    special = window.confirm("Include speacial character in your Password");
    
}
var numbers
// Do you need numbers
var numberChar = function(){
    numbers = window.confirm("Include numbers in your Password"); 
}
var upperLetter
// Do you need Upper case
var upperchart= function(){
    upperLetter = window.confirm("Include upper case in your Password");
 }
 
// Do you need Lower case
var lowerLetter
 var lowercharact= function(){
     lowerLetter = window.confirm("Include lower case in your Password");
  }
  
var letters = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q', 'r','s','t','u','v','w','x','y','z'];
var specialCharacters = ['!', '@', '#', '$','%','^','&','~','"','>'];
var NumberCharacter=['0','1','2','3','4','5','6','7','8','9'];


// Empty Array declared ----------------------------------------------------
var letterArrayRandom=[];
var SpecialArrayRandom=[];
var special_Array=[];
var numberArrayRandom=[];
var numberArray=[];
var finalPassword

var generatePassword = function() {
 var specialArray=[];
if (special==true && numbers==true,lowerLetter==true,upperLetter==true){
  //--------------------------------------------------------Usre chose everything to be true
   // Array of letters from a to z
           for (var i = 0; i < letters.length; i++)
      {
         //Generate a random index from 0 to 25
          var randomIndex = Math.floor(Math.random() * letters.length);
// Get the letter at the random index
    specialArray.push(letters[randomIndex]);
    }
// This is setting up the password lenght to be 
          for (var j=0 ; j < userChoice; j++)
   {
    letterArrayRandom.push(specialArray[j]);
         }
// This Making sure that we have at least 2 uppercase letter in the Password 
         letterArrayRandom[0]=letterArrayRandom[0].toUpperCase()
         letterArrayRandom[1]=letterArrayRandom[1].toUpperCase()
             
//--------------------------------------------------------Usre chose everything to be true
// Array of letters from a to z
                 for (var i = 0; i < NumberCharacter.length; i++)
            {
//Generate a random index from 0 to the lenght of the number array
                var randomIndex = Math.floor(Math.random() * NumberCharacter.length);
// Get the letter at the random index
          numberArray.push(NumberCharacter[randomIndex]);
       

          }
// This is setting up the password lenght to include at 2 Numbers 
                for (var j=0 ; j < 2; j++)
         {
          numberArrayRandom.push(numberArray[j]);
             }
         
//--------------------------------------------------------
// Array of letters from a to z
                       for (var i = 0; i < specialCharacters.length; i++)
                  {
//Generate a random index from 0 to the numebr speacial characters in the array above
                      var randomIndex = Math.floor(Math.random() * specialCharacters.length);
// Get the letter at the random index
                special_Array.push(specialCharacters[randomIndex]);
                }
 // This is setting up the password lenght to be 
                      for (var j=0 ; j < 2; j++)
               {
                SpecialArrayRandom.push(special_Array[j]);
                   }
              
                  }
                  
               else{
                  window.alert(" Genarate the Passward Again")
               }  
// adding the special character and numbers to the newly build array
          letterArrayRandom.unshift(SpecialArrayRandom[1]);
          letterArrayRandom.unshift(SpecialArrayRandom[0]);
          letterArrayRandom.unshift(numberArrayRandom[1]) ;
          letterArrayRandom.unshift(numberArrayRandom[0]) ;
         
// removing the extra character to match user specified lenght 

       letterArrayRandom=letterArrayRandom.slice(0,userChoice)
       
  // function to shuffle the build up password

          function shuffle(array) {
            return array.sort(() => Math.random() - 0.5);
          }
           finalPassword = shuffle(letterArrayRandom).join("");
         

            return finalPassword;
  
         }




        
   
           
         