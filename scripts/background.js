const backgroundImage = new Image()
backgroundImage.src = './images/image1000x500.png';

class Background {
  constructor(game) {
    this.game = game;
    this.width = game.width;
    this.height = game.height;
    this.backgroundImage = backgroundImage
    this.imageWidth = this.backgroundImage.width;
    this.imageheight = this.backgroundImage.height;
    this.x = 0;
    this.speed = game.difficult.speed;
  }

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
