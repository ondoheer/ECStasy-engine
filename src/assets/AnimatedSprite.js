import Sprite from "./Sprite.js";

export default class AnimatedSprite extends Sprite {
  constructor(image, frameWidth, frameHeight, frameSpeed, numFrames, loop = true) {
    super(image, frameWidth, frameHeight);
    this.frameSpeed = frameSpeed;
    this.numFrames = numFrames;
    this.loop = loop;

    this.currentFrame = 0;
    this.frameCounter = 0;
  }

  update(dt) {
    this.frameCounter += dt;

    if (this.frameCounter >= this.frameSpeed) {
      this.frameCounter = 0;
      this.currentFrame += 1;

      if (this.currentFrame >= this.numFrames) {
        if (this.loop) {
          this.currentFrame = 0;
        } else {
          this.currentFrame = this.numFrames - 1;
        }
      }
    }
  }

  draw(ctx, x, y, width, height) {
    ctx.drawImage(
      this.image,
      this.currentFrame * this.frameWidth,
      0,
      this.frameWidth,
      this.frameHeight,
      x,
      y,
      width,
      height
    );
  }
}
