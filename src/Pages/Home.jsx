import YearWithMultipleWinners from "../components/YearWithMultipleWinners";
import StudiosWinners from "../components/StudiosWinners";
import ProducersIntervalBetweenWins from "../components/ProducersIntervalBetweenWins";
import MovieWinnersByYear from "../components/MovieWinnersByYear";

const Home = () => {
  return (
    <>
      <div class="row">
        <div class="col-6 mb-1">
          <div class="card">
            <YearWithMultipleWinners></YearWithMultipleWinners>
          </div>
        </div>
        <div class="col-6 mb-1">
          <div class="card">
            <StudiosWinners></StudiosWinners>
          </div>
        </div>
        <div class="col-6 mb-1">
          <div class="card">
            <ProducersIntervalBetweenWins></ProducersIntervalBetweenWins>
          </div>
        </div>
        <div class="col-6 mb-1">
          <div class="card">
            <MovieWinnersByYear></MovieWinnersByYear>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
