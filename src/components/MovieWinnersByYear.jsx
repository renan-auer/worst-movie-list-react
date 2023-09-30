import React, { useState, useEffect } from "react";
import movieService from "../services/movie.service";

const MovieWinnersByYear = () => {
  const [yearFilter, setYearFilters] = useState(2019);
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
      <div class="row">
        <div class="col-9">
          <input type="number" value={yearFilter} onChange={handleYearFilterChange} required/>
        </div>
        <div class="col-2">
          <button class="btn" onClick={fetchData}>Pesquisar</button>
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
              <tr>
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