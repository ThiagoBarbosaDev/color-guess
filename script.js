const subTitle = document.querySelector('#rgb-color');
const ballsArray = document.querySelectorAll('.ball');
const resultScreen = document.querySelector('#result-screen');
const resultText = document.querySelector('#answer');
const resetButton = document.querySelector('#reset-game')

function generateRGB() {
  const r = Math.floor(Math.random() * 255 + 1);
  const g = Math.floor(Math.random() * 255 + 1);
  const b = Math.floor(Math.random() * 255 + 1);
  return `rgb(${r}, ${g}, ${b})`;
}

const winnerRgb = generateRGB();

function setInnerTextToSubtitle() {
  subTitle.innerText = winnerRgb;
}

setInnerTextToSubtitle();

function paintBall() {
  const winnerIndex = Math.floor(Math.random() * 6 + 1);
  console.log(winnerIndex);
  for (let i = 0; i < ballsArray.length; i += 1) {
    if (i === winnerIndex - 1) {
      ballsArray[i].style.backgroundColor = winnerRgb;
      ballsArray[i].id = 'winner';
    } else {
      ballsArray[i].style.backgroundColor = generateRGB();
    }
  }
}

paintBall();

function winStateHandler() {
  ballsArray.forEach((balls) => {
    balls.addEventListener('click', (e) => {
      if (e.target.id === 'winner') {
        resultText.innerText = 'Acertou!';
      } else {
        resultText.innerText = 'Errou! Tente novamente!';
      }
    });
  });
}

winStateHandler()

function resetTheGame() {
  resetButton.addEventListener('click', () => {
    resultText.innerHTML === 'Escolha uma cor'
  })
}

resetTheGame()