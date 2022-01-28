import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import * as BooksAPI from './BooksAPI';
import NotFound from './components/NotFound';
import BookDetails from './components/BookDetails';

export default function BooksApp() {

  // init books state to use acorss the app
  const [myBooks, setMyBooks] = React.useState([])

console.log(myBooks);

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

  //  re-render locally works on the home page but when changing from search page didn't work, I will try to figure it out later

  //  const switchShelf = (updatedBook, updatedShelf)=> {
  //   BooksAPI.update(updatedBook, updatedShelf).then(() => {
  //     setMyBooks(prev => prev.map(oldBook => {
  //       return updatedBook.id === oldBook.id ? {...oldBook, shelf: updatedShelf} : oldBook
  //     }))
  //   })
  //  }

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home myBooks={myBooks} switchShelf={switchShelf}/>}/>
        <Route path='/search' element={<Search myBooks={myBooks} switchShelf={switchShelf}/>}/>
        <Route path='*' element={<NotFound />} />        
        <Route path='/books/:bookId' element={<BookDetails myBooks={myBooks}/>} />        
      </Routes>
    </div>
  )
}