function fetchBooks() {
  const gameOfThronesUrl = "https://anapioficeandfire.com/api/books";
  fetch(gameOfThronesUrl).then((response) => {
    let json = response.json();
    return json;
  });
};

function renderBooks(json) {
  const main = document.querySelector('main');
  json.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = `<h2>${book.name}</h2>`;
    main.appendChild(h2);
  });
};

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
