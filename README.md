# My Reads
## A Book Lending App

<br>

# Project Summary

Create a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project is using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

<br>

# Project Preview
![Alt Text](./myReads.jpeg?raw=true 'Project Preview')

# TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

<br>

# App Functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

Currently Reading <br>
Want to Read <br>
Read <br>

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there.

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

<br>

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.