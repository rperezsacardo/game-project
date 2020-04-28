const $canvas = document.querySelector('canvas');

const contex = $canvas.getContext('2d');

const game = new Game($canvas);
const player = new Player(game);
// contex.fillStyle = 'black';

// contex.fillRect(0, 0, 50, 50);

game.start();
//game.enemyCleaner();
