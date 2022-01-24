import React from 'react'
import {Routes, Route} from 'react-router-dom';
import './App.css';
// import logo from './logo.svg';
import Shelves from './components/Shelves';
import Search from './components/Search';
import Data from './Data'

export default function BooksApp() {

  const [books, setBooks] = React.useState(Data)

  // console.log(books);
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Shelves books={books}/>}/>
        <Route path='/search' element={<Search/>}/>
        
      </Routes>
    </div>
  )
}