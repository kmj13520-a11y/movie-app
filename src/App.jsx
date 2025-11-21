import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./assets/components/MovieList";

function App() {
  //영화리스트
  const [movies, setMovies] = useState([]);
  //서버에서 영화 데이터를 받기
  async function getMovieRequest() {
    //요청할 서버 주소
    const url = "https://www.omdbapi.com/?apikey=6bfc4a64&s=amazing";
    const response = await fetch(url);
    const jsonData = await response.json();
    setMovies(jsonData.Search);
  }
  getMovieRequest(); //실행
  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
