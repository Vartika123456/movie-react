import React, { useEffect , useState} from "react";
import "./App.css";

import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// b8874da9

const API_URL = "https://www.omdbapi.com?apikey=b8874da9";

// const movies1 = {
//   Title: "Superman, Spiderman or Batman",
//   Year: "2011",
//   imdbID: "tt2084949",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
// };
const App = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  
  useEffect(() => {
    searchMovies(`Spiderman`);
  }, []);


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(response);

    setMovies(data.Search);
  };

  


  return (
    <>
      <div className="app">
        <h1>Night Owl</h1>
        <div className="search">
          <input
            placeholder="Search for Movies"
            value={search}
            onChange={(e) => {setSearch(e.target.value)}}
          />
          <img src={SearchIcon} alt="search" onClick={() => { searchMovies(search)}} />
        </div>


        {console.log(movies.length)}
          

        {movies.length > 0 ? (

          
        <div className="container">
          { 
            movies.map((movie)=>(
              <MovieCard movie={movie} />
            ))

          }
         
        </div>
      ) 
      : (
        <div className="empty">
          
          <h2> {movies.length} No movies found</h2>
        </div>
      )  
    } 

   
      </div>
    </>
  );
};

export default App;
