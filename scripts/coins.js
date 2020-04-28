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
