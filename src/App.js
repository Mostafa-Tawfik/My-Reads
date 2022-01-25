import React from 'react'
import {Routes, Route} from 'react-router-dom';
import './App.css';
// import logo from './logo.svg';
import Home from './components/Home';
import Search from './components/Search';
import * as BooksAPI from './BooksAPI'

export default function BooksApp() {

  // init books state to use acorss the app
  const [books, setBooks] = React.useState([])

  // fetch the data from the API
  
  React.useEffect(()=>{
    BooksAPI.getAll().then((books) => {
      setBooks(books)
    }
    )
  },[]) 

  // a function to update shelf status on the API
  function switchShelf(books, shelf) {
    BooksAPI.update(books, shelf)
    // setBooks(prev => {
    //   return {
    //     ...prev,
    //     books
    //   }
    // })

  }

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home books={books} switchShelf={switchShelf}/>}/>
        <Route path='/search' element={<Search books={books} switchShelf={switchShelf}/>}/>
        
      </Routes>
    </div>
  )
}