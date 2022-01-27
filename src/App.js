import React from 'react'
import {Routes, Route} from 'react-router-dom';
import './App.css';
// import logo from './logo.svg';
import Home from './components/Home';
import Search from './components/Search';
import * as BooksAPI from './BooksAPI';
import NotFound from './components/NotFound';

export default function BooksApp() {

  // init books state to use acorss the app
  const [myBooks, setMyBooks] = React.useState([])

  // fetch the data from the API
  React.useEffect(()=>{
    BooksAPI.getAll().then((books) => {
      setMyBooks(books)
    }
    )
  },[]) 

  // a function to update shelf status on the API
  const switchShelf = (books, shelf) => {
    BooksAPI.update(books, shelf).then(() => {
    BooksAPI.getAll().then((books) => {
    setMyBooks(books);
    })
    });
 
   }

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home myBooks={myBooks} switchShelf={switchShelf}/>}/>
        <Route path='/search' element={<Search myBooks={myBooks} switchShelf={switchShelf}/>}/>
        <Route path='*' element={<NotFound />} />        
      </Routes>
    </div>
  )
}