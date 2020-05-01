const egg = new Audio('../sounds/egg.mp3');

class Coin {
  constructor(game) {
    this.game = game;
    this.x = this.randomPositionX();
    this.y = this.randomPositionY();
    // this.coinSizeX = 50;
    // this.coinSizeY = 50;
    this.speed = game.difficult.speed;
    this.updateSpeed = this.speed;
    this.coinImg = new Image();
    this.coinImg.src = './images/ovo_02.png';
    this.coinSizeX = this.coinImg.width; // 50
    this.coinSizeY = this.coinImg.height; // 50
  }

  draw() {
    const context = this.game.context;
    context.drawImage(this.coinImg, this.x, this.y, this.coinSizeX / 4, this.coinSizeY / 4);
  }

  runLogic() {
    const speed = this.game.difficult.speed;
    this.x -= this.speed;
  }

  checkCollision() {
    const player = this.game.player;
    const playerX = player.x;
    const playerY = player.y;
    const playerSizeX = player.playerSizeX;
    const playerSizeY = player.playerSizeY;

    //check x collision
    if (
      this.x >= playerX &&
      this.x <= playerX + playerSizeX &&
      this.y >= playerY &&
      this.y <= playerY + playerSizeY
    ) {
      egg.play();
      return true;
    }
  }

  randomPositionY() {
    let randomNumb = Math.floor(Math.random() * 6); //...
    const resultY = [100, 250, 250, 350, 350, 400]; // Possible coins positions
    return resultY[randomNumb];
  }
  randomPositionX() {
    let randomNumb = Math.floor(Math.random() * 3); //...
    const resultY = [1000, 1000, 1500]; // Possible coins positions
    return resultY[randomNumb];
  }

  checkOtherCoins() {
    //avoid impossible coins
  }
  checKEnemys() {
    //avoid impossible coins
  }
}

// old collision logic
// checkCollisionCoins() {
//   let aux = false;
//   const coinPositions = {
//     x: [],
//     y: []
//   };
//   const validCoins = this.game.coinsCleaner();
//
//   for (let coin of validCoins) {
//     for (let i = 0; i < 50; i++) {
//       coinPositions.x.push(coin.x + i);
//       coinPositions.y.push(coin.y + i);
//     }
//   }

//   let checkX = coinPositions.x.some((el) => el > this.x && el < this.x + this.playerSizeX);
//   let checkY = coinPositions.y.some((el) => el > this.y && el < this.y + this.playerSizeY);
//   // console.log('x ' +checkX.length);
//   // console.log('y '+ checkY.length);
//   if (checkX && checkY) {
//     aux = true;
//
//   }
//   return aux;
// }
