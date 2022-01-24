import React from 'react'
import {Routes, Route} from 'react-router-dom';
import './App.css';
// import logo from './logo.svg';
import Shelves from './components/Shelves';
import Search from './components/Search';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

export default function BooksApp() {

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Shelves/>}/>
        <Route path='/search' element={<Search/>}/>
        
      </Routes>
    </div>
  )
}