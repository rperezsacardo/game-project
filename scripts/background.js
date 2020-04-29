class Background {
  constructor(game) {
    this.game = game;
    this.width = game.width;
    this.height = game.height;
    this.backgroundImage = new Image();
    this.backgroundImage.src = './images/image1000x500.png';
    this.imageWidth = this.backgroundImage.width;
    this.imageheight = this.backgroundImage.height;
    this.x = 0;
    this.speed = game.speed;
  }
  // draw2() {
  //   const context = this.game.context;
  //   const bg = this.backgroundImage;
  //   const speed = this.game.speed;
  //   context.drawImage(bg, this.x, 0);
  //   context.drawImage(bg, this.x + this.imageWidth, 0);
  //   context.drawImage(bg, this.x + this.imageWidth * 2, 0);

  //   context.fillStyle = 'yellow';
  //   context.fillRect(600, 500, 3000, 300);
  // }
  draw() {
    const speed = this.speed;
    const context = this.game.context;
    const bg = this.backgroundImage;
    context.drawImage(bg, this.x - speed, 0);
    context.drawImage(bg, this.x + this.imageWidth - speed, 0);
    context.drawImage(bg, this.x + this.imageWidth * 2 - speed, 0);
  }

  loopDraw() {
    const speed = this.speed;
    this.x -= speed;

    if (this.imageWidth) {
      this.x = this.x % this.imageWidth;
    }

    setTimeout(this.loopDraw, 1000 / 60);
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
// ---------------------------------------------
// draw() {
//   // BG JUST MOVE ONE TIME
//   const speed = this.game.speed;
//   const context = this.game.context;
//   if ((this.x -= speed) > 0) {
//     context.drawImage(
//       this.backgroundImage,
//       this.imageWidth - this.x - speed, // image start point
//       0, // image start  point
//       3000, // image subretangle
//       500, // image subrettangle
//       0, // canvas start point
//       0, // canvas stat point
//       this.imageWidth, // final scale
//       this.height //  final scale
//     );
//   }
// }
