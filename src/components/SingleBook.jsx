import React, { Component } from 'react';
import CommentArea from './MycommentArea';
import { Card } from 'react-bootstrap';
import historyData from '../books/history.json'; // Importa i dati dei libri

class SingleBook extends Component {
    render() {
        const book = historyData[0]; // Sostituisci con il libro appropriato

        const cardStyle = {
            maxWidth: '400px', // Massima larghezza della card
            margin: '0 auto', // Centra la card nella pagina
            textAlign: 'center', // Centra il contenuto nella card
            backgroundColor: 'black', // Sfondo nero
            color: 'white' // Testo bianco
        };

        return (
            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title as="h4">{book.title}</Card.Title> {/* Titolo come h4 */}
                    <Card.Img src={book.img} alt={book.title} style={{maxWidth: '100%'}} /> {/* Immagine */}
                    <Card.Text>{book.description}</Card.Text> {/* Descrizione */}
                    <CommentArea book={book} />
                </Card.Body>
            </Card>
        );
    }
}

export default SingleBook;