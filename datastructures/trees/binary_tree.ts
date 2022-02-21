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

  find(element:treeElementType):TreeNode|number{
    if(this.root !== null){
      let current:TreeNode = this.root;
      while(true){
        if(element === current.value){
           return current;
        }else{
          if(element > current.value){
            if(current.right !== null){
              current = current.right;
            }else{
              return -1;
            }
          }else{
            if(current.left !== null){
              current = current.left
            }else{
              return -1;
            }
          }
        }
      }
    }else{
      return -1;
    }
  }

  
}

