import "./App.css";
import { useQuiz } from "./Components/Context";
import LogoSection from "./Components/LogoSection";
import ProgressBar from "./Components/ProgressBar";
import QuestionBlock from "./Components/QuestionBlock";
import ScoreBoard from "./Components/ScoreBoard";
import Welcome from "./Components/Welcome";
import Timer from "./Components/Timer";
import NextBtn from "./Components/NextBtn";
import Highscore from "./Components/Highscore";

function App() {
  const { start, qNumber, data } = useQuiz();
  return (
    <div className="main-div">
      <div className="header">
        <LogoSection />
        <Welcome />
        {start && qNumber !== data.length && (
          <div className="quiz-main-body">
            <div className="quiz-body">
              <ProgressBar />
              <ScoreBoard />
              <QuestionBlock />
              <div className="timer-next-flex">
                <Timer />
                <NextBtn />
              </div>
            </div>
          </div>
        )}
        <Highscore />
      </div>
    </div>
  );
}

export default App;

// for api:json-server --watch data/questions.json --port 9000
