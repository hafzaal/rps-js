play();


function play()
{
    for (let turnNumber = 0 ; turnNumber < 5; turnNumber++) 
    {
        let playerTurn = getUserTurn();
        let cpuTurn = getCpuTurn();
        let winner = turnOutcome(playerTurn, cpuTurn);

        console.log(`You picked ${playerTurn}, CPU picked ${cpuTurn}\n`)

        if (winner == "Draw")
        {
            console.log("Its a draw! Better luck next time!");
        } else
        {
            console.log(`${winner} wins!!`);
        }
        
    } 
}

function getUserTurn()
{
    let userInput = prompt("Rock, Paper or Scissors?");
    userInput = convertLowerCase(userInput);

    return convertFirstLetterToUpperCase(userInput);
}

function getCpuTurn()
{
    const turnOptions = ["rock", "paper", "scissors"]
    let randomChoice = Math.floor(Math.random() * 3);

    let cpuTurn = turnOptions[randomChoice];
    
    return convertFirstLetterToUpperCase(cpuTurn);
}

function turnOutcome(playerTurn, cpuTurn) 
{
    if (playerTurn == cpuTurn)
    {
        return "Draw";
    }

    if ((playerTurn == "Rock" && cpuTurn == "Scissors") ||
        (playerTurn == "Paper" && cpuTurn == "Rock")    ||
        (playerTurn == "Scissors" && cpuTurn == "Paper"))
    {
        return "Player";
    }

    return "Cpu";


}

function convertLowerCase(str)
{
    return str.toLowerCase();
}

function convertFirstLetterToUpperCase(str) 
{
    return str.charAt(0).toUpperCase() + str.slice(1);
}