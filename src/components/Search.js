import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Books from './Books'
import { useDebounce } from 'use-debounce'

export default function Search(props) {

  // init states to hold querys and the matched results
  const [query, setQuery] = React.useState('')
  const [value] = useDebounce(query, 800)
  const [matchedBooks, setMatchedBooks] = React.useState([])

  // a function to set source of truth to the query state
  function handleChange(event) {
    setQuery(event.target.value)
  }
  
  console.log(matchedBooks);

  // request query though the API
  React.useEffect(()=>{

    // how to hanlde query
    // if we have values on query state
    if (value) {
      BooksAPI.search(value).then(data => (

      // if we input wrong query and got error return to default 
      data.error ? 
      setMatchedBooks([]) :       

      // update the matched state with the comeback data
      setMatchedBooks(data)
        
    ))
    }else{
      // handle the error due to init empty strings
      setMatchedBooks([])
    }
   },[value]) 

  //  render the matched books
  const addBook = matchedBooks.map( matched => {

    // set a varibale to hold the matched books shelf value and set default as 'none'
    let setShelf = 'none'

    // if myBooks id matches the matched books id, set shelf value for matched books as myBooks shelf value 
    props.myBooks.map(book => (
      book.id === matched.id ?
      setShelf = book.shelf :
      ''
      ))

      matched.shelf = setShelf
      
  return (
    <Books 
      key={matched.id}
      switchShelf={props.switchShelf}
      {...matched}
      {...props}
    />
    )
  })

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
              <ol className="books-grid">
                {addBook}
              </ol>
            </div>
          </div>
    </div>
  )
}
