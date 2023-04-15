import QuadTree from "./QuadTree.js";
import AABB from "./AABB.js";

export default class PhysicsEngine {
  constructor(bounds, maxObjects, maxLevels) {
    this.bounds = bounds;
    this.maxObjects = maxObjects;
    this.maxLevels = maxLevels;
  }

  detectCollisions(entities) {
    const quadTree = new QuadTree(this.bounds, this.maxObjects, this.maxLevels);

    for (const entity of entities) {
      const collider = entity.getComponent("collider");
      if (collider) {
        quadTree.insert(entity);
      }
    }

    const collisions = [];

    for (const entity of entities) {
      const collider = entity.getComponent("collider");
      if (collider) {
        const candidates = quadTree.retrieve(entity);
        for (const candidate of candidates) {
          if (candidate !== entity && collider.AABB.overlaps(candidate.getComponent("collider").AABB)) {
            collisions.push([entity, candidate]);
          }
        }
      }
    }

    return collisions;
  }
}
