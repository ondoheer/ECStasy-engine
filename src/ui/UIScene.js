import Scene from "./Scene.js";
import Menu from "./Menu.js";

export default class UIScene extends Scene {
  constructor(name) {
    super(name);
    this.menu = new Menu(0, 0, 0, 0);
  }

  addUIElement(element) {
    this.menu.addElement(element);
  }

  removeUIElement(element) {
    this.menu.removeElement(element);
  }

  update(dt) {
    super.update(dt);
    this.menu.update(dt, this.inputManager);
  }

  draw(ctx) {
    super.draw(ctx);
    this.menu.draw(ctx);
  }
}
