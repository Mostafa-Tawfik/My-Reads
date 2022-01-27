import React from 'react';

export default function Books(props) {

  // a function to handle change on select drop
  function handleChange(event){
    props.switchShelf(props, event.target.value)
  }

  // check if thumbnail is not found put empty string
  let checkThumbnail = props.imageLinks ? props.imageLinks.thumbnail : ''

  // check if there are multiple authors put ',' between them and if there are no authors set to value to an empty string
  let checkAuthors = props.authors ? props.authors.join(' , ') : ''

  return (
    <div>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${checkThumbnail})` }}></div>
          <div className="book-shelf-changer">

            <select 
              onChange={handleChange} 
              value={props.shelf}
              >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
            
          </div>
        </div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">{checkAuthors}</div> 
      </div>
    </div>
  )
}
