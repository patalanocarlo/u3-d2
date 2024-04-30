import React, { useState, useEffect } from 'react';

const MycommentArea = (props) => {
    const [comment, setComment] = useState('');
    const [rate, setRate] = useState(1);

    useEffect(() => {
        // Nessuna azione necessaria al montaggio
        return () => {
            // Nessuna azione necessaria allo smontaggio
        };
    }, []);

    const handleChange = (event) => {
        if (event.target.name === 'comment') {
            setComment(event.target.value);
        } else if (event.target.name === 'rate') {
            setRate(event.target.value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZTBmNDdmMzA0NjAwMWFlNTlmNTgiLCJpYXQiOjE3MTQzOTEwMTMsImV4cCI6MTcxNTYwMDYxM30.kvD_HUEJdtOZVuFsStmF9unaInzulAMo1l6QYJp5Gpc'; // Token JWT fornito

        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}` // Includi il token nell'header Authorization
                },
                body: JSON.stringify({
                    comment: comment,
                    rate: rate,
                    elementId: props.book.asin
                })
            });

            if (!response.ok) {
                throw new Error('Failed to submit comment');
            }

            // Pulisci il form dopo il successo
            setComment('');
            setRate(1);

            // Mostra un alert per confermare che il messaggio è stato inviato con successo
            alert('Il messaggio è stato mandato');

        } catch (error) {
            console.error('Failed to submit comment:', error);
            // Gestisci l'errore
        }
    };

    return (
        <div>
            <h2>Comments</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="comment" className="form-label">Comment</label>
                    <textarea
                        className="form-control"
                        id="comment"
                        name="comment"
                        value={comment}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="rate" className="form-label">Rate</label>
                    <select
                        className="form-select"
                        id="rate"
                        name="rate"
                        value={rate}
                        onChange={handleChange}
                        required
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default MycommentArea;