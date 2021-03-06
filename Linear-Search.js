function indexOf(array, value) {
  // loop through an array, checking each value until you find a value that matches.
  for (let i = 0; i < array.length; i++) {
      if (array[i] == value) {
        //At that point, you return i, the index that you are currently on.
          return i;
      }
  }
  //If you reach the end of the loop without finding the item then you return -1, indicating that the item wasn't found.
  return -1;
};
//The best-case time complexity is O(1),
//The worst case is O(n), as you have to search through the entire array to find that a key doesn't exist. 
//And the average case is also O(n), which would take place when the item you are looking for is in the center of the array.