class Coin {
  constructor(game) {
    this.game = game;
    this.x = 1000 
    this.y = 200
  }
  draw(speed) {
    const context = this.game.context;
    let enemySpeed = speed;
    if ((this.x -= speed) > 0) {
      context.fillStyle = 'red';
      context.fillRect(this.x - enemySpeed, this.y, 50, 50);
      console.log(this.x - enemySpeed);
    }
  }

  randomPosition() {
    //...
  }

  checkOtherCoins() {
    //avoid impossible coins
  }
  checKEnemys() {
    //avoid impossible coins
  }
}
