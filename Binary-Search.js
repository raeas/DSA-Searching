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


/////Exercise How Many Searches/////
//A. Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the 
//recursive binary search algorithm, identify the sequence of numbers that each recursive call 
//will search to try and find 8.

// arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
// value = 8
// item = arr[4] // 11
// 1. 11 > 8 => return binarySearch()
// 2. 10 > 8 => return binarySearch()
// 3. 9 > 8 => return binarySearch()
// 4. 8 = 8 => return index // 3

//B. Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and 
//using the recursive binary search algorithm, identify the sequence 
//of numbers that each recursive call will search to try and find 16.

// array = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
// value = 16
// start = 0
// end = 9

// item = arr[4] // 11
// start index = 4 // 11
// end index = 9 // 18
// 1. 11 < 16 => return binarySearch(array, value, index + 1, end)
// start index = (4 + 1) = 5
// end index = 9
// item = arr[5] // 12
// 2. 12 < 16 => return binarySearch(array, value, index + 1, end)
// start index = (5+1) = 6 
// end index = 9
// item = arr[6] // 14
// 3. 14 < 16 => return binarySearch(array, value, index + 1, end)
// start index = (6 + 1) = 7 
// end index = 9
// item = arr[7]
// 4. 15 < 16 => return binarySearch(array, value, index + 1, end)
// start index = (7 + 1) = 8 
// end index = 9
// item = arr[8]
// 5. 17 > 16 => return binarySearch(array, value, start, index - 1)
// start index = 8
// end index = 7
// 8 > 7 => Return -1
// Item not found

