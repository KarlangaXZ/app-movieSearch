import { useState } from "react";


interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
  }

export default function MovieSearch() {
  const urlBase = "https://api.themoviedb.org/3/search/movie";
  const API_KEY = "fbd3378542e8017013c7b48792acc89f";

  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState<Movie[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchMovie();
  };

  const fetchMovie = async () => {
    try {
    const apiUrl = `${urlBase}?api_key=${API_KEY}&query=${encodeURIComponent(search)}`;
    console.log("Fetching URL:", apiUrl);

    const res = await fetch(apiUrl);
    if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
     // const res = await fetch(`${urlBase}?api_key=${API_KEY}&query=${(search)}`);
    }
      const data = await res.json();
        console.log("API RESPONSE:", data);

        if (!data.results || !Array.isArray(data.results)) {
            console.error("API response does not contain a valid 'results' array:", data);
            setMovie([]); // Evita errores si la API no devuelve películas
            return;
        }

      setMovie(data.results);

    } catch (error) {
      console.error('Ha ocurrido un error:', error);
      setMovie([]);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Movie Search</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie name?"
          value={search}
          onChange={handleInputChange}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

    <div className="movie-list">
        {movie.map((movie: Movie) => (
            <div key={movie.id} className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
            </div>
        ))}

       
    </div>
  
    </div>

  );

}
