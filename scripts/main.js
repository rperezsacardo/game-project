const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');

const game = new Game($canvas);
const player = new Player(game);
// contex.fillStyle = 'black';

// contex.fillRect(0, 0, 50, 50);

const $buttonStart = document.getElementById('start');
const $buttonPause = document.getElementById('pause');
const $buttonReset = document.getElementById('reset');

function opening() {
  const jumpImg = new Image();
  jumpImg.src = './images/player_01.png';
  context.drawImage(jumpImg, 0, 0);
  const openingTxt = 'Welcomo to the Run';
  context.font = '48px Chelsea Market';
  context.fillStyle = 'white'; //'#5BA660';
  context.fillText(openingTxt, 300, 250);
}

opening();

$buttonStart.addEventListener('click', () => {
  game.start();
});

$buttonPause.addEventListener('click', () => {
  game.pause();
});

$buttonReset.addEventListener('click', () => {
  game.restart();
});
