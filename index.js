function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books') // creates a GET request to get the data from this webpage
  .then(resp => resp.json()) // turns the response into JSON
  .then(json => renderBooks(json)) // takes this JSON and does something with it. 
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
