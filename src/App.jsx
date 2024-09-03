import {useState, useEffect} from "react";
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from "./MoveCard.jsx"

const API_URL = 'http://www.omdbapi.com?apikey=b5b81b42';


function App() {
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  async function searchMovies(title){
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect( () => {
    searchMovies('Spiderman');
  }, [])

  return (
    <div className="app">
      <h1>MoveLand</h1>
      <div className="search">
        <input placeholder="Search for movies" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}} />
        <img src={SearchIcon} alt="Search" onClick={() => {searchMovies(searchTerm)}} />
      </div>

      {
        movies.length > 0 
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie1={movie} />
              ))}
            </div>
          ) :
          (
            <div className="empty">
              <h2>No Movies Found</h2>
            </div>
          )
      }

      
      
    </div>
  );
}

export default App
