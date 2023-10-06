import { render, screen } from "@testing-library/react";
import ProducersIntervalBetweenWins from "../components/ProducersIntervalBetweenWins";
import movieService from "../services/movie.service";

jest.mock("../services/movie.service");

test("renders ProducersIntervalBetweenWins table with rows", async () => {
  const mockData = {
    data: {
      max: [
        {
          producer: "Test",
          interval: 2,
          previousWin: 2019,
          followingWin: 2020,
        },
      ],
      min: [
        {
          producer: "Test",
          interval: 1,
          previousWin: 2019,
          followingWin: 2020,
        },
      ],
    },
  };
  movieService.getProducersIntervalWin.mockResolvedValue(mockData);
  render(<ProducersIntervalBetweenWins />);

  const elements = await screen.findAllByText("Test");

  expect(elements).toHaveLength(2);
});
