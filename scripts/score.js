class Score {
  constructor(game) {
    this.game = game;
    this.bgHPImg = new Image();
    this.bgHPImg.src = './images/bg_hp_02.png';
    this.bgHPSizeX = this.bgHPImg.width; // 100
    this.bgHPSizeY = this.bgHPImg.height;
    this.bgCoinImg = new Image();
    this.bgCoinImg.src = './images/bg_egg.png';
    this.bgCoinSizeX = this.bgCoinImg.width; // 100
    this.bgCoinSizeY = this.bgCoinImg.height;
  }

  coinsDraw() {
    const context = this.game.context;
    const coins = this.game.difficult.totalCoins;
    const coinsToWin = this.game.difficult.win;
    context.drawImage(this.bgCoinImg, 25, 50);
    context.font = '18px Caesar Dressing';
    context.fillStyle = 'white';
    context.fillText(`${coins}/${coinsToWin}`, 90, 80);
  }

  hpDraw() {
    const context = this.game.context;
    const actualHp = this.game.difficult.actualHp;
    const hp = this.game.difficult.hp;
    context.drawImage(this.bgHPImg, 25, 100);

    context.font = '18px Chelsea Market';
    context.fillStyle = 'white';
    context.fillText(`${actualHp}/${hp}`, 90, 130);
  }
}
