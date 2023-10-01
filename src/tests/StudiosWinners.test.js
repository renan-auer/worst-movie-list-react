import { render, screen } from '@testing-library/react';
import StudiosWinners from '../components/StudiosWinners';
import movieService from '../services/movie.service';

jest.mock('../services/movie.service')

test('renders StudiosWinners table with rows', async () => {
  const mockData = {data: {studios: [{winCount: 1, name: 'Test'}] }}
  movieService.getStudiosWinners.mockResolvedValue(mockData)
  render(<StudiosWinners/>)

  await screen.findByText('Test');

});
