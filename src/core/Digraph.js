export class Digraph {
  constructor() {
    this.adj = new Map();
  }

  addNode(node) {
    if (!this.adj.has(node)) this.adj.set(node, []);
  }

  addEdge(from, to, weight = 1) {
    this.addNode(from);
    this.addNode(to);
    const edges = this.adj.get(from);
    const existing = edges.find(e => e.target === to);
    if (!existing) edges.push({ target: to, weight });
    else existing.weight = weight;
  }

  getWeight(from, to) {
    const edges = this.adj.get(from);
    if (!edges) return undefined;
    const edge = edges.find(e => e.target === to);
    return edge ? edge.weight : undefined;
  }

  removeEdge(from, to) {
    const edges = this.adj.get(from);
    if (!edges) return;
    this.adj.set(from, edges.filter(e => e.target !== to));
  }

  removeNode(node) {
    this.adj.delete(node);
    for (const [from, edges] of this.adj.entries()) {
      this.adj.set(from, edges.filter(e => e.target !== node));
    }
  }

  getNeighbors(node) {
    return (this.adj.get(node) || []).map(e => e.target);
  }

  hasEdge(from, to) {
    const edges = this.adj.get(from);
    return edges?.some(e => e.target === to) || false;
  }

  toJSON() {
    const obj = {};
    for (const [node, edges] of this.adj.entries()) {
      obj[node] = edges.map(({ target, weight }) => ({ target, weight }));
    }
    return obj;
  }
}
