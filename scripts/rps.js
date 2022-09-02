play();


function play()
{
    let myTurn = "Rock";
    let cpuTurn = "Scissors";

    console.log(turnOutcome(myTurn, cpuTurn));
}

function getUserTurn()
{
    let userInput = prompt("Rock, Paper or Scissors?");
    convertLowerCase(userInput);

    return convertFirstLetterToUpperCase(userInput);
}

function getCpuTurn()
{
    const turnOptions = ["rock", "paper", "scissors"]
    let randomChoice = Math.random() * 3;

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