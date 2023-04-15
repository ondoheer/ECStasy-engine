export default class ParticleSystem {
    constructor(emitter, particleFactory, maxParticles) {
      this.emitter = emitter;
      this.particleFactory = particleFactory;
      this.maxParticles = maxParticles;
      this.particles = [];
    }
  
    update(dt) {
      // Spawn new particles
      while (this.particles.length < this.maxParticles) {
        const particle = this.particleFactory.createParticle(this.emitter);
        this.particles.push(particle);
      }
  
      // Update and remove dead particles
      this.particles = this.particles.filter((particle) => {
        particle.update(dt);
        return particle.isAlive();
      });
    }
  
    draw(ctx) {
      this.particles.forEach((particle) => {
        particle.draw(ctx);
      });
    }
  }
  