import { useState } from "react";



export default function MovieSearch() {

    const urlBase = `https://api.themoviedb.org/3/search/movie?api_key=4f298b6c4b4e1d8e9c1e1b1d9e0d4b6e&language=en-US&query=${search}&page=1&include_adult=false`;
    const API_KEY = 

    const [search, setSearch] = useState('');
    const [movie, setMovie] = useState([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchMovie();}

    const fetchMovie = async () => {
       
        try {
            const res = await fetch('');
            const data = await res.json();
            setMovie(data.results);
        } catch (error) {
            console.error(error);
    }

  return (
    <div className="container">

        <h1 className="title">Movie Search</h1>

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Movie name?" value={search} onChange={handleInputChange} />
            <button type="submit" className="search-button">Search</button>
        </form>
      
    </div>
  );
}