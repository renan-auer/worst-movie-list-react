import React, { useState, useEffect } from "react";
import movieService from "../services/movie.service";

const Movie = () => {
  const [studiosWinners, setStudiosWinners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await movieService.getStudiosWinners();
        const studios = response?.data?.studios
        studios.sort((a, b) => b.winCount - a.winCount)
        setStudiosWinners(studios ? studios.splice(0, 3) : []);
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
            <th>Name</th>
            <th>Win Count</th>
          </tr>
        </thead>
        <tbody>
          {studiosWinners.map((studio) => {
            return (
              <tr>
                <td>{studio.name}</td>
                <td>{studio.winCount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Movie;
