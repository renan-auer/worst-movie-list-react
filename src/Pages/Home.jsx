import YearWithMultipleWinners from "../components/YearWithMultipleWinners"
import StudiosWinners from "../components/StudiosWinners"
import ProducersIntervalBetweenWins from "../components/ProducersIntervalBetweenWins"

const Home = () => {
  return (
    <>
      <div class="row">
        <div class="card col-6 mb-1">
          <YearWithMultipleWinners></YearWithMultipleWinners>
        </div>
        <div class="card col-6 mb-1">
          <StudiosWinners></StudiosWinners>
        </div>
        <div class="card col-6 mb-1">
          <ProducersIntervalBetweenWins></ProducersIntervalBetweenWins>
        </div>
        <div class="card col-6 mb-1">
        </div>
      </div>
    </>
  );
};

export default Home;
