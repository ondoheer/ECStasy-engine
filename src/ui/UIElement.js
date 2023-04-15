export default class UIElement {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.visible = true;
    }
  
    draw(ctx) {
      if (this.visible) {
        // Override this method in derived classes to draw the UI element
      }
    }
  
    update(dt) {
      // Override this method in derived classes to update the UI element
    }
  
    containsPoint(x, y) {
      return x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height;
    }
  }
  