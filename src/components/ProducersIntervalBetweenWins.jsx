import React, { useState, useEffect } from "react";
import movieService from "../services/movie.service";

const ProducersIntervalBetweenWins = () => {
  const [minProducerIntervalWin, setMinProducerIntervalWin] = useState([]);
  const [maxProducerIntervalWin, setMaxProducerIntervalWin] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await movieService.getProducersIntervalWin();
        const producersInterval = response?.data;

        setMinProducerIntervalWin(producersInterval?.min);
        setMaxProducerIntervalWin(producersInterval?.max);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h4>Producers with longest and shortest interval between wins</h4>

      <h3>Maximum</h3>
      <table class="mb-1">
        <thead>
          <tr>
            <th>Producer</th>
            <th>Interval</th>
            <th>Previous Year</th>
            <th>Following Year</th>
          </tr>
        </thead>
        <tbody>
          {maxProducerIntervalWin.map((producer) => {
            return (
              <tr>
                <td>{producer.producer}</td>
                <td>{producer.interval}</td>
                <td>{producer.previousWin}</td>
                <td>{producer.followingWin}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>Minimum</h3>
      <table>
        <thead>
          <tr>
            <th>Producer</th>
            <th>Interval</th>
            <th>Previous Year</th>
            <th>Following Year</th>
          </tr>
        </thead>
        <tbody>
          {minProducerIntervalWin.map((producer) => {
            return (
              <tr>
                <td>{producer.producer}</td>
                <td>{producer.interval}</td>
                <td>{producer.previousWin}</td>
                <td>{producer.followingWin}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProducersIntervalBetweenWins;
