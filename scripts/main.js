const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');
const clickSound = new Audio('../sounds/click.mp3');
const openSong = new Audio('../sounds/pening_song.mp3.mp3');

const game = new Game($canvas);
const player = new Player(game);

const $buttonStart = document.getElementById('start');
const $buttonPause = document.getElementById('pause');
const $buttonReset = document.getElementById('reset');
const openingTxt = 'Help Allan to collect';

const jumpImg = new Image();
jumpImg.src = './images/opening.png';
context.drawImage(jumpImg, 500, 550, 0, 0);

function opening() {
  context.save();

  context.textAlign = 'center';
  context.font = '48px Chelsea Market';
  context.strokeStyle = '#97711B';
  context.lineWidth = 1;
  context.fillStyle = 'white';
  context.fillText(openingTxt, 500, 200);
  context.strokeText(openingTxt, 500, 200);
  context.fill();
  context.stroke();
  context.restore();

  context.save();
  const openingTxt2 = 'all dinosaur eggs';
  context.textAlign = 'center';
  context.font = '48px Chelsea Market';
  context.strokeStyle = '#97711B';
  context.lineWidth = 1;
  context.fillStyle = 'white';
  context.fillText(openingTxt2, 500, 300);
  context.strokeText(openingTxt2, 500, 300);
  context.fill();
  context.stroke();
  context.restore();
}

opening();
openSong.play();
$buttonStart.addEventListener('click', () => {
  game.start();
  clickSound.play();
  openSong.pause();
});

$buttonPause.addEventListener('click', () => {
  game.pause();
  clickSound.play();
});

$buttonReset.addEventListener('click', () => {
  game.restart();
  clickSound.play();
});
