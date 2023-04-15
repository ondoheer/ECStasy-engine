import UIElement from "./UIElement.js";

export default class Menu extends UIElement {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.elements = [];
  }

  addElement(element) {
    this.elements.push(element);
  }

  removeElement(element) {
    const index = this.elements.indexOf(element);
    if (index !== -1) {
      this.elements.splice(index, 1);
    }
  }

  draw(ctx) {
    if (this.visible) {
      this.elements.forEach((element) => {
        element.draw(ctx);
      });
    }
  }

  update(dt, inputManager) {
    this.elements.forEach((element) => {
      element.update(dt, inputManager);
    });
  }
}
