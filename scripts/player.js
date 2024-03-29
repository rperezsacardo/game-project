const dinoSound = new Audio('../sounds/dino_sfx.mp3');
const hitSound = new Audio('../sounds/hit_sfx.mp3');
const jumpSound = new Audio('../sounds/jump_sfx.mp3');
const hit02Sound = new Audio('../sounds/hit02_sfx.mp3');
const wing = new Audio('../sounds/wing.mp3');
const slideIn = new Audio('../sounds/slide_in.mp3');
const slideOut = new Audio('../sounds/slide_out.mp3');

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
    this.playerImg.src = './images/player_02.png';
    this.playerSizeX = this.playerImg.width; // 100
    this.playerSizeY = this.playerImg.height; // 150
    this.actualMoviment = 'running'; // 'jump' or 'slide'
    this.playerJumpImg = new Image();
    this.playerJumpImg.src = './images/images_opening_jump.png';
    this.playerSlideImg = new Image();
    this.playerSlideImg.src = './images/images_opening_slide.png';
    this.player = this.playerImg;

    //
  }

  moveDown() {
    if (!this.jumping) {
      this.player = this.playerSlideImg;
      this.y = 310;
      this.down = true;
      hitSound.play();
      slideIn.play();
    }
  }

  moveJump() {
    if (!this.jumping && !this.down) {
      this.velocityY = -10;
      this.jump();
      this.loopGravity();
      this.jumping = true;
      jumpSound.play();
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
      this.player = this.playerImg;
      this.jumping = false;
    }
  }
  jump() {
    this.y += (this.velocityY + (this.GRAVITY / 1000) * 16) * this.friction;
    this.player = this.playerJumpImg;
    if (this.y > 50) {
      setTimeout(() => {
        this.jump();
      }, 1000 / 60);
    } else {
      this.velocityY *= -1;
    }
  }

  moveReset() {
    if (!this.jumping) {
      this.player = this.playerImg;
      this.y = 250;
      this.down = false;
      slideOut.play();
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
        dinoSound.play();
        hit02Sound.play();
      }

      if (!auxArray.length) {
        return false;
      } else {
        return true;
      }

      // return collided;
    }
  }

  calcDistance(x2, y2) {
    let x1 = (this.x + this.playerSizeX) / 2;
    let y1 = (this.y + this.playerSizeY) / 2;

    const xDist = x2 - x1;
    const yDist = y2 - y1;
    return Math.hypot(xDist, yDist);
  }

  draw() {
    context.drawImage(this.player, this.x, this.y);
  }
  runLogic() {
    // // this.checkCollisionCoins();
    // if (this.checkCollisionEnemy() > 0) {
    //   this.totalCoins++;
    // }
  }
}
