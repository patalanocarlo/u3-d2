import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Dropdown, Form,  } from 'react-bootstrap';
import fantasyData from '../books/fantasy.json'; //  vado ad Importare  dati relativi ai libri di fantasia
import historyData from '../books/history.json'; //  vado ad Importare dati relativi ai libri di storici
import horrorData from '../books/horror.json'; //  vado ad Importare dati relativi ai libri di horror
import romanceData from '../books/romance.json'; // vado ad Importare dati relativi ai libri di romance

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));             // Funzione per mescolare un array
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function CardComponent() {
  const [selectedCategory, setSelectedCategory] = useState('All'); // nella function vado a settare gli usestate prima a tutte le card e poi ai title e al filtro
  const [searchTitle, setSearchTitle] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);
  const [allCardsData, setAllCardsData] = useState([]);
//Solo al caricamento della pagina vado a dare un effetto di generazione dove :
  useEffect(() => {
    const shuffledFantasy = shuffleArray(fantasyData).slice(0, 5);         //vengono presi tutti i fantasy e vari generi e selezioni ad esempio i primi 6 ovviamente al interno dell array mescolato
    const shuffledHistory = shuffleArray(historyData).slice(0, 5);  
    const shuffledHorror = shuffleArray(horrorData).slice(0, 5);
    const shuffledRomance = shuffleArray(romanceData).slice(0, 5);

    const allCards = [...shuffledFantasy, ...shuffledHistory, ...shuffledHorror, ...shuffledRomance];     //vado a settare poi le card come valori iniziali 
    setAllCardsData(allCards);
    setFilteredCards(allCards);
  }, []);

  const handleCategoryChange = (category) => {       //ora vado a gestire la selezioni del dropdown per le categorie
    setSelectedCategory(category);    //vado a settare il comando della categoria selezionata
    filterCards(searchTitle, category);    //in base al titolo e alla cateogira vengono generate a schermo le card
  };

const handleSearchTitleChange = (event) => {    //ora gestisco il campo di ricerca delle card 
  const newSearchTitle = event.target.value;  //vado a scrivere il nuovo target event della mia ricerca
  setSearchTitle(newSearchTitle); //questa andra impostata come valore di ricerca
  filterCards(newSearchTitle, selectedCategory); //infine filtrata per poterla avere a schermo
};
  const filterCards = (title, category) => { //vado a dare a tutte le card un ordine di filtro in base alla loro categoria e titolo
    let filtered = allCardsData;

    if (category !== 'All') {
      filtered = filtered.filter((card) => card.category === category); //ovviamente i filtri dovranno andare nelle varie cateogira al di fuori della categoria all dove abbiamo la parte predefinita
    } 

    filtered = filtered.filter((card) =>
      card.title.toLowerCase().includes(title.toLowerCase())
    );

    setFilteredCards(filtered);
  };

  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {selectedCategory}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleCategoryChange('All')}>All</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategoryChange('fantasy')}>Fantasy</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategoryChange('history')}>History</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategoryChange('horror')}>Horror</Dropdown.Item>
              <Dropdown.Item onClick={() => handleCategoryChange('romance')}>Romance</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <Form.Control
            type="text"
            placeholder="Search by title"
            value={searchTitle}
            onChange={handleSearchTitleChange}
          />
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredCards.map((card, index) => (
          <Col key={index}>
            <Card className="h-100">
              <Card.Img variant="top" src={card.img} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>Price: {card.price}</Card.Text>
                <Card.Text>Category: {card.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardComponent;