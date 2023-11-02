import "./styles.css";
//Import du logo pour interpolation dans JSX
import cinemaxLogo from "./assets/cinemax-lg.png";
import { useEffect, useState } from "react";

//Nos composants
import Search from "./components/Search";
import Movies from "./components/Movies";

export default function App() {
  // OMDB API
  const API = "https://www.omdbapi.com/?apikey=5b4aa4e5";

  //states (Etats)
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  //Fonction : searchMovies ()
  const searchMovies = async (searchValue) => {
    //Fetch de l'API OMDB
    const response = await fetch(API + "&s=" + searchValue);
    const data = await response.json();

    // On modifie le tableau si l'API retourne des données
    if (data.Search) {
      setMovies(data.Search);
    }

    //verifier les infos reçu par l'API

    console.log(data.Search);
  };

  //useEffect pour lancer la recherche des films
  useEffect(() => {
    searchMovies("Hunger Games");
  }, []);

  return (
    <div className="App">
      <header>
        <img src={cinemaxLogo} className="logo" alt="logo cinemax" />
        <Search
          search={search}
          setSearch={setSearch}
          searchMovies={searchMovies}
        />
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}
