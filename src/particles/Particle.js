export default class Particle {
    constructor(x, y, vx, vy, life, color) {
      this.x = x;
      this.y = y;
      this.vx = vx;
      this.vy = vy;
      this.life = life;
      this.color = color;
    }
  
    update(dt) {
      this.x += this.vx * dt;
      this.y += this.vy * dt;
      this.life -= dt;
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, 2, 2);
    }
  
    isAlive() {
      return this.life > 0;
    }
  }
  