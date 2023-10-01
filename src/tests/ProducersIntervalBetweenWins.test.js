import { render, screen } from "@testing-library/react";
import ProducersIntervalBetweenWins from "../components/ProducersIntervalBetweenWins";
import movieService from "../services/movie.service";

jest.mock("../services/movie.service");

test("renders ProducersIntervalBetweenWins table with rows", async () => {
  const mockData = {
    data: {
      max: [],
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

  await screen.findByText("Test");
});
