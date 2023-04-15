# ECStasy Engine

ECStasy Engine is a lightweight, easy-to-use 2D game engine for JavaScript designed for simplicity and flexibility. The engine provides essential features for building 2D games, including a component-based architecture (Entity-Component-System pattern), asset management, physics, UI system, input handling, sound, and more.

## Getting Started

To use GameEngineJS in your project, include the source files in your HTML file or import them using a module bundler such as Webpack or Rollup.

```
<script type="module">
  import Engine from "./Engine.js";
  // Import other classes as needed
</script>
```

## Features

* Entity-Component-System (ECS) architecture
* Asset management system
* Basic physics engine with collision detection and resolution
* Quadtree for efficient collision detection
* Input handling (keyboard, mouse)
* Sound management
* Animated sprites
* UI system (menus, buttons, text)
* Particle system

## Usage

Create a new Engine instance and provide it with the ID of the canvas element you want to render the game on. The Engine class manages the game loop, input handling, and scene management.

```
import Engine from "./Engine.js";

const engine = new Engine("gameCanvas");
```

Create and configure your scenes, entities, and components as needed for your game. Use the provided components, or create your own by extending the base Component class.

```
import Scene from "./Scene.js";
import Entity from "./Entity.js";
import AnimatedSprite from "./AnimatedSprite.js";
import PhysicsComponent from "./PhysicsComponent.js";

// Create a scene
const scene = new Scene("main");

// Create an entity
const player = new Entity();

// Add components to the entity
player.addComponent(new AnimatedSprite(/* ... */));
player.addComponent(new PhysicsComponent(/* ... */));

// Add the entity to the scene
scene.addEntity(player);

// Add the scene to the engine
engine.sceneManager.addScene(scene);
```
Start the game loop by calling the start method on the Engine instance.

```
engine.start();

```



## Examples

For a complete example of how to use GameEngineJS, see the examples folder, which contains a simple Pong game implementation using the engine.

TODO

## License

GameEngineJS is licensed under the MIT License. See the LICENSE file for more information.

### Particles

```
import Particle from "./Particle.js";
import ParticleFactory from "./ParticleFactory.js";
import ParticleSystem from "./ParticleSystem.js";

const particleEmitter = { x: 100, y: 100 };

const particleFactory = new ParticleFactory((emitter) => {
  const angle = Math.random() * 2 * Math.PI;
  const speed = Math.random() * 50;
  const vx = Math.cos(angle) * speed;
  const vy = Math.sin(angle) * speed;
  const life = 1000 + Math.random() * 2000;
  const color = "rgba(255, 255, 255, 0.5)";

  return new Particle(emitter.x, emitter.y, vx, vy, life, color);
});

const particleSystem = new ParticleSystem(particleEmitter, particleFactory, 100);

```