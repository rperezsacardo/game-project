class Enemy {
  constructor(game) {
    this.game = game;
    this.x = 3000;
    this.y = 300;
    this.value = 800;
  }

  randomPosition() {
    //...
  }
  draw(speed) {
    console.log(speed);
    let enemySpeed = 0;
    if (speed < 100) {
      // Witch is the right number ? Grows in Geometric progression
      enemySpeed = 100; // minimal enemy speed
    } else {
      enemySpeed = speed += 10;
    }
    const context = this.game.context;

    if ((this.x -= speed) > 0) {
      // Why do I need this if to keep the loop working??
      context.fillStyle = 'red';
      context.fillRect(this.x - enemySpeed, this.y, 100, 100);
      console.log(this.x - enemySpeed);
    }
  }

  sortEnemy() {
    // Random type of enemy
  }
}
