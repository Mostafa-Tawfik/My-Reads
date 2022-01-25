import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

export default function Search() {

  // init states to hold querys and the matched results

  const [query, setQuery] = React.useState('')
  const [matched, setMatched] = React.useState('')

  console.log(matched);

  // a function to set source of truth to the queries state

  function handleChange(event) {
    setQuery(event.target.value)
  }
  
  // request query though the API
  
  React.useEffect(()=>{

    if (query) {
      BooksAPI.search(query).then(data => {

        // handle the error due to init empty strings

        if (data.error) {
          setMatched('');
        } else {

          // update the matched state with the comeback data

          setMatched(data)
        }
    })
    }
   },[query]) 

  return (
    <div>
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                {}
                <input 
                type="text" 
                placeholder="Search by title or author"
                name='query'
                value={query}
                onChange={handleChange}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
    </div>
  )
}
