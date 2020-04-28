class Background {
  constructor(game) {
    this.game = game;
    this.width = game.width;
    this.height = game.height;
    this.backgroundImage = new Image();
    this.backgroundImage.src = './images/bg provisiorio.png';
    this.imageWidth = this.backgroundImage.width;
    this.x = 3000;
  }
  draw() {
    const context = this.game.context;
    const bg = this.backgroundImage;
    const speed = this.game.speed;
    if (this.imageWidth - this.x - speed > 0) {
      context.drawImage(bg, this.imageWidth - this.x - speed, 0, 3000, 500, 0, 0, 3000, 500);
    }
    console.log(this.imageWidth - this.x - speed);
  }

  drawGrid() {
    const context = this.game.context;
    context.strokeStyle = 'black';
    context.lineWidth = 2;
    for (let i = 0; i <= this.width / 50; i++) {
      context.beginPath();
      context.moveTo(i * 50, 0);
      context.lineTo(i * 50, this.width);
      context.closePath();
      context.stroke();
      //console.log(1)
    }
    for (let i = 0; i <= this.height / 50; i++) {
      context.beginPath();
      context.moveTo(0, i * 50);
      context.lineTo(this.width, i * 50);
      context.closePath();
      context.stroke();
      //console.log(1)
    }
  }
}

// BG JUST MOVE ONE TIME

// const context = this.game.context;
// if ((this.x -= speed) > 0) {
//   context.drawImage(
//     this.backgroundImage,
//     this.imageWidth - this.x - speed,
//     0,
//     3000,
//     500,
//     0,
//     0,
//     3000,
//     500
//   );
// } else {
//   context.fillStyle = 'yellow';
//   context.fillRect(600, 500, 3000, 300);