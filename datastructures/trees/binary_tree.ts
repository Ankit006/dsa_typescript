type treeElementType = string | number | boolean;

class TreeNode {
  value: treeElementType;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(element: treeElementType) {
    this.value = element;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }

  insertWithLoop(element: treeElementType) {
    const nodeData = new TreeNode(element);
    if (this.root === null) {
      this.root = nodeData;
    } else {
      let current: TreeNode = this.root;
      while (true) {
        if (current.value > nodeData.value) {
          if (current.left === null) {
            current.left = nodeData;
            break;
          } else {
            current = current.left;
            continue;
          }
        } else {
          if (current.right === null) {
            current.right = nodeData;
            break;
          } else {
            current = current.right;
            continue;
          }
        }
      }
    }
  }

  find(element: treeElementType): TreeNode | number {
    if (this.root !== null) {
      let current: TreeNode = this.root;
      while (true) {
        if (element === current.value) {
          return current;
        } else {
          if (element > current.value) {
            if (current.right !== null) {
              current = current.right;
            } else {
              return -1;
            }
          } else {
            if (current.left !== null) {
              current = current.left;
            } else {
              return -1;
            }
          }
        }
      }
    } else {
      return -1;
    }
  }

  BFS() {
    if (this.root !== null) {
      const queue: TreeNode[] = [this.root];
      const data: treeElementType[] = [];

      while (queue.length > 0) {
        if (typeof queue[0] !== "undefined") {
          const node = queue.shift();
          if (node !== undefined) {
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
          }
        }
      }
      return data;
    }
  }

  DFSPreOrder() {
    if (this.root !== null) {
      const values: treeElementType[] = [];
      function traverse(nodeData: TreeNode) {
        values.push(nodeData.value);
        if (nodeData.left !== null) traverse(nodeData.left);
        if (nodeData.right !== null) traverse(nodeData.right);
      }
      traverse(this.root);
      return values;
    }
  }

  DFSPostOrder() {
    if (this.root !== null) {
      const values: treeElementType[] = [];

      function traverse(nodeData: TreeNode) {
        if (nodeData.left) traverse(nodeData.left);
        if (nodeData.right) traverse(nodeData.right);
        values.push(nodeData.value);
      }
      traverse(this.root);
      return values;
    }
  }
  DFSInOrder() {
    if (this.root !== null) {
      const values: treeElementType[] = [];

      function traverse(nodeData: TreeNode) {
        if (nodeData.left) traverse(nodeData.left);
        values.push(nodeData.value);
        if (nodeData.right) traverse(nodeData.right);
      }
      traverse(this.root);
      return values;
    }
  }
}

