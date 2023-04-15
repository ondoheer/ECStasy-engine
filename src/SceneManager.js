export default class SceneManager {
    constructor() {
      this.scenes = new Map();
      this.currentScene = null;
    }
  
    addScene(scene) {
      this.scenes.set(scene.name, scene);
    }
  
    removeScene(sceneName) {
      if (this.scenes.has(sceneName)) {
        if (this.currentScene === this.scenes.get(sceneName)) {
          this.currentScene = null;
        }
        this.scenes.delete(sceneName);
      }
    }
  
    switchScene(sceneName) {
      if (this.scenes.has(sceneName)) {
        this.currentScene = this.scenes.get(sceneName);
      }
    }
  
    update(dt) {
      if (this.currentScene) {
        this.currentScene.update(dt);
      }
    }
  
    draw(ctx) {
      if (this.currentScene) {
        this.currentScene.draw(ctx);
      }
    }
  }
  