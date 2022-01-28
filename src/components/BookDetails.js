import React from 'react'
import * as BooksAPI from '../BooksAPI'
import { useParams, useNavigate } from 'react-router-dom'

const BookDetails = () => {

    const params = useParams()

    const navigate = useNavigate()

    // set state to hold the required book
    const [showBook, SetShowBook] = React.useState([])
    
    // request the required book form the API
    React.useEffect(()=>{
      BooksAPI.get(params.bookId).then(book => {
        SetShowBook(book)
      })
    },[params])

    // check for thumbnail
    let checkThumbnail = showBook.imageLinks ? showBook.imageLinks.thumbnail : ''
    

    return (
      <div className='bookdetails-holder'>
        <button onClick={() => navigate(-1)} className="Back">Back</button>
        <h1>{showBook.title}</h1>
        <h4>{showBook.subtitle}</h4>
        <section className='bookdetails-main'>
          <img src={checkThumbnail} alt='img' className="showBook-cover"></img>
          <div className='bookdetails-infos'>
            <h1>{showBook.myBooksId}</h1>
            <h3>Authors: <span>{showBook.authors}</span></h3>
            <h3>Categories: <span>{showBook.categories}</span></h3>
            <h3>Published Date: <span>{showBook.publishedDate}</span></h3>
            <h3>Publisher: <span>{showBook.publisher}</span></h3>
          </div>

        </section>
        <article className='bookdetails-description'>
          <p>{showBook.description}</p>
        </article>
      </div>
    )
}

export default BookDetails