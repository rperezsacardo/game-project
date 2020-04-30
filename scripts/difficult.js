class Difficult {
  constructor(game) {
    this.game = game;
    this.win = 10;
    this.speed = 8;
    this.inicialHp = 1;
    this.hp = this.inicialHp;
    this.actualHp = this.inicialHp;

    this.totalCoins = 0;
  }
  calculatesDifficult() {
    let collectedCoins = 100;
    if (collectedCoins % 100 === 0) {
      this.speed++;
    }

    return this.speed;
  }
}
