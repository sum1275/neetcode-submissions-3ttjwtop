class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    // Sentinels
    this.head = new Node(0, 0); // head.next = most recently used
    this.tail = new Node(0, 0); // tail.prev = least recently used
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Remove node from its current position
  _remove(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    // (optional) cleanup
    node.prev = node.next = null;
  }

  // Insert node right after head (mark as most recent)
  _add(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    // Move to front (most recently used)
    this._remove(node);
    this._add(node);
    return node.value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.map.has(key)) {
      // Update existing
      const node = this.map.get(key);
      node.value = value;
      this._remove(node);
      this._add(node);
      return;
    }
    // New node
    const newNode = new Node(key, value);
    this.map.set(key, newNode);
    this._add(newNode);

    // Evict if over capacity
    if (this.map.size > this.capacity) {
      const lru = this.tail.prev; // least recently used
      this._remove(lru);
      this.map.delete(lru.key);
    }
  }
}