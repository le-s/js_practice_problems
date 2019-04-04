class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function isBinarySearchTree(treeRoot) {

  // Determine if the tree is a valid binary search tree

  let stack = [treeRoot];
  let node = stack.pop();

  function validLeftTree(startNode, rootNode) {


    while (queue.length > 0) {

      if (startNode > rootNode) {
        return false;
      }

      if (node.left) {
        if (node.left.value > node.value) {
          return false;
        }

        queue.push(node.left);
      }

      if (node.right) {
        if (node.right.value < node.value) {
          return false;
        }

        queue.push(node.right);
      }
    }
  }

  function validRightTree(startNode, rootNode) {
    let queue = [startNode];
    let node;

    while (queue.length > 0) {
      node = queue.shift();

      if (node.value < rootNode) {
        return false;
      }

      if (node.left) {
        if (node.left.value > node.value) {
          return false;
        }

        queue.push(node.left);
      }

      if (node.right) {
        if (node.right.value < node.value) {
          return false;
        }

        queue.push(node.right);
      }
    }
  }

  validLeftTree(node.left, node.value);
  validRightTree(node.right, node.value);

  return true;
}

  // BFS Implementation
  // let queue = [treeRoot];
  // let node;

  // while (queue.length > 0) {
  //   node = queue.shift();

  //   if (node.left) {
  //     if (node.left.value > node.value) {
  //       return false;
  //     }

  //     queue.push(node.left);
  //   }

  //   if (node.right) {
  //     if (node.right.value < node.value) {
  //       return false;
  //     }

  //     queue.push(node.right);
  //   }
  // }

  // return true;
  // }