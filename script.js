const subTitle = document.querySelector('#rgb-color');
const ballsArray = document.querySelectorAll('.ball');
const resultScreen = document.querySelector('#result-screen');
const resultText = document.querySelector('#answer');
const resetButton = document.querySelector('#reset-game');
const scoreP = document.querySelector('#score')

function generateRGB() {
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  return `rgb(${r}, ${g}, ${b})`;
}

function setInnerTextToSubtitle() {
  subTitle.innerText = generateRGB();
}

// let winnerRgb = subTitle.innerText;

setInnerTextToSubtitle();

function paintBall() {

  const winnerIndex = Math.floor(Math.random() * 6 + 1);
  for (let i = 0; i < ballsArray.length; i += 1) {
    ballsArray[i].id = '';
    if (i === winnerIndex - 1) {
      
      ballsArray[i].style.backgroundColor = subTitle.innerText;
      ballsArray[i].id = 'winner';
    } else {
      ballsArray[i].style.backgroundColor = generateRGB();
    }
  }
}

paintBall();

let score = 0;

function winStateHandler() {
  ballsArray.forEach((balls) => {
    balls.addEventListener('click', (e) => {
      if (e.target.id === 'winner') {
        resultText.innerText = 'Acertou!'; score += 3; scoreP.innerText = `Score: ${score}`; 
      } else {
        resultText.innerText = 'Errou! Tente novamente!';
      }
    });
  });

}

winStateHandler();

function resetTheGame() {
  resetButton.addEventListener('click', () => {
    resultText.innerHTML = 'Escolha uma cor';
    subTitle.innerText = generateRGB();
    paintBall();
  });
}

resetTheGame();
