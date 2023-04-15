import UIElement from "./UIElement.js";

export default class Button extends UIElement {
  constructor(x, y, width, height, text, onClick) {
    super(x, y, width, height);
    this.text = text;
    this.onClick = onClick;
  }

  draw(ctx) {
    if (this.visible) {
      ctx.fillStyle = "blue";
      ctx.fillRect(this.x, this.y, this.width, this.height);

      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText(this.text, this.x + this.width / 2 - ctx.measureText(this.text).width / 2, this.y + this.height / 2 + 8);
    }
  }

  update(dt, inputManager) {
    if (inputManager.isMouseButtonPressed(0) && this.containsPoint(inputManager.getMousePosition().x, inputManager.getMousePosition().y)) {
      this.onClick();
    }
  }
}
