let userScore = 0;
let computerScore = 0;
const userScoreDesc = document.getElementById('user-score');
const computerScoreDesc = document.getElementById('computer-score');
const resultP = document.querySelector('.result>p');
const scoreBoard = document.querySelector('.score-board');
const rock = document.querySelector('.right-hand.rock');
const paper = document.querySelector('.right-hand.paper');
const scissor = document.querySelector('.right-hand.scissor');
const objWin={
    paper: 'rock',
    scissor: 'paper',
    rock: 'scissor'
};
const objLose={
    paper: 'scissor',
    scissor: 'rock',
    rock: 'paper'
};


function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissor'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}



function win(userChoice, computerChoice) {
  userScore++;
  userScoreDesc.innerHTML = userScore;
  computerScoreDesc.innerHTML = computerScore;
  resultP.innerHTML = userChoice + ' beats ' + computerChoice + '. You win!';

}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScoreDesc.innerHTML = userScore;
  computerScoreDesc.innerHTML = computerScore;
  resultP.innerHTML = computerChoice  + ' beats ' + userChoice + '. You lose(';
}

function draw(userChoice, computerChoice) {
  resultP.innerHTML = userChoice + ' equals ' + computerChoice + '.';
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  
  let chosenItem = document.querySelector(`.left-hand.${computerChoice}`);

  
    go();
    chosenItem.classList.add('animate');

  switch (computerChoice) {
    case objWin[userChoice]:
      win(userChoice, computerChoice);
      break;
    case objLose[userChoice]:
      lose(userChoice, computerChoice);
      break;
    default:
      draw(userChoice, computerChoice);
      break;

  }
    // setTimeout(()=>{chosenItem.classList.remove('animate')};60000);


}

  function go() {
    let objItems = document.querySelectorAll('.left-hand');
    objItems.forEach(function(item){
        item.classList.remove('animate');
    });

  }


function main() {
  rock.addEventListener('click', function() {
    
    game('rock');
  });

  paper.addEventListener('click', function() {
    game('paper');
  });

  scissor.addEventListener('click', function() {
    game('scissor');
  });
}
main();