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

function isBalanced(treeRoot, depth=0) {

  // Determine if the tree is superbalanced
  let lowestDepth;

  if (!treeRoot.left && !treeRoot.right) {
    if (lowestDepth && lowestDepth + 2 > depth) {
      return false;
    }

    if (!lowestDepth || lowestDepth > depth) {
      lowestDepth = depth;
    }
  }

  isBalanced(treeRoot.left, depth + 1)
  isBalanced(treeRoot.right, depth + 1)
  return true;
}

let treeRoot = new BinaryTreeNode(5);
let leftNode = treeRoot.insertLeft(8);
leftNode.insertLeft(1);
leftNode.insertRight(2);
let rightNode = treeRoot.insertRight(6);
rightNode.insertLeft(3);
rightNode.insertRight(4);

isBalanced(treeRoot);