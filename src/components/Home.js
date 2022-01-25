import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

export default function Home(props) {

  // generate new array from books without duplicated shelf values

  const key = 'shelf';

  const uniqueShelves = [...new Map(props.books.map(shelf =>
  [shelf[key], shelf])).values()];
  
  // map over the new array and render the shelves

  const addShelf = uniqueShelves.map(book => {
    return (
      <BookShelf 
      switchShelf={props.switchShelf}
      key={book.id}
      {...book}
      {...props}
      />
      )
    })
    
  return (

    <div>
        <div className="list-books">
          <Header />
          <div className="list-books-content">
            <div>
              {addShelf}
            </div>
          </div>
          <div className="open-search">
            <Link to='/search' className="open-search-button">Add a book</Link>
          </div>
        </div>
    </div>
  )
}
