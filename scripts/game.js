class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.speed = 10; // global speed
    this.coinTimer = 0;
    this.coinInterval = 3000;
    this.enemyTimer = 0;
    this.enemyInterval = 2000; // Play with this number, try the same logic of coin/enemy position ==> Math.Random and Array
    this.coinArr = [];
    this.enemyArr = [];
    this.totalCoins = 0;
    this.resetGame();
    this.gameIsRunning();
    this.setKeyBindings();
    //this.start();
    //this.updateSpeed = 10; //this.calculatesDifficult();
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
    this.gameStatus = 0;
    console.log(this);
    this.player = new Player(this);
    this.background = new Background(this);
  }
  restart() {
    this.gameStatus = 0;
    this.resetGame();
  }

  start() {
    this.gameStatus = 1;
    this.loop();
  }
  pause() {
    this.gameStatus = 0;
    console.log('pause');
  }

  gameOver() {
    if (!this.gameIsRunning) {
      console.log('game over');
    }
  }
  gameIsRunning() {
    const array = this.player.checkCollisionEnemy();

    if (!array.length) {
      return (this.gameStatus = 1);
    } else {
      return (this.gameStatus = 0);
    }
  }
  cleanScreen() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  draw() {
    this.cleanScreen();
    this.background.draw(this.speed);
    this.background.drawGrid();
    this.player.draw();
    for (let coin of this.coinArr) {
      coin.draw();
    }

    for (let enemy of this.enemyArr) {
      enemy.draw();
    }
  }

  enemyGenerator(timestamp) {
    // Can I add this at Enemy Class ?
    if (this.enemyTimer < timestamp - this.enemyInterval) {
      this.enemyTimer = timestamp;
      const enemy = new Enemy(this);
      this.enemyArr.push(enemy);
      //console.log(this.enemyArr);
    }

    //we will create coins at a coinInterval time
  }

  enemyCleaner() {
    // Can I add this at Enemy Class ?
    const validEnemiesArr = this.enemyArr.filter((element) => element.x > 300);
    return validEnemiesArr;
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
        this.totalCoins++;
        console.log(this.totalCoins);
        this.coinArr.splice(i, 1);
      }
    }

    for (let enemy of this.enemyArr) {
      enemy.runLogic();
    }
    this.player.runLogic();
    //this.loose()
  }

  // Balance the game speed
  calculatesDifficult() {
    let collectedCoins = 100;
    if (collectedCoins % 100 === 0) {
      this.speed++;
    }
    // console.log(this.speed);
    return this.speed;
  }
  loop(timestamp) {
    this.enemyGenerator(timestamp); // Can I add this at Enemy Class ?
    this.runLogic();
    this.coinGenerator(timestamp); // Can I add this at Coin  Class ?
    this.enemyCleaner();
    this.addCoin();
    this.gameIsRunning();
    this.draw();

    if (this.gameStatus) {
      window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }
  }
}
