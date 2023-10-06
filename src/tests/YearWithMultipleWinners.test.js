import { render, screen } from "@testing-library/react";
import YearWithMultipleWinners from "../components/YearWithMultipleWinners";
import movieService from "../services/movie.service";

jest.mock("../services/movie.service");

test("renders YearWithMultipleWinners table with rows", async () => {
  const mockData = {
    data: {
      years: [
        {
          year: 2019,
          winnerCount: 20
        },
        {
          year: 2020,
          winnerCount: 20
        }
      ],
    }
  };
  movieService.getYearsWithMultipleWinners.mockResolvedValue(mockData);
  render(<YearWithMultipleWinners />);

  const element2019 = await screen.findByText("2019");
  const element2020 = await screen.findByText("2020");

  expect(element2019).toBeInTheDocument();
  expect(element2020).toBeInTheDocument();
});
