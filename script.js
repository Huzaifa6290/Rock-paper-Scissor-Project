
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
           if ( playerSelection === computerSelection ) {   return " Its a Tie :( "      }
            
            // CHECK FOR PLAYER WIN CONDITIONS
             else if (   (playerSelection==="rock" && computerSelection==="scissor")    ||  
                        (playerSelection==="paper" && computerSelection==="rock")      ||
                        (playerSelection==="scissor" && computerSelection==="paper")      )  
                      { return  `You win !!! ${playerSelection} BEATS ${computerSelection}`}

           // CHECK FOR COMPUTER WIN
             else {    return ` YOU LOSE :( !!  ${computerSelection} beats ${playerSelection} `} }                                         
 

            const playerSelection = "rock";
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);
            console.log(result);