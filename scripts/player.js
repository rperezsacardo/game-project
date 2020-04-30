class Player {
  constructor(game) {
    this.game = game;
    this.x = 300;
    this.y = 250;
    this.velocityY = 0;
    this.speedX = this.game.speed;
    this.GRAVITY = 0.99;
    this.friction = 0.5;
    this.playerImg = new Image();
    this.playerImg.src = './images/player_01.png';
    this.playerSizeX = this.playerImg.width; // 100
    this.playerSizeY = this.playerImg.height; // 150

    //
  }

  moveDown() {
    if (!this.jumping) {
      this.y = 310;
      this.down = true;
    }
  }

  moveJump() {
    if (!this.jumping && !this.down) {
      console.log('jump');
      this.velocityY = -10; //
      this.jump();
      this.loopGravity();
      this.jumping = true;
    }
  }
  loopGravity() {
    this.velocityY * -1;
    this.y += this.velocityY * this.GRAVITY;
    if (this.y < 250) {
      setTimeout(() => {
        this.loopGravity();
      }, 1000 / 60);
    } else {
      this.jumping = false;
    }
  }
  jump() {
    this.y += (this.velocityY + (this.GRAVITY / 1000) * 16) * this.friction;
    if (this.y > 50) {
      setTimeout(() => {
        this.jump();
      }, 1000 / 60); //how ease this curve ?
    } else {
      this.velocityY *= -1;
    }
  }

  moveReset() {
    if (!this.jumping) {
      this.y = 250;
      this.down = false;
    }
  }

  checkCollisionEnemy() {
    let auxArray = [];
    const validEnemies = this.game.enemyCleaner();

    for (let enemy of validEnemies) {
      let valueX = (enemy.x + enemy.enemySizeX / 4) / 2; // try to think a way to update 4 automatic
      let valueY = (enemy.y + enemy.enemySizeY / 4) / 2; // same
      const result = this.calcDistance(valueX, valueY);
      if (result < 40) {
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
