import { Digraph } from '../src/core/Digraph.js';
import assert from 'assert';

const g = new Digraph();
g.addEdge('A', 'B', 3);
g.addEdge('A', 'C');
g.addEdge('B', 'C', 2);

assert.strictEqual(g.getWeight('A', 'B'), 3);
assert.strictEqual(g.getWeight('A', 'C'), 1);
assert.ok(g.hasEdge('B', 'C'));
g.removeEdge('A', 'B');
assert.ok(!g.hasEdge('A', 'B'));

console.log('All tests passed.');
