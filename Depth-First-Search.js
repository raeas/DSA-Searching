//In a DFS you start from a given node (usually the root) and traverse as far as you can down
//When you reach a node, which has no children to visit or all nodes on its path have been visited, 
//you start backtracking.

//To start, let's set up a basic binary tree structure from previous BST lesson

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right = null;
  }

  //DFS algorithm - IN-ORDER traversal (search)
  //the algorithm will simply traverse the nodes adding them to a values array
  dfs(values=[]) {
    //If there is a left-hand branch then you recursively search the nodes there.
    if (this.left) {
        values = this.left.dfs(values);
    }
    //then add the value at the current node to the array
    values.push(this.value);

    //recursively search the right-hand branch
    if (this.right) {
        values = this.right.dfs(values);
    }
    return values;
  }

}

