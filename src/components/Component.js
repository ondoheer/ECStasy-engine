export default class Component {
    constructor(name) {
      this.name = name;
      this.entity = null;
    }
  
    update(dt) {
      // Override this method in derived components to provide custom update logic
    }
  
    draw(ctx) {
      // Override this method in derived components to provide custom draw logic
    }
  }
  