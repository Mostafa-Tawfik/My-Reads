import React from 'react';
import Books from './Books';

export default function BookShelf(props) {

  // filter the books array to show each book that matches the shelf name

  const addBook = props.books.filter(book => book.shelf === props.shelf).map( b => {
    return (
      <Books 
        key={b.id}
        {...b}
      />
    )
  })

  return (
  
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {addBook}
          </ol>
        </div>
      </div>
    </div>

  )
}
