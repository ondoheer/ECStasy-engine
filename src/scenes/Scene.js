export default class Scene {
    constructor(name) {
      this.name = name;
      this.entities = new Set();
    }
  
    addEntity(entity) {
      this.entities.add(entity);
    }
  
    removeEntity(entity) {
      this.entities.delete(entity);
    }
  
    update(dt) {
      this.entities.forEach((entity) => {
        entity.update(dt);
      });
    }
  
    draw(ctx) {
      this.entities.forEach((entity) => {
        entity.draw(ctx);
      });
    }
  }
  