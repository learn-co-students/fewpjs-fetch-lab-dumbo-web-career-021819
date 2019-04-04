function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then((response)=>{
    return response.json()
  }).then((bookPromise) => {renderBooks(bookPromise)})
}

function renderBooks(json) {
  const main = document.querySelector('body')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
