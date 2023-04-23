const books = [
  {
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70
  },
  {
   author: "Сюзанна Кларк",
   name: "Джонатан Стрейндж і м-р Норрелл",
  },
  {
    name: "Дизайн. Книга для недизайнерів.",
    price: 70
  },
  {
    author: "Алан Мур",
    name: "Неономікон",
    price: 70
  },
  {
   author: "Террі Пратчетт",
   name: "Рухомі картинки",
   price: 40
  },
  {
   author: "Анґус Гайленд",
   name: "Коти в мистецтві",
  }
];

const rootDiv = document.getElementById('root');
const bookList = creatingListBooks(books);
 rootDiv.appendChild(bookList);

    function creatingListBooks(books) {
       const bookList = document.createElement('ul');
        books.forEach(book => {

        try {
            if (!book.hasOwnProperty('author')) {

                throw new Error(`"${book.name}" "${book.price}$" Відсутні дані: author`);

            }
            if (!book.hasOwnProperty('name')) {

                throw new Error(`"${book.author}" "${book.price}$" Відсутні дані: name`);

            }
            if (!book.hasOwnProperty('price')) {

                throw new Error(`"${book.author}" "${book.name}" Відсутні дані: price`);

            }

                    const bookListItem = document.createElement('li');
                    const bookName = document.createElement('h3');
                    const bookAuthor = document.createElement('p');
                    const bookPrice = document.createElement('p');

                    bookName.innerText = book.name;
                    bookAuthor.innerText = `author: ${book.author}`;
                    bookPrice.innerText = `price: ${book.price}$`;

                        bookListItem.appendChild(bookName);
                        bookListItem.appendChild(bookAuthor);
                        bookListItem.appendChild(bookPrice);
                        bookList.appendChild(bookListItem);

            } catch (err) {
                console.error(err.message);
        }

    });
             return bookList;
  }
