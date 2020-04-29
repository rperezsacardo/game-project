class Enemy {
  constructor(game) {
    this.game = game;
    this.x = this.randomPositionX();
    this.y = this.randomPositionY();
    this.enemySizeX = 100;
    this.enemySizeY = 100;
    this.speed = this.game.speed;
    this.updateSpeed = this.game.updateSpeed;
    this.enemyImg = new Image();
    this.enemyImg.src = './images/enemy_01.png';
    this.enemySizeX = this.enemyImg.width; // 100
    this.enemySizeY = this.enemyImg.height; // 150
  }

  draw() {
    const context = this.game.context;
    context.drawImage(this.enemyImg, this.x, this.y, this.enemySizeX / 4, this.enemySizeY / 4);
    // context.fillStyle = 'red';
    // context.fillRect(this.x, this.y, this.enemySizeX, this.enemySizeY);
  }
  randomPositionY() {
    let randomNumb = Math.floor(Math.random() * 4); //...
    const resultY = [300, 300, 300, 50]; // Possible enemies positions ==> more at ground level
    return resultY[randomNumb];
    //Try push new values when incrise difficult
  }
  randomPositionX() {
    let randomNumb = Math.floor(Math.random() * 4); //...
    const resultY = [1000, 1000, 1200, 1300]; // Possible coins positions
    return resultY[randomNumb];
  }

  runLogic() {
    if (this.speed < 10) {
      this.speed = 10;
    }
    this.x -= this.speed;
  }
  sortEnemy() {
    // Random type of enemy
  }
}
