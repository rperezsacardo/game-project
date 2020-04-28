class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.setKeyBindings();
    this.speed = 5;
    this.updateSpeed = this.calculatesDifficult();
  }
  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      const keyCode = event.keyCode;
      switch (keyCode) {
        case 38: // up
          event.preventDefault();
          this.player.moveUp();
          this.draw();
          console.log('up');
          break;
        case 32: //Duble Jump
          event.preventDefault();
          this.player.moveJump();
          this.draw();
          console.log('ju');
          break;
        case 40:
          event.preventDefault();
          this.player.moveDown();
          this.draw();
          console.log('do');
          break;
      }
    });
    window.addEventListener('keyup', (event) => {
      event.code;
      if (event.code === 'ArrowDown') {
        console.log('reset');
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
    this.coin = new Coin(this);
    this.enemy = new Enemy(this);
    this.loop();
  }

  cleanScreen() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  draw() {
    //debugger;
    this.cleanScreen();
    this.background.draw(this.updateSpeed);
    this.background.drawGrid();
    this.player.draw();
    this.enemy.draw(this.updateSpeed);
    this.coin.draw(this.updateSpeed);

    //...
  }
  calculatesDifficult() { // Balance the game speed 
    //
    let collectedCoins = 10;

    if (collectedCoins % 100 === 0) {
      this.speed++;
    }
    return this.speed;
  }
  loop() {
    //this.runLogic();
    // reset() {}
    // pause() {
    //   //...
    // }

    // runLogic() {
    //   return true;
    // }
    this.draw();

    setTimeout(() => {
      this.loop();
    }, 1000 / 120);
  }
}
