class Coin {
  constructor(game) {
    this.game = game;
    this.x = this.randomPositionX();
    this.y = this.randomPositionY();
    this.coinSizeX = 50;
    this.coinSizeY = 50;
    this.speed = this.game.speed;
    this.updateSpeed = this.speed;
  }

  draw() {
    const context = this.game.context;
    context.fillStyle = 'green';
    context.fillRect(this.x, this.y, this.coinSizeX, this.coinSizeY);
  }

  runLogic() {
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
      return true;
    }
  }

  randomPositionY() {
    let randomNumb = Math.floor(Math.random() * 3); //...
    const resultY = [100, 200, 300]; // Possible coins positions
    return resultY[randomNumb];
  }
  randomPositionX() {
    let randomNumb = Math.floor(Math.random() * 3); //...
    const resultY = [1000, 1200, 1300]; // Possible coins positions
    return 1000;
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
