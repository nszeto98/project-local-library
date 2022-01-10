// 2 parameters, accounts and ID
// search accounts array using find() to match account.id to input id
// return object with account information
function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id===id)
  return found
}

// use sort() to arrange accounts array in order of last name
// make sure all names are ordered properly by using .toLowerCase()
// return accounts array
function sortAccountsByLastName(accounts) {
  accounts.sort((accA, accB) => accA.name.last.toLowerCase() > accB.name.last.toLowerCase() ? 1 : -1)
  return accounts
}

// two parameters single account and books
// see how many times that account ID appears in the books.borrows array and log to accumulator var
// return accumulator var
function getTotalNumberOfBorrows(account, books) {
  let acc = 0
  for (let i = 0; i<books.length; i++) {
    for (let j = 0; j<books[i].borrows.length; j++) {
      if (books[i].borrows[j].id === account.id)
        acc ++
    }
  }
  return acc
} 

// 3 parameters, single account object, all books, all authors
// loop through each book in books and see what books are item.returned === false
// save non-returned books to empty taken var
// forEach book in taken, we set author info to store the author with matching ID and set that to the book["authors"] object
function getBooksPossessedByAccount(account, books, authors) {
  let taken = [];
  books.forEach((book) => {
    if (book.borrows.find((item) => item.id===account.id && item.returned === false)) 
      taken.push(book)
  })
  taken.forEach((book) => {
    let authorInfo = authors.find((author) => author.id === book.authorId) 
    book["author"] = authorInfo
  })
  return taken
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
