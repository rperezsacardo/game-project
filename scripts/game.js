const jungleSound = new Audio('../sounds/jungle_sfx.mp3');
const gameOverSound = new Audio('../sounds/game_over_sfx.mp3');
const win = new Audio('../sounds/win.mp3');

class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.coinInterval = 1000;
    this.coinArr = [];
    this.coinTimer = 0;
    this.enemyTimer = 0;
    this.enemyInterval = 800; // Play with this number, try the same logic of coin/enemy position ==> Math.Random and Array
    this.enemyArr = [];
    this.setKeyBindings();
    this.win = 50;
    // this.speed = 8;
    this.paused = true;
  }
  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      const keyCode = event.keyCode;
      switch (keyCode) {
        case 32: //Duble Jump
          event.preventDefault();
          this.player.moveJump();
          break;
        case 37:
          event.preventDefault();
          this.player.moveDown();
          break;
      }
    });
    window.addEventListener('keyup', (event) => {
      // reset to normal position
      event.code;
      if (event.code === 'ArrowLeft') {
        event.preventDefault();
        this.player.moveReset();
      }
    });
  }

  resetGame() {
    this.cleanScreen();
    this.draw;
    this.difficult = new Difficult(this);
    this.difficult.totalCoins = 0;
    this.result = new Results(this);
    this.score = new Score(this);
    this.player = new Player(this);
    this.background = new Background(this);
    this.coinArr = [];
    this.coinTimer = 0;
    this.enemyTimer = 0;
    this.enemyArr = [];
    this.speed = this.difficult.speed;
    win.pause();

    // this.enemyGenerator = new EnemyGenerator(this);
  }
  restart() {
    // this.difficult.actualHp = this.difficult.hp;
    this.playingGame = false;
    this.enemyArr = [];
    this.enemyTimer = 0;
    this.gameWon = false;
    this.resetGame();
    if (!this.gameStatus) {
      this.gameStatus = true;
      this.loop(0);
    }
  }

  start() {
    if (!this.playingGame) {
      this.resetGame();
      this.gameStatus = true;
      this.loop();
      this.playingGame = true;
      jungleSound.play();
      // this.playBackground();
    }
  }
  pause() {
    if (this.gameStatus) {
      this.gameStatus = !this.gameStatus;
      jungleSound.pause();
    } else {
      this.gameStatus = !this.gameStatus;
      jungleSound.play();
      this.loop();
    }
    // console.log(this.paused)
    // this.paused = !this.paused
    // console.log(this.paused)
  }

  // playBackground() {
  //   if (this.gameStatus && !this.gameWon) {
  //     jungleSound.play();
  //     setInterval(this.playBackground(), 1000);
  //   } else {
  //     jungleSound.pause();
  //   }
  // }
  livesCount() {
    const collision = this.player.checkCollisionEnemy();

    if (collision) {
      this.difficult.actualHp--;
    }
    return this.difficult.actualHp;
  }

  gameIsRunning() {
    const totalCoins = this.difficult.totalCoins;
    const hp = this.difficult.actualHp;
    const coinsToWin = this.difficult.win;
    if (hp < 1) {
      this.gameStatus = false;
      gameOverSound.play();
    }
    if (totalCoins >= coinsToWin) {
      this.gameWon = true;
      win.play();
    }
  }

  cleanScreen() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  draw() {
    this.cleanScreen();
    this.background.draw(this.difficult.speed);
    this.background.loopDraw();
    this.score.coinsDraw();
    this.score.hpDraw();
    this.player.draw();
    if (this.gameWon) {
      this.result.drawWin();
    } else {
      for (let coin of this.coinArr) {
        coin.draw();
      }
      for (let enemy of this.enemyArr) {
        enemy.draw();
      }
      this.result.drawGameOver();
    }
  }

  coinGenerator(timestamp) {
    // Can I add this at Coin  Class ?
    if (this.coinTimer === 0 || !this.coinTimer) {
      this.coinTimer = timestamp;
    }
    if (this.coinTimer < timestamp - this.coinInterval) {
      this.coinTimer = timestamp;
      const newCoin = new Coin(this);
      this.coinArr.push(newCoin);
    }
    //we will create coins at a coinInterval time
  }

  enemyGenerator(timestamp) {
    // Can I add this at Enemy Class ?
    if (this.enemyTimer === 0 || !this.enemyTimer) {
      this.enemyTimer = timestamp;
    }
    if (this.enemyTimer < timestamp - this.enemyInterval) {
      this.enemyTimer = timestamp;
      const enemy = new Enemy(this);
      this.enemyArr.push(enemy);
    }

    //we will create coins at a coinInterval time
  }

  enemyCleaner() {
    // Can I add this at Enemy Class ?
    const validEnemiesArr = this.enemyArr.filter((element) => element.x > 300);
    return validEnemiesArr;
  }

  runLogic() {
    for (let i = 0; i < this.coinArr.length; i++) {
      this.coinArr[i].runLogic();
      if (this.coinArr[i].checkCollision()) {
        this.difficult.totalCoins++;
        this.coinArr.splice(i, 1);
      }
    }
    for (let enemy of this.enemyArr) {
      enemy.runLogic();
    }
    this.livesCount();
    this.player.runLogic();
    this.difficult.calculatesDifficult();
    //this.loose()
  }

  loop(timestamp) {
    this.runLogic();

    this.enemyCleaner();
    this.gameIsRunning();
    this.coinGenerator(timestamp); // Can I add this at Coin  Class ?
    this.enemyGenerator(timestamp); // Can I add this at Enemy Class ?
    this.draw();

    if (this.gameStatus && !this.gameWon) {
      window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }
  }
}
