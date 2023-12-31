import React, { useState, useEffect } from "react";
import movieService from "../services/movie.service";
import Paginator from "../components/Paginator";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(0);
  const [yearFilter, setYearFilter] = useState("");
  const [winnerFilter, setWinnerFilter] = useState("");

  useEffect(() => {
    fetchData(0, null, null);
  }, []);

  const fetchData = async (pageRequest, yearFilterParam, winnerFilterParam) => {
    try {
      const size = 15;
      const response = await movieService.getMovies(
        pageRequest,
        size,
        winnerFilterParam,
        yearFilterParam
      );
      setMovies(response?.data?.content);
      setTotalPages(response?.data?.totalPages);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const winnerChanged = (event) => {
    const value = event.target.value
    setWinnerFilter(value);
    setPage(0);
    fetchData(0, yearFilter, value);
  };

  const yearChanged = (event) => {
    const value = event.target.value
    setYearFilter(value);
    setPage(0);
    fetchData(0, value, winnerFilter);
  };

  const pageSelected = (page) => {
    setPage(page);
    fetchData(page);
  };

  return (
    <>
      <h4>List movie winners by years</h4>

      <table className="mb-1">
        <thead>
          <tr>
            <th>Id</th>
            <th className="center">
              Year
              <input type="number" value={yearFilter} onChange={yearChanged} />
            </th>
            <th>Title</th>
            <th className="center">
              Winner
              <select value={winnerFilter} onChange={winnerChanged}>
                <option></option>
                <option value="true">Yes</option>
                <option  value="false">No</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <tr key={movie.id}>
                <td>{movie.id}</td>
                <td>{movie.year}</td>
                <td>{movie.title}</td>
                <td>{movie.winner ? "Yes" : "No"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {totalPages > 0 && (
        <Paginator
          pageSelected={pageSelected}
          totalPages={totalPages}
          currentPageProp={page}
        ></Paginator>
      )}
    </>
  );
};

export default Movie;
