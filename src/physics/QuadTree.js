import AABB from "./AABB.js";

export default class QuadTree {
  constructor(bounds, maxObjects = 10, maxLevels = 5, level = 0) {
    this.bounds = bounds;
    this.maxObjects = maxObjects;
    this.maxLevels = maxLevels;
    this.level = level;
    this.objects = [];
    this.nodes = [];
  }

  clear() {
    this.objects = [];
    for (const node of this.nodes) {
      node.clear();
    }
    this.nodes = [];
  }

  split() {
    const subWidth = this.bounds.width / 2;
    const subHeight = this.bounds.height / 2;

    this.nodes[0] = new QuadTree(
      new AABB(this.bounds.x + subWidth, this.bounds.y, subWidth, subHeight),
      this.maxObjects,
      this.maxLevels,
      this.level + 1
    );

    this.nodes[1] = new QuadTree(
      new AABB(this.bounds.x, this.bounds.y, subWidth, subHeight),
      this.maxObjects,
      this.maxLevels,
      this.level + 1
    );

    this.nodes[2] = new QuadTree(
      new AABB(this.bounds.x, this.bounds.y + subHeight, subWidth, subHeight),
      this.maxObjects,
      this.maxLevels,
      this.level + 1
    );

    this.nodes[3] = new QuadTree(
      new AABB(this.bounds.x + subWidth, this.bounds.y + subHeight, subWidth, subHeight),
      this.maxObjects,
      this.maxLevels,
      this.level + 1
    );
  }

  getIndex(entity) {
    const collider = entity.getComponent("collider");

    const verticalMidpoint = this.bounds.x + this.bounds.width / 2;
    const horizontalMidpoint = this.bounds.y + this.bounds.height / 2;

    const topQuadrant = collider.AABB.y + collider.AABB.height <
