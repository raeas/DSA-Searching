'use strict';
//dewey decimal has 2 parts - genre and id.
//search for an array with the id of the given genre.
//then search within that array for the given id.

const LIBRARY = [
  {deweyNum: '000.13',
    title: 'Dictionary'},
  {deweyNum: '001.13',
    title: 'Dictionary2'},
  {deweyNum: '020.13',
    title: 'Dictionary5'},
  {deweyNum: '300.13',
    title: 'Dictionary7'},
  {deweyNum: '430.13',
    title: 'Dictionary9'},
  {deweyNum: '500.13',
    title: 'Dictionary0'},
];

function deweyFind (deweyNum, title, library, start=0, end=LIBRARY.length-1) {

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const book = LIBRARY[index];

  if (parseFloat(book.deweyNum) === deweyNum) {
    if (book.title === title) {
      return index;
    }
    return -1;
  }
  else if (parseFloat(book.deweyNum) < deweyNum) {
    return deweyFind(deweyNum, title, library, index+1, end);
  }
  else if (parseFloat(book.deweyNum) > deweyNum) {
    return deweyFind(deweyNum, title, library, start, index-1);
  }
  console.log(deweyFind())
}

deweyFind()