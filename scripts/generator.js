class EnemyGenerator {
  constructor(game) {
    this.game = game;
    this.enemyTimer = 0;
    this.enemyInterval = 3000;
    this.enemyArr = [];
  }

  enemy(timestamp) {
    if (this.enemyTimer < timestamp - this.enemyInterval) {
      this.enemyTimer = timestamp;
      const enemy = new Enemy(this.game);
      this.enemyArr.push(enemy);
    }

  }

  enemyCleaner() {
    return this.enemyArr.filter((element) => element.x > 300);
  }
  drawEnemy() {
    for (let enemy of this.enemyArr) {
      enemy.draw();
    }
  }
  runLogic() {
    for (let enemy of this.enemyArr) {
      enemy.runLogic();
    }
  }
}
