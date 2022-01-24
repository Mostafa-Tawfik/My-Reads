import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

export default function Shelves(props) {

  const [shelves, setShelves] = React.useState(
    [
      {
        id: 1,
        currentlyReading: [],
        shelfName: 'Currently Reading'
      },
      {
        id: 2,
        whatToRead: [],
        shelfName: 'What To Read'
      },
      {
        id:3,
        read: [],
        shelfName: 'Read'
      }
    ]
  )

  const addShelf = shelves.map( data => {
    return (
      <BookShelf 
        key={data.id}
        {...data}
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
