import React, { useState, useEffect, act } from "react";
import movieService from "../services/movie.service";

const StudiosWinners = () => {
  const [studiosWinners, setStudiosWinners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await movieService.getStudiosWinners();
        const studios = response?.data?.studios;
        studios.sort((a, b) => b.winCount - a.winCount);
        setStudiosWinners(studios ? studios.splice(0, 3) : []);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h4>Top 3 studios with winners</h4>

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
              <tr key={studio.name}>
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

export default StudiosWinners;
