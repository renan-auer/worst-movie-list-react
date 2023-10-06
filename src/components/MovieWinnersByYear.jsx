import React, { useState, useEffect } from "react";
import movieService from "../services/movie.service";

const MovieWinnersByYear = () => {
  const [yearFilter, setYearFilters] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await movieService.getMoviesByYear(yearFilter);
      setMovies(response?.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };


  const handleYearFilterChange = (event) => {
    setYearFilters(event.target.value)
  }

  return (
    <>
      <div className="row">
        <div className="col-9">
          <input type="number" value={yearFilter} onChange={handleYearFilterChange} required/>
        </div>
        <div className="col-2">
          <button className="btn" onClick={fetchData}>Pesquisar</button>
        </div>
      </div>
      <h4>List movie winners by years</h4>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Year</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.year}</td>
                <td>{movie.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default MovieWinnersByYear;
