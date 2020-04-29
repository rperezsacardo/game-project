class Player {
  constructor(game) {
    this.game = game;
    this.x = 300;
    this.y = 250;
    this.speedY = 5;
    this.speedX = this.game.speed;
    this.GRAVITY = 0.1;
    this.playerImg = new Image();
    this.playerImg.src = './images/player_01.png';
    this.playerSizeX = this.playerImg.width; // 100
    this.playerSizeY = this.playerImg.height; // 150

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
    //let collided = true;
    const validEnemies = this.game.enemyCleaner();
    // const distance = [];
    for (let enemy of validEnemies) {
      let valueX = (enemy.x + enemy.enemySizeX / 4) / 2; // try to thinh a way to update 4 automatic
      let valueY = (enemy.y + enemy.enemySizeY / 4) / 2; // same
      const result = this.calcDistance(valueX, valueY);
      if (result < 50) {
        auxArray.push(result);
      }
    }
    if (!auxArray.length) {
      return false;
    } else {
      return true;
    }

    // return collided;
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
    // context.fillStyle = 'navy';
    // context.fillRect(this.x, this.y, this.playerSizeX, this.playerSizeY);

    const player = this.playerImg;
    context.drawImage(player, this.x, this.y);
  }
  runLogic() {
    // // this.checkCollisionCoins();
    // if (this.checkCollisionEnemy() > 0) {
    //   this.totalCoins++;
    // }
  }
}
