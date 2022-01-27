import React from 'react';
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='nf'>
      <Link to='/' className="close-search">Close</Link>
      <h1>Something Wrong Happend</h1>
      <img src='../images/alert_danger_error_warning_icon.png' alt='img' />
    </div>
  )}
