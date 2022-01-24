import React from 'react';
import Books from './Books';

export default function BookShelf(props) {

  const addBook = props.books.map( data => {
    return (
      <Books 
        key={data.id}
        {...data}
      />
    )
  })
  return (
  
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              {addBook}
            </li>
          </ol>
        </div>
      </div>
    </div>

  )
}
