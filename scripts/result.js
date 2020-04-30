class Results {
  constructor(game) {
    this.game = game;
  }

  drawGameOver() {
    const context = this.game.context;
    const gameStatus = this.game.gameStatus;
    const collision = this.game.player.checkCollisionEnemy();
    if (!gameStatus && collision) {
      const context = this.game.context;
      const txt = 'Game Over';
      context.font = '48px Chelsea Market';
      context.fillStyle = 'white'; //'#5BA660';
      context.fillText(txt, 300, 250);
    }
  }

  drawWin() {
    const context = this.game.context;
    const txt = 'You Win';
    context.font = '48px Chelsea Market';
    context.fillStyle = 'white'; //'#5BA660';
    context.fillText(txt, 300, 250);
  }
}
