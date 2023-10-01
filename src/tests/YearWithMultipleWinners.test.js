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
        }
      ],
    }
  };
  movieService.getYearsWithMultipleWinners.mockResolvedValue(mockData);
  render(<YearWithMultipleWinners />);

  await screen.findByText("2019");
});
