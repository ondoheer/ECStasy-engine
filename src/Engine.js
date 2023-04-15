import SceneManager from "./SceneManager.js";
import InputManager from "./InputManager.js";

export default class Engine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.inputManager = new InputManager();
    this.sceneManager = new SceneManager();

    this.previousTimestamp = null;
  }

  start() {
    this.gameLoop(0);
  }

  gameLoop(timestamp) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const dt = timestamp - (this.previousTimestamp || timestamp);
    this.previousTimestamp = timestamp;

    this.sceneManager.update(dt);
    this.sceneManager.draw(this.ctx);

    requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
  }
}
