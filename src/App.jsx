import './App.css';
import MyNav from './components/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyFooter from './components/Myfooter';
import Welcome from './components/Mywelcome';
import FantasyBooksSection from './components/MySection';
import Carosello from './components/MyCarosello';
import CardComponent from './components/Mycard';
import SingleBook from './components/SingleBook';
import horrorBooks from './books/horror.json';
import BookList from './components/BookList';
import fantasyBooks from './books/fantasy.json';






function getRandomBook(books) {
  const randomIndex = Math.floor(Math.random() * books.length);
  return books[randomIndex];
}

function getRandomBooks(books, count) {
  const shuffled = books.sort(() => 0.5 - Math.random()); // vado a mescolare l'array
  return shuffled.slice(0, count); // prendi i primi "count element"  dall'array mescolato
}
function App() {
  const randomBook = getRandomBook(horrorBooks);
  const randomBooks2 = getRandomBooks(fantasyBooks, 8);
  return (
    <div className="App" >
      <header>
      <MyNav/>
      </header>
      <main>
      <Welcome/>
      <Carosello/>
      <SingleBook book={randomBook} />

      <h1 className='container mt-5 mb-5'>Book Store</h1>
      <BookList books={randomBooks2} />
      <h1 className='container mt-5 mb-5'>articoli consigliati:</h1>
      <FantasyBooksSection/>
      <CardComponent/>
      </main>
      <footer>
      <MyFooter/>
      </footer>
  



     
    </div>
    
  );
}

export default App;
