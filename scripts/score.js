class Score {
  constructor(game) {
    this.game = game;
  }

  coinsDraw() {
    const context = this.game.context;
    const coins = this.game.difficult.totalCoins;
    const coinsToWin = this.game.difficult.win;

    context.font = '24px sans-serif';
    context.fillStyle = 'white';
    context.fillText(`${coins} / ${coinsToWin}  Eggs`, 25, 25);
  }

  hpDraw() {
    const context = this.game.context;
    const actualHp = this.game.difficult.actualHp;
    const hp = this.game.difficult.hp;

    context.font = '24px sans-serif';
    context.fillStyle = 'white';
    context.fillText(`${actualHp} / ${hp} HP`, 25, 50);
  }
}
