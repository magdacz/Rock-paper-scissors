//REFERENCJE DO HTML-a
var newGameBtn = document.querySelector('#js-newGameButton'),
    pickRock = document.querySelector('#js-playerPick_rock'),
    pickPaper = document.querySelector('#js-playerPick_paper'),
    pickScissors = document.querySelector('#js-playerPick_scissors'),
    newGameElem = document.querySelector('#js-newGameElement'),
    pickElem = document.querySelector('#js-playerPickElement'),
    resultsElem = document.querySelector('#js-resultsTableElement'),
    playerPointsElem = document.querySelector('#js-playerPoints'),
    playerNameElem = document.querySelector('#js-playerName'),
    computerPointsElem = document.querySelector('#js-computerPoints'),
    playerPickElem = document.querySelector('#js-playerPick'),
    computerPickElem = document.querySelector('#js-computerPick'),
    playerResultElem = document.querySelector('#js-playerResult'),
    computerResultElem = document.querySelector('#js-computerResult');
//NASŁUCHIWACZE
newGameBtn.addEventListener('click', newGame);
pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

//OBIEKTY STARTOWE
var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

//USTAWIENIE PLANSZY 
function setGameElements() {
  
  switch(gameState) { //gameState = started
  case 'notStarted':
    newGameElem.style.display = 'block';
    resultsElem.style.display = 'none';
    pickElem.style.display = 'none';
   break;
  case 'started':
    newGameElem.style.display = 'none';
    pickElem.style.display = 'block';
    resultsElem.style.display = 'block';
    break
  case 'ended': 
     newGameElem.style.display = 'block';
     newGameBtn.innerText = 'Jeszcze raz';
     resultsElem.style.display = 'none';
     pickElem.style.display = 'none';
   break;
}
  
}

setGameElements();

//NOWA GRA/ JESZCZE RAZ
function newGame() {
  
  player.name = prompt('Please enter your name', 'imię gracza');
  if (player.name != null && player.name !='') {
    
    
    player.score = 0;
    computer.score = 0;
    
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints();
  }

}

//AKTUALIZOWANIE PUNKTÓW
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

//LOSOWANIE WYBORU KOMPUTERA
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

//WYBÓR GRACZA
function playerPick(playerChoice) {
  
    var computerChoice = getComputerPick();
    console.log(playerChoice, computerChoice)

    playerPickElem.innerHTML = playerChoice;
    computerPickElem.innerHTML = computerChoice;

    checkRoundWinner(playerChoice, computerChoice);
    checkWinner();
}

//SPRAWDZANIE KTO WYGRAŁ RUNDĘ
function checkRoundWinner(playerPick, computerPick) {
 
  playerResultElem.innerHTML = '';
  computerResultElem.innerHTML = '';
  
  if(playerPick == computerPick) {
    //remis
  } else if ((computerPick == 'rock' &&  playerPick == 'scissors') || (computerPick == 'scissors' &&  playerPick == 'paper') || (computerPick == 'paper' &&  playerPick == 'rock')) {
         computerResultElem.innerHTML = "Win!";
         computer.score++;
    } else {
         playerResultElem.innerHTML = "Win!";
         player.score++;
    }
  
    setGamePoints();
}

//SPRAWDZENIE CZY GRA SIĘ SKOŃCZYŁA
function checkWinner() {
 
    if (player.score == 10) {
      
        alert("Congratulations " + player.name + ", you win!");
        gameState = 'ended';
        setGameElements();
        
    } else if (computer.score == 10) {

        alert("Sorry " + player.name + ", you lost");
        gameState = 'ended';
        setGameElements();   
    }
}




















