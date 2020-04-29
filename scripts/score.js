class Score {
  constructor(game) {
    this.game = game;
  }

  draw() {
    const context = this.game.context;
    const coins = this.game.totalCoins;

    context.font = '24px sans-serif';
    context.fillStyle = 'white';
    context.fillText(`${coins} Eggs`, 25, 25);
  }
}
