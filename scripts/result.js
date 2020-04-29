class Results {
  constructor(game) {
    this.game = game;
  }

  drawGameOver() {
    const context = this.game.context;
    const gameStatus = this.game.gameStatus;
    const collision = this.game.player.checkCollisionEnemy();
    if (!gameStatus && collision) {
      context.font = '24px sans-serif';
      context.fillStyle = 'white';
      context.fillText(`GAME OVER`, 500, 250);
    }
  }

  drawWin() {
    const totalCoins = this.game.totalCoins;
    const coinsToWin = this.game.win;
    if (totalCoins === coinsToWin) {
      console.log('win');
      context.font = '24px sans-serif';
      context.fillStyle = 'white';
      context.fillText(`you win`, 500, 250);
    }
  }

  draw() {
    const context = this.game.context;
    const gameStatus = this.game.gameStatus;
    if (!gameStatus) {
      context.font = '24px sans-serif';
      context.fillStyle = 'green';
      context.fillText(`GAME OVER`, 500, 250);
    }
  }

  winGame() {
    {
      this.result.drawWin();
      this.gameStatus = false;
    }
  }
}
