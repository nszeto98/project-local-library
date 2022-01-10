// simple find() on authors array to find what author has matching id as input
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

// find what books have the matching id as input id using .find() where book.id (array) === id (input)
function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

// takes in book array to determine whether book is borrowed or returned
// return array with two arrays inside
// one array is all checked out books and other is all returned books
function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter((book) => book.borrows.some((borrow) => !borrow.returned));
  let returned = books.filter((book) => book.borrows.every((borrow) => borrow.returned));
  let result = [[...borrowed], [...returned]] 
  return result
}

// use map() to see what books are being borrowed and then use find to see what accounts match the borrowed book's id
// make sure list is only 10 long
function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id)
    return {...borrow, ...account}
  })
  .slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
