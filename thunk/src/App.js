import React, { useState } from 'react';

import axios from 'axios';
import './styles.css';

function App() {
  const [book, setBook] = useState("")
  const [result, setResult] = useState([])
  const [apikey, setApikey] = useState("AIzaSyCM1LDmWxwNckN6lC7-52XmDDu-02e9PbE")
  const handleChange = (event) => {
    const book = event.target.value
    setBook(book)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(book)
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apikey}&maxResults=40`)
      .then( resp=> {
        console.log(resp)
        setResult(resp.data.items)
      })
  }
  console.log("App result = ", result)
  return (
    <div className="container">
      <h1>Book Search App</h1>
      <form onSubmit={handleSubmit} >
        <div className="from-group">
      <input 
        type="text"
        onChange={handleChange}
        className="form-control mt-10"  
        id="book"
        placeholder="Search for book ..."
        />
        <button type="submit" className="btn btn-danger" >Search</button>
        </div>
      </form>
      {/* <Person /> */}
      {
        result.map( book => (
          <a>
            <img src={book.volumeInfo.imageLinks.thumbnail} />
          </a>
        ))
      }
    </div>
  );
}

export default App;
