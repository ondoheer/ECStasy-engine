export default class ParticleFactory {
    constructor(createParticleFunction) {
      this.createParticleFunction = createParticleFunction;
    }
  
    createParticle(emitter) {
      return this.createParticleFunction(emitter);
    }
  }
  