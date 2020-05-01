const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');

const game = new Game($canvas);
const player = new Player(game);
// contex.fillStyle = 'black';

// contex.fillRect(0, 0, 50, 50);

const $buttonStart = document.getElementById('start');
const $buttonPause = document.getElementById('pause');
const $buttonReset = document.getElementById('reset');

const jumpImg = new Image();
jumpImg.src = './images/opening.png';
context.drawImage(jumpImg, 500, 550, 0, 0);

function opening() {
  context.save();
  const openingTxt = 'Help Allan to collect';

  context.textAlign = 'center';
  context.font = '48px Chelsea Market';
  context.strokeStyle = '#97711B';
  context.lineWidth = 1;
  context.fillStyle = 'white'; //'#5BA660';
  context.fillText(openingTxt, 500, 200);
  context.strokeText(openingTxt, 500, 200);
  context.fill();
  context.stroke();
  context.restore();

  context.save();
  const openingTxt2 = 'dinosaur all eggs';
  context.textAlign = 'center';
  context.font = '48px Chelsea Market';
  context.strokeStyle = '#97711B';
  context.lineWidth = 1;
  context.fillStyle = 'white'; //'#5BA660';
  context.fillText(openingTxt2, 500, 300);
  context.strokeText(openingTxt2, 500, 300);
  context.fill();
  context.stroke();
  context.restore();
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
