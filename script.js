function getComputerChoice () {          
 
   // Generate a random number between 0 and 3   (3 is not included concept)
 const randomNumber =  Math.floor(Math.random() * 3) ;

  // Use the random number to generate computer choice 
  switch (randomNumber) {
    case 0 :
       return "rock";
    case 1 : 
       return "paper";
    case 2 : 
       return "scissor";
 }}

//console.log ( getComputerChoice() )


// Creating the 2nd playround function where a game takes place

 function  playRound (playerSelection, computerSelection) 
      {  // converts both selections to lower case for Case Insensitive Comparison 
            playerSelection =playerSelection.toLowerCase() ;
            computerSelection = computerSelection.toLowerCase() ;            
           
           //CHECK FOR A TIE
          if ( playerSelection === computerSelection ) {   return " Its a Tie"      }
           
           // CHECK FOR PLAYER WIN CONDITIONS
            else if (   (playerSelection==="rock" && computerSelection==="scissor")    ||  
                       (playerSelection==="paper" && computerSelection==="rock")      ||
                       (playerSelection==="scissor" && computerSelection==="paper")      )  
                     { return  `You Win !!! ${playerSelection} BEATS ${computerSelection}`}

          // CHECK FOR COMPUTER WIN
            else {    return ` You Lose :( !!  ${computerSelection} beats ${playerSelection} `} }                                         


       

          // Creating a  five round game function

       function game ( )  {     
             let playerScore = 0 ;
             let computerScore = 0 ;

           for ( let round=1 ; round <=5 ; round ++) 
               {   const playerSelection = prompt( "Enter your choice (Rock, Paper, or Scissor)" );
                   const computerSelection = getComputerChoice() ; 
                   const result = playRound(playerSelection ,computerSelection) 
                   
                   console.log(`Round ${round}: ${result}`); 
               
               if ( result.startsWith(`You Win`)) {   playerScore++ ;}
               else if ( result.includes(`You Lose`)) { computerScore++;}   } 


       console.log(`\nFinal Score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`)
 

       if (playerScore > computerScore) {
           console.log("You won the game! Congratulations!")}
            else if (playerScore < computerScore) {
           console.log("You lost the game! Better luck next time!")} 
           else {
           console.log("It's a tie! The game ended in a draw.")} }


       game();