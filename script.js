
 function getComputerChoice () {          
 
    // Generate a random number between 0 and 3   (3 is not included concept)
  const randomNumber =  Math.floor(Math.random() * 3) ;
 
   // Use the random number to generate computer choice 
   switch (randomNumber) {
     case 0 :
        return "Rock";
     case 1 : 
        return "Paper";
     case 2 : 
        return " Scissor";
  }}

 console.log ( getComputerChoice() )