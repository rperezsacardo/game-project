const eggImg = new Image();
eggImg.src = './images/ovo_02.png';

class Results {
  constructor(game) {
    this.game = game;
    this.width = this.game.width;
    this.height = this.game.height;
    this.eggImg = eggImg;
    this.eggSizeX = this.eggImg.width; // 50
    this.eggSizeY = this.eggImg.height; // 50
  }

  drawGameOver() {
    const context = this.game.context;
    const gameStatus = this.game.gameStatus;
    const collision = this.game.player.checkCollisionEnemy();

    if (!gameStatus && collision) {
      const context = this.game.context;

      context.save();
      const gradient = context.createRadialGradient(500, 250, 30, 500, 250, 800);
      gradient.addColorStop(0, '#FFDB83');
      gradient.addColorStop(1, '#D1A44F');
      context.restore();

      context.fillStyle = gradient;
      context.fillRect(0, 0, this.width, 500);

      context.save();
      const txt = 'Game Over';
      context.font = '48px Chelsea Market';
      context.fillStyle = 'white'; //'#5BA660';
      context.fillText(txt, 350, 250);
      context.restore();

      context.save();
      const txt2 = 'try again';
      context.font = '32px Chelsea Market';
      context.fillStyle = 'white'; //'#5BA660';
      context.fillText(txt2, 412, 300);
      context.restore();
    }
  }

  drawWin() {
    const gameWon = this.game.gameWon;
    if (gameWon) {
      const context = this.game.context;

      context.save();
      const gradient = context.createRadialGradient(500, 250, 30, 500, 250, 800);
      gradient.addColorStop(0, '#FFDB83');
      gradient.addColorStop(1, '#D1A44F');
      context.restore();

      context.fillStyle = gradient;
      context.fillRect(0, 0, this.width, 500);

      context.save();
      const txt = 'You win';
      context.font = '70px Chelsea Market';
      context.strokeStyle = '#97711B';
      context.lineWidth = 2;
      context.textAlign = 'center';
      context.fillStyle = 'white'; //'#5BA660';
      context.fillText(txt, 500, 200);
      context.strokeText(txt, 500, 200);
      context.fill();
      context.stroke();
      context.restore();

      context.save();
      const txt2 = 'you collected';
      context.font = '32px Chelsea Market';
      context.strokeStyle = '#97711B';
      context.lineWidth = 1;
      context.textAlign = 'center';
      context.fillStyle = 'white'; //'#5BA660';
      context.fillText(txt2, 500, 250);
      context.strokeText(txt2, 500, 250);
      context.fill();
      context.stroke();
      context.restore();

      context.drawImage(this.eggImg, 500, 330, this.eggSizeX / 3, this.eggSizeY / 3);
      // canvas.width / 2 - image.width / 2,
      //     canvas.height / 2 - image.height / 2

      context.save();
      const totalCoins = this.game.difficult.totalCoins.toString();
      context.font = '48px Caesar Dressing';
      context.textAlign = 'center';
      context.fillStyle = 'white'; //'#5BA660';
      context.strokeStyle = '#97711B';
      context.lineWidth = 2;
      context.fillText(totalCoins, 450, 375);
      context.strokeText(totalCoins, 450, 375);
      context.fill();
      context.stroke();
      context.restore();
    }
  }
}
