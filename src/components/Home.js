import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

export default function Home(props) {

  // init a Shelves array to hold shelves
  const Shelves = [
    {
      id: 1,
      shelf: 'currentlyReading',
      shelfName: 'Currently Reading'
    },
    {
      id: 2,
      shelf: 'wantToRead',
      shelfName: 'Want To Read'
    },
    {
      id: 3,
      shelf: 'read',
      shelfName: 'Read'
    }
  ]

  // render shelves by mapping over Shelves
  const addShelf = Shelves.map(book => {
    return (
      <BookShelf
        key={book.id}
        book={book}
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
