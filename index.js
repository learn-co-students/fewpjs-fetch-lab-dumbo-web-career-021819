// const fetchBooks = async () => {
// 	const resp = await fetch('https://anapioficeandfire.com/api/books')
// 	const data = await resp.json()
// 	renderBooks(data)
// }

const fetchBooks = async () {
	const resp = await fetch('https://anapioficeandfire.com/api/books')
	const data = await resp.json()
	renderBooks(data)
}

// function fetchBooks() {
// 	fetch('https://anapioficeandfire.com/api/books')
// 		.then(res => res.json())
// 		.then(data => {
// 			renderBooks(data)
// 		})
// }

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
