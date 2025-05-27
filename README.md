# DGT – Directed Graph Toolkit

**DGT** is a modular, lightweight JavaScript library for working with **directed graphs (digraphs)** in both Node.js and the browser.

> 📦 Published as [`@buca/dgt`](https://www.npmjs.com/package/@buca/dgt)

---

## ✨ Features

- Directed graphs with weighted edges
- Add/remove nodes and edges
- Query neighbors and edge weights
- Export graph as JSON
- Small and fast

---

## 📦 Installation

```bash
npm install @buca/dgt
```

---

## 🚀 Usage

```javascript
import { Digraph } from '@buca/dgt';

const g = new Digraph();
g.addEdge('A', 'B', 3);
g.addEdge('A', 'C');

console.log(g.getNeighbors('A'));    // ['B', 'C']
console.log(g.getWeight('A', 'B'));  // 3
```

---

## 🧪 Run Tests

```bash
npm test
```