import React from 'react'
import {Routes, Route} from 'react-router-dom';
import './App.css';
// import logo from './logo.svg';
import Home from './components/Home';
import Search from './components/Search';
import * as BooksAPI from './BooksAPI'

export default function BooksApp() {

  const [books, setBooks] = React.useState([])

  React.useEffect(()=>{
    BooksAPI.getAll().then((books) => {
      setBooks(books)
    }
    )
  },[]) 

  function changeShelf() {

  }
  console.log(books);
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home books={books}/>}/>
        <Route path='/search' element={<Search/>}/>
        
      </Routes>
    </div>
  )
}