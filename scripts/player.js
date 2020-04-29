class Player {
  constructor(game) {
    this.game = game;
    this.x = 300;
    this.y = 250;
    this.playerSizeX = 100;
    this.playerSizeY = 150;
    this.speedY = 5;
    this.speedX = this.game.speed;
    this.GRAVITY = 0.1;

    //
  }
  loopGravity() {
    if (this.y <= 250) {
      if (this.y <= 100) {
        this.y--;
      }
      // this.speedY *= this.GRAVITY;
      this.y += this.speedY + this.GRAVITY;
      setTimeout(() => {
        this.loopGravity();
      }, 1000 / 60); //how ease this curve ?
    } else {
      this.speedY = 10;
    }
  }

  moveUp() {
    this.y = 200;
    this.loopGravity();
  }
  moveDown() {
    this.y = 300;
    this.playerSizeY = 100;
  }
  moveJump() {
    // needs to be more smooth
    this.loopGravity();
    this.y = 0;
    this.loopGravity();
  }

  moveReset() {
    this.y = 250;
    this.playerSizeY = 150;
  }

  checkCollisionEnemy() {
    let auxArray = [];
    const validEnemies = this.game.enemyCleaner();
    for (let enemy of validEnemies) {
      let valueX = (enemy.x + enemy.enemySizeX) / 2;
      let valueY = (enemy.y + enemy.enemySizeY) / 2;
      const result = this.calcDistance(valueX, valueY);
      if (result < 50) {
        auxArray.push(result);
      }
    }

    return auxArray;
  }

  calcDistance(x2, y2) {
    let x1 = (this.x + this.playerSizeX) / 2; // middle
    let y1 = (this.y + this.playerSizeY) / 2; // middle

    const xDist = x2 - x1;
    const yDist = y2 - y1;
    return Math.hypot(xDist, yDist);
  }

  draw() {
    const context = this.game.context;
    context.fillStyle = 'navy';
    context.fillRect(this.x, this.y, this.playerSizeX, this.playerSizeY);
  }
  runLogic() {
    // // this.checkCollisionCoins();
    // if (this.checkCollisionEnemy() > 0) {
    //   this.totalCoins++;
    // }
  }
}
