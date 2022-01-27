import React from 'react';
import Books from './Books';

export default function BookShelf(props) {

  // filter the books array to render each book that matches the shelf name
  const addBook = props.myBooks.filter(book => book.shelf === props.shelf).map( sortedBook => {
    return (
      <Books 
      switchShelf={props.switchShelf}
        key={sortedBook.id}
        {...sortedBook}
      />
    )
  })

  return (
  
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {addBook}
          </ol>
        </div>
      </div>
    </div>

  )
}
