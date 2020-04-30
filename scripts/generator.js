class EnemyGenerator {
  constructor(game) {
    this.game = game;
    this.enemyTimer = 0;
    this.enemyInterval = 3000; // Play with this number, try the same logic of coin/enemy position ==> Math.Random and Array
    this.enemyArr = [];
  }

  enemy(timestamp) {
    // Can I add this at Enemy Class ?
    if (this.enemyTimer < timestamp - this.enemyInterval) {
      this.enemyTimer = timestamp;
      const enemy = new Enemy(this.game);
      this.enemyArr.push(enemy);
    }

    //we will create coins at a coinInterval time
  }

  enemyCleaner() {
    // Can I add this at Enemy Class ?
    const validEnemiesArr = this.enemyArr.filter((element) => element.x > 300);
    return validEnemiesArr;
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
