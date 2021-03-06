
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
  //In a DFS you start from a given node (usually the root) and traverse as far as you can down
  //When you reach a node, which has no children to visit or all nodes on its path have been visited, 
  //you start backtracking.
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
  //Breadth-first search works across the rows of a tree. So the top row will be handled 1st, 
  //then the 2nd row, and so on. The tree is visited level by level. In order to carry out a BFS, 
  //you need a "first-in, first-out" (FIFO) queue so you can store all the siblings in the queue and 
  //process them in the correct order. When you visit a node you add it to the queue. The nodes are 
  //then removed from the queue, and their children are visited, adding more values onto the queue.
  bfs(tree, values = []) {
    const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
    const node = tree.root;
    queue.enqueue(node);
    while (queue.length) {
        const node = queue.dequeue(); //remove from the queue
        values.push(node.value); // add that value from the queue to an array

        if (node.left) {
            queue.enqueue(node.left); //add left child to the queue
        }

        if (node.right) {
            queue.enqueue(node.right); // add right child to the queue
        }
    }
    return values;
  }
}

