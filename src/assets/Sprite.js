export default class Sprite {
    constructor(image, width, height) {
      this.image = image;
      this.width = width;
      this.height = height;
    }
  
    draw(ctx, x, y, width, height) {
      ctx.drawImage(this.image, 0, 0, this.width, this.height, x, y, width, height);
    }
  }
  