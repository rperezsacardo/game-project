class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.setKeyBindings();
    this.speed = 5; // global speed
    this.coinTimer = 0;
    this.coinInterval = 1500;
    this.enemyTimer = 0;
    this.enemyInterval = 2000; // Play with this number, try the same logic of coin/enemy position ==> Math.Random and Array
    this.coinArr = [];
    this.enemyArr = [];
    this.toalCoins = 0;
    this.actualEnemies = this.enemyCleaner();
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
          this.draw();
          break;
        case 32: //Duble Jump
          event.preventDefault();
          this.player.moveJump();
          this.draw();
          break;
        case 37:
          event.preventDefault();
          this.player.moveDown();
          this.draw();
          break;
      }
    });
    window.addEventListener('keyup', (event) => {
      // reset to normal position
      event.code;
      if (event.code === 'ArrowLeft') {
        event.preventDefault();
        this.player.moveReset();
        this.draw();
      }
    });
  }
  start() {
    console.log(this);
    this.player = new Player(this);
    this.background = new Background(this);
    // this.coinArr = [];
    // this.enemyArr = [];

    this.loop();
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
    if (this.enemyTimer < timestamp - this.enemyInterval) {
      this.enemyTimer = timestamp;
      const enemy = new Enemy(this);
      this.enemyArr.push(enemy);
      //console.log(this.enemyArr);
    }

    //we will create coins at a coinInterval time
  }

  enemyCleaner() {
    const validEnemiesArr = this.enemyArr.filter((element) => element.x > 300);
    return validEnemiesArr;
  }

  coinGenerator(timestamp) {
    if (this.coinTimer < timestamp - this.coinInterval) {
      this.coinTimer = timestamp;
      const newCoin = new Coin(this);
      this.coinArr.push(newCoin);
    }
    //we will create coins at a coinInterval time
  }
  coinsCleaner() {
    const validCoinsArr = this.coinArr.filter((element) => element.x > 200);
    return validCoinsArr;
  }

  runLogic() {
    //this.enemy.runLogic();
    for (let coin of this.coinArr) {
      coin.runLogic();
    }
    for (let enemy of this.enemyArr) {
      enemy.runLogic();
    }
    this.player.checkCollisionEnemy();
    this.player.checkCollisionCoins();
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
    this.enemyGenerator(timestamp);
    this.runLogic();
    this.coinGenerator(timestamp);
    this.enemyCleaner();
    this.draw();

    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }
}
