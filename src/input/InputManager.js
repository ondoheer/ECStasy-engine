export default class InputManager {
    constructor() {
      this.keys = new Set();
      this.mouseButtons = new Set();
      this.mouseX = 0;
      this.mouseY = 0;
  
      window.addEventListener("keydown", (event) => this.keys.add(event.key));
      window.addEventListener("keyup", (event) => this.keys.delete(event.key));
  
      window.addEventListener("mousedown", (event) => this.mouseButtons.add(event.button));
      window.addEventListener("mouseup", (event) => this.mouseButtons.delete(event.button));
  
      window.addEventListener("mousemove", (event) => {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      });
    }
  
    isKeyPressed(key) {
      return this.keys.has(key);
    }
  
    isMouseButtonPressed(button) {
      return this.mouseButtons.has(button);
    }
  
    getMousePosition() {
      return { x: this.mouseX, y: this.mouseY };
    }
  }
  