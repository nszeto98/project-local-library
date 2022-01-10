// count books array
function getTotalBooksCount(books) {
  return books.length
}

// count accounts array
function getTotalAccountsCount(accounts) {
  return accounts.length
}

// filter through books array and filter through each book.borrows to find what books are checked out
// filters books into ana array called borrowedBooks and counts using .length
function getBooksBorrowedCount(books) {
  let borrowedBooks = books.filter((book) => 
    book.borrows.filter((borrow) => borrow.returned === false).length > 0
  )
  return borrowedBooks.length
}

// will need .sort() in descening order by # of times that genre appears in the books array
// create new object listing the name and count of the books
// 5 or fewer objects using .slice(0,5)
function getMostCommonGenres(books) {
  let count = {}
  let result = []
  books.forEach((book) => {
    if (count[book.genre] != null) {
      count[book.genre]++
    } else count[book.genre] = 1
  })
  for (const [key, value] of Object.entries(count)) {
    result.push({
      "name" : key,
      "count" : value
    })
  }
    result.sort((genreA, genreB) => genreB.count - genreA.count) 
    return result.slice(0,5)
}

// create new array that counts how many times a book was checked out
// use book.borrows.length to count and set that number to a new object with "count" as the key
// use helper function to sort and slice
function getMostPopularBooks(books) {
  let mostPop = books.map((book) => {
    return {
      "name": book.title ,
      "count": book.borrows.length
    }
  })
  return helper(mostPop)
}

// determine how many times each book has been checked out
// add all different books from each author and book.borrows.length for each
// create new array of objects that each has a name and count key of each author and how many times their books have been borrowed
// use helper function to sort and slice
function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
    let currentAuthor = {
      "name": `${author.name.first} ${author.name.last}`,
      "count": 0
    }
    books.forEach((book) => {
      if(book.authorId === author.id) {
        currentAuthor.count += book.borrows.length
      }
    })
    result.push(currentAuthor)
  })
  return helper(result)
}

// HELPER function that sorts in descending order
// also slices to only include highest 5 entries and removes the rest if there are more
let helper = input => input.sort((first, second) => first.count > second.count ? -1 : 1).slice(0,5)

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
