class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.setKeyBindings();
    this.speed = 10; // global speed
    this.coinTimer = 0;
    this.coinInterval = 1500;
    this.enemyTimer = 0;
    this.enemyInterval = 2000; // Play with this number, try the same logic of coin/enemy position ==> Math.Random and Array
    //this.updateSpeed = 10; //this.calculatesDifficult();
  }
  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      const keyCode = event.keyCode;
      switch (keyCode) {
        case 38: // up
          event.preventDefault();
          this.player.moveUp();
          this.draw();
          break;
        case 32: //Duble Jump
          event.preventDefault();
          this.player.moveJump();
          this.draw();
          break;
        case 40:
          event.preventDefault();
          this.player.moveDown();
          this.draw();
          break;
      }
    });
    window.addEventListener('keyup', (event) => {
      // reset to normal position
      event.code;
      if (event.code === 'ArrowDown') {
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
    this.coinArr = [];
    this.enemyArr = [];

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
    // Clean the old objects
    for (let enemy of this.enemyArr) {
      if (enemy['x'] < 0) {
        // slice or filter ? if I filter, will result in a ner array, but I want to keep at the same
        //   0: Enemy {game: Game, x: -220, y: 200, speed: 10, updateSpeed: undefined}
        // length: 1
      }
    }
  }

  coinGenerator(timestamp) {
    if (this.coinTimer < timestamp - this.coinInterval) {
      this.coinTimer = timestamp;
      const newCoin = new Coin(this);
      this.coinArr.push(newCoin);
    }
    //we will create coins at a coinInterval time
  }

  runLogic() {
    //this.enemy.runLogic();
    for (let coin of this.coinArr) {
      coin.runLogic();
    }
    for (let enemy of this.enemyArr) {
      enemy.runLogic();
    }
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
    this.draw();

    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }
}
