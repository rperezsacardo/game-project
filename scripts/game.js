class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.coinInterval = 800;
    this.coinArr = [];
    this.coinTimer = 0;
    this.setKeyBindings();
    this.win = 50;
    this.speed = 8;
    this.playingGame = false;
  }
  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      const keyCode = event.keyCode;
      switch (keyCode) {
        case 39: // up
          event.preventDefault();
          this.player.moveUp();
          break;
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
    this.difficult = new Difficult(this);
    this.result = new Results(this);
    this.score = new Score(this);
    this.player = new Player(this);
    this.background = new Background(this);
    this.enemyGenerator = new EnemyGenerator(this);
  }
  restart() {
    console.log('restart');
    this.gameStatus = true;
    this.difficult.actualHp = this.difficult.hp;
    this.playingGame = false;
    this.enemyGenerator.enemyArr = [];
    this.enemyGenerator.enemyTimer = 0;
    this.gameWon = false;
    this.start();
  }

  start() {
    if (!this.playingGame) {
      this.resetGame();
      this.gameStatus = true;
      this.loop();
      this.playingGame = true;
    }
  }
  pause() {
    this.gameStatus = false;
    console.log('pause');
  }
  livesCount() {
    const collision = this.player.checkCollisionEnemy();

    if (collision) {
      this.difficult.actualHp--;
    }
    return this.difficult.actualHp;
  }

  gameIsRunning() {
    const totalCoins = this.difficult.totalCoins;
    this.livesCount();
    const coinsToWin = this.difficult.win;
    if (this.livesCount() <= 0) {
      this.gameStatus = false;
    }
    if (totalCoins >= coinsToWin) {
      this.gameWon = true;
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
      this.result.drawGameOver();
      this.enemyGenerator.drawEnemy();
    }
  }

  coinGenerator(timestamp) {
    // Can I add this at Coin  Class ?
    if (this.coinTimer < timestamp - this.coinInterval) {
      this.coinTimer = timestamp;
      const newCoin = new Coin(this);
      this.coinArr.push(newCoin);
    }
    //we will create coins at a coinInterval time
  }

  runLogic() {
    for (let i = 0; i < this.coinArr.length; i++) {
      this.coinArr[i].runLogic();
      if (this.coinArr[i].checkCollision()) {
        this.difficult.totalCoins++;
        this.coinArr.splice(i, 1);
      }
    }

    this.enemyGenerator.runLogic();
    this.player.runLogic();
    //this.loose()
  }

  loop(timestamp) {
    this.runLogic();
    this.coinGenerator(timestamp); // Can I add this at Coin  Class ?
    this.enemyGenerator.enemyCleaner();
    this.gameIsRunning();
    this.enemyGenerator.enemy(timestamp); // Can I add this at Enemy Class ?

    this.draw();

    if (this.gameStatus || !this.gameWon) {
      window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }
  }
}
