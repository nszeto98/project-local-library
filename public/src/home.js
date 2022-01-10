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

// use .reduce to find how many times a book genre appears
// create new var to hold current genre to not repeat ourselves
// check if the current genre is already in the accumulator or not, and add a new entry if not.  add count++ if the genre already exists
// helper function to sort and slice down to 5 list items
function getMostCommonGenres(books) {
  const ans = books.reduce((acc, book) => {
    const genre = book.genre
    const genreInfo = acc.find((item) => item.name === genre);
    if(!genreInfo) {
      const newGenreInfo = {
        name: genre,
        count: 1
      };
      acc.push(newGenreInfo)
    } else {
    genreInfo.count++
    }
    return acc
  }, []);
 return helper(ans)
}
  
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
// use forEach to loop through authors and count how many times each of their books have been borrowed
// create new function that returns author name and count of times their books have been borrowed
// use helper function to reduce down to 5 list items
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

// HELPER function that sorts and slices 
let helper = input => input.sort((first, second) => first.count > second.count ? -1 : 1).slice(0,5)

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
