import { render, screen } from "@testing-library/react";
import Movie from "../Pages/Movie";
import movieService from "../services/movie.service";

jest.mock("../services/movie.service");

test("renders Movie table with rows", async () => {
  const mockData = {
    data: {
      totalPages: 20,
      content: [
        {
          id: 1,
          title: "Test",
          year: 2019,
          winner: true,
        },
        {
          id: 2,
          title: "Test",
          year: 2020,
          winner: true,
        },
      ],
    },
  };
  movieService.getMovies.mockResolvedValue(mockData);
  render(<Movie />);

  const elements = await screen.findAllByText("Test");

  expect(elements).toHaveLength(2);
});
