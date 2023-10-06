import { render, screen } from "@testing-library/react";
import MovieWinnersByYear from "../components/MovieWinnersByYear";
import movieService from "../services/movie.service";

jest.mock("../services/movie.service");

test("renders MovieWinnersByYear table with rows", async () => {
  const mockData = {
    data: [
      {
        id: 1,
        title: 'Test',
        year: 2019
      },
      {
        id: 2,
        title: 'Test',
        year: 2019
      }
    ],
  };
  movieService.getMoviesByYear.mockResolvedValue(mockData);
  render(<MovieWinnersByYear />);

  const elements = await screen.findAllByText("Test");

  expect(elements).toHaveLength(2);
});
