class Difficult {
  constructor(game) {
    this.game = game;
    this.win = 20;
    this.speed = 8;
    this.inicialHp = 50;
    this.hp = this.inicialHp;
    this.actualHp = this.inicialHp;
    this.totalCoins = 0;
    this.maxSpeed = 20;
  }
  calculatesDifficult() {
    if (this.totalCoins > 0 && this.totalCoins % 10 === 0 && this.speed < this.maxSpeed) {
      this.speed += 0.05;
    }
  }
}
