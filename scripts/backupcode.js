const backgroundImage = new Image();
backgroundImage.src = './images/image1000x500.png'; // Not using now, but this width and height are.

const imageUrls = [];

for (let i = 1; i <= 8; i++) {
  imageUrls.push(`./images/background_layres/bg_layer_0${i}.png`);
  images / background / bg_layer_1.png;
}

const backgroundLayers = imageUrls.map((url) => {
  const image = new Image();
  image.src = url;
  return image;
});

class Background {
  constructor(game) {
    this.game = game;
    this.width = game.width;
    this.height = game.height;
    this.backgroundImage = backgroundImage;
    this.imageWidth = this.backgroundImage.width;
    this.imageheight = this.backgroundImage.height;
    this.x = 0;
    this.speed = game.difficult.speed;
  }

  draw() {
    // const speed = this.speed;
    const context = this.game.context;
    for (let i = 0; i < backgroundLayers.length; i++) {
      let speed = (this.speed / backgroundLayers.length) * i; // reduce the speed of the first layres
      const layer = backgroundLayers[i];
      // const outset = (distance * i / 5) % width;
      context.drawImage(layer, this.x - speed, 0);
      context.drawImage(layer, this.x + this.imageWidth - speed, 0);
      context.drawImage(layer, this.x + this.imageWidth * 2 - speed, 0);
    }
  }

  loopDraw() {
    const speed = this.speed;
    this.x -= speed;

    if (this.imageWidth) {
      this.x = this.x % this.imageWidth;
    }

    setTimeout(this.loopDraw, 1000 / 60);
  }
}
