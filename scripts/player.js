class Player {
  constructor(game) {
    this.game = game;
    this.x = 300;
    this.y = 250;
    this.playerSizeX = 100;
    this.playerSizey = 150;
    this.speedY = 5;
    this.GRAVITY = 0.2;
    //
  }
  loopGravity() {
    if (this.y <= 250) {
      // this.speedY *= this.GRAVITY;
      this.y += this.speedY + this.GRAVITY;
      setTimeout(() => {
        this.loopGravity();
      }, 1000/60); //how ease this curve ?
    } else {
      this.speedY = 10;
    }
  }

  moveUp() {
    this.y = 100;
    console.log(this.y);
    this.loopGravity();
  }
  moveDown() {
    this.y = 300;
    this.playerSizey = 100;

    console.log(this.y);
  }
  moveJump() {
    this.loopGravity();
    this.y = 0;
    console.log(this.y);
    this.loopGravity();
  }

  moveReset() {
    this.y = 250;
    this.playerSizey = 150;
  }

  // --------------------------------------------- console works, but this.y not
  // move(key) {
  //   switch (key) {
  //     case 'up': // up
  //       this.y = 300;
  //       console.log(this.y);
  //       break;
  //     case 'jump': //Duble Jump
  //       this.y = 100;
  //       console.log(this.y);
  //       break;
  //     case 'down':
  //       this.y = 450;
  //       console.log(this.y);
  //       break;
  //     default:
  //       this.y = 400;
  //       console.log(this.y);
  //   }
  // }

  // ---------------------------------------------------

  checkCollisionEnemy() {
    const colision = false;
    if (!colision) {
      console.log('Game Runiing');
      return colision;
    } else {
      console.log('Game Over');
    }
  }

  checkCollisionCoins() {
    const colision = false;
    if (colision) {
      console.log('+1 egg');
      return colision;
    }
  }

  draw() {
    const context = this.game.context;
    context.fillStyle = 'navy';
    context.fillRect(this.x, this.y, this.playerSizeX, this.playerSizey);
  }
  runLogic() {
    this.move();
    //this.checkCollisionEnemy();
  }
}
