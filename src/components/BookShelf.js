import React from 'react';
import Books from './Books';

export default function BookShelf(props) {

  const addBook = props.books.map( b => {
    return (
      <Books 
        key={b.id}
        {...b}
      />
    )
  })

  // console.log(addBook);
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
