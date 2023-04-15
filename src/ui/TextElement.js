import UIElement from "./UIElement.js";

export default class TextElement extends UIElement {
  constructor(x, y, text, fontSize = 20, fontColor = "black", fontFamily = "Arial") {
    super(x, y, 0, 0);
    this.text = text;
    this.fontSize = fontSize;
    this.fontColor = fontColor;
    this.fontFamily = fontFamily;
  }

  draw(ctx) {
    if (this.visible) {
      ctx.fillStyle = this.fontColor;
      ctx.font = `${this.fontSize}px ${this.fontFamily}`;
      ctx.fillText(this.text, this.x, this.y + this.fontSize);
    }
  }

  update(dt) {
    // Override this method in derived classes to update the Text element
  }
}
