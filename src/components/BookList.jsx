import React, { useState, useEffect } from 'react';
import { shuffle } from 'lodash'; // Importa la funzione shuffle da lodash
import CommentArea from './MycommentArea';
import historyData from '../books/history.json';
import fantasyData from '../books/fantasy.json';
import romanceData from '../books/romance.json';

function BookList() {

  const [comments, setComments] = useState([]);


  useEffect(() => {

  }, []);

  const handleAddComment = (newComment) => {
    setComments(prevComments => [...prevComments, newComment]);
  };

  const handleDeleteComment = (updatedComments) => {
    setComments(updatedComments);
  };

  // Seleziona casualmente 8 libri da ciascun genere
  const selectedBooks = [
    ...shuffle(historyData).slice(0, 2),
    ...shuffle(fantasyData).slice(0, 2),
    ...shuffle(romanceData).slice(0, 2),
  ];

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {selectedBooks.map((book, index) => (
          <div key={index} className="col">
            <div className="card h-100 w-70 bg-dark text-white">
              <img src={book.img} className="card-img-top" alt={book.title} />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <CommentArea
                  book={book}
                  comments={comments}
                  onAddComment={handleAddComment}
                  onDeleteComment={handleDeleteComment}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;