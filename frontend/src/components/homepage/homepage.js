import React from 'react';
import './homepage.css'
import { useNavigate } from 'react-router-dom';
import photo from './book_free_stock_photo.jpeg';


const Homepage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
    <img src={photo} width="450" height="200" />
    <p>Our Book exchange app established in the year 2022, is an online book exchange system is a web platform which is used to exchange books online. It offers an inexpensive way for people to exchange books, find out about new books and obtain a new book to read without having to pay. Instead of selling books back for a fraction of the cost, people can participate in a book exchange by agreeing to exchange their book with someone who requests it and receive the book they requested in return.</p> 
    <p>In this way their old book finds a reader, and in return, the user can get a new collection of books to read which are posted by other users for exchange. Any user can register to search for a book and obtain the owner’s information. The user can also put in a request online to exchange a book. The objective of the website being developed is to facilitate an online Book exchange platform which provides quality services and a transparency in book exchanging process.</p> 
  </div>
  )};

export default Homepage;