import React, { useState, useEffect } from "react";
import movieService from "../services/movie.service";

const Movie = () => {
  const [years, setYears] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await movieService.getYearsWithMultipleWinners();
        setYears(response?.data?.years);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h4>List years with multiple winners</h4>

      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Win Count</th>
          </tr>
        </thead>
        <tbody>
          {years.map((year) => {
            return (
              <tr>
                <td>{year.year}</td>
                <td>{year.winnerCount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Movie;
