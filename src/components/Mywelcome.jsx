import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

function Welcome() {
    const [message, setMessage] = useState('');

    useEffect(() => {
      
        setMessage("Offriamo una vasta selezione di libri adatti a ogni gusto. Che tu stia cercando classici, bestseller o qualcosa di nuovo ed emozionante, lo troverai qui. Buono shopping!");
        
     
        return () => {
   
        };
    }, []);

    return (
        <div className="container mt-4">
            <h2>Benvenuto su Books Store</h2>
            <Alert variant="info">
                <Alert.Heading>Grazie per la visita!</Alert.Heading>
                <p>{message}</p>
            </Alert>
        </div>
    );
}

export default Welcome;