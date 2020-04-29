const $canvas = document.querySelector('canvas');

const contex = $canvas.getContext('2d');

const game = new Game($canvas);
const player = new Player(game);
// contex.fillStyle = 'black';

// contex.fillRect(0, 0, 50, 50);

const $buttonStart = document.getElementById('start');
const $buttonPause = document.getElementById('pause');
const $buttonReset = document.getElementById('reset');

$buttonStart.addEventListener('click', () => {
  game.start();
});

$buttonPause.addEventListener('click', () => {
  game.pause();
});

$buttonReset.addEventListener('click', () => {
  game.restart();
});

//game.start();
