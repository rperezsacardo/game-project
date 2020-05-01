class Enemy {
  constructor(game) {
    this.game = game;
    this.x = this.randomPositionX();
    this.y = this.randomPositionY();
    this.enemySizeX = 100;
    this.enemySizeY = 100;
    this.speed = game.difficult.speed;
    this.updateSpeed = this.game.updateSpeed * 2;
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
    let randomNumb = Math.floor(Math.random() * 5); //...
    const resultY = [200, 350, 150, 223, 50]; // Possible enemies positions ==> more at ground level
    return resultY[randomNumb];
    //Try push new values when incrise difficult
  }
  randomPositionX() {
    let randomNumb = Math.floor(Math.random() * 4); //...
    const resultY = [1000, 1000, 1200, 1300]; // Possible coins positions
    return 1000; //resultY[randomNumb];
  }

  runLogic() {
    let speed = this.speed;
    if (speed < 20) {
      speed = 20;
    }
    this.x -= speed;
  }
  sortEnemy() {
    // Random type of enemy
  }
}
