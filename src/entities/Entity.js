export default class Entity {
    constructor() {
      this.id = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      this.components = new Map();
    }
  
    addComponent(component) {
      component.entity = this;
      this.components.set(component.name, component);
    }
  
    removeComponent(componentName) {
      if (this.components.has(componentName)) {
        this.components.get(componentName).entity = null;
        this.components.delete(componentName);
      }
    }
  
    getComponent(componentName) {
      return this.components.get(componentName);
    }
  
    update(dt) {
      this.components.forEach((component) => {
        component.update(dt);
      });
    }
  
    draw(ctx) {
      this.components.forEach((component) => {
        component.draw(ctx);
      });
    }
  }

  