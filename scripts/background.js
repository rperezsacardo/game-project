const backgroundImage = new Image();
backgroundImage.src = './images/image1000x500.png'; // Not using now, but this width and height are.

const imageUrls = [];

for (let i = 1; i <= 8; i++) {
  imageUrls.push(`./images/background_layres/bg_layer_0${i}.png`);
  //images / background / bg_layer_1.png;
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
    this.imageWidth = this.width; 
    this.imageHeight = this.height; 
    this.x = 0;
    this.speed = game.difficult.speed;
  }

  draw() {
    const context = this.game.context;
    let speed = this.speed;

    if (this.imageWidth) {
      this.x = this.x % this.imageWidth;
    }

    for (let i = 0; i < backgroundLayers.length; i++) {
      this.x -= speed;
      speed = (speed / backgroundLayers.length) * i; // reduce the speed of the first layers
      const layer = backgroundLayers[i];

      context.drawImage(layer, this.x - speed, 0);

      context.drawImage(layer, this.x + this.backgroundImage.width - speed, 0);
    }
  }
}
