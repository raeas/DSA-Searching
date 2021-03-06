//4 argument: the array, the value to search for, optional start and end indices. 
//If start and end indices are omitted then the function uses the start and end of the array.
function binarySearch(array, value, start, end) {
    // if start index is undefined, start at 0 else start at the start index
    var start = start === undefined ? 0 : start;
    // if end index is undefined, end at arr.length else end at the end index
    var end = end === undefined ? array.length : end;

    //If the start index is greater than the end index then clearly the value hasn't been found so you return -1
    if (start > end) {
        return -1;
    }

    //pick an index in the middle of the start and end indices and check the item at that index
    const index = Math.floor((start + end) / 2); // Round a number downward to its nearest integer: Math.floor(1.6) => 1
    const item = array[index];

    console.log(start, end);
    // If the item is equal to the value then you have found the correct index.
    if (item == value) {
        return index;
    }
    //Otherwise, you recursively search in either the left half or right half of the sorted array 
    //depending on whether the item was less than or greater than the value.
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

//With each iteration, you can cut the area you have to search in half; 
//this means that the worst and average-case running times are both O(log(n)).