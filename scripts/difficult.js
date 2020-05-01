class Difficult {
  constructor(game) {
    this.game = game;
    this.win = 30;
    this.speed = 8;
    this.inicialHp = 30;
    this.hp = this.inicialHp;
    this.actualHp = this.inicialHp;
    this.totalCoins = 0;
    this.maxSpeed = 20;
  }
  calculatesDifficult() {
    if (this.totalCoins > 0 && this.totalCoins % 10 === 0 && this.speed < this.maxSpeed) {
      this.speed += 0.05;
      console.log(this.speed);
    }
  }
}
