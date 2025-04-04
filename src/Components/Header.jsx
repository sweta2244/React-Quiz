import { useEffect, useState } from "react";
import ReactLogo from "/react.svg";
import { useRef } from "react";
import Timer from "./Timer";
import Highscore from "./Highscore";
export default function Header({ handleStart, start }) {
  const [data, setdata] = useState(null);
  const [result, setResult] = useState("");
  const [next, setNext] = useState(false);
  const [qNumber, setQNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(false);
  const [option1, setOption] = useState(null);
  const [progress,setProgress]=useState(0);
  const highscore = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/questions");
        const json = await response.json();
        setdata(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  function handleScore(index) {
    data[qNumber].correctOption === index &&
      setScore((prev) => prev + data[qNumber].points);
  }
  function handleQNumber() {
    setQNumber((prev) => prev + 1);
  }
  function handleNext() {
    setNext(!next);
  }
  function handleEnd() {
    setEnd(false);
    handleResultEmpty();
    handleOptionNull();
  }
  function handleResultEmpty() {
    setResult("");
  }
  function handleOptionNull() {
    setOption(null);
  }
  function handleResult(index) {
    data[qNumber].correctOption === index
      ? setResult("correct")
      : setResult("incorrect");
  }
  return (
    <div className="main-div">
      <div className="header">
        <div className="logo-section">
          <img src={ReactLogo} alt="react" width="100px" />
          <h1>THE REACT QUIZ</h1>
        </div>

        {!start && (
          <>
            <h2>Welcome to The React Quiz!</h2>
            <h3>15 questions to test your React mastery</h3>
            <button onClick={handleStart} className="startbtn btnn">
              Start Quiz
            </button>
          </>
        )}

        {start && !end && qNumber !== data.length && (
          <div className="quiz-main-body">
            <div className="quiz-body">
              <div className="score-bar">
                <p
                  style={{
                    backgroundColor: "#1098ad",
                    width: `${((progress) / data.length) * 100}%`,
                    height: "10px",
                    margin:"0px",
                    padding:"0px",
                    borderTopRightRadius:"4px",
                    borderBottomRightRadius:"4px",
                  }}
                ></p>
              </div>
              <div className="score-board">
                <p>
                  Question <b>{qNumber + 1}</b>/
                  {data.reduce((total) => {
                    return (total = total + 1);
                  }, 0)}
                </p>
                <p>
                  <b>{score}</b> /{" "}
                  {data.reduce((total, curr) => {
                    return (total = total + curr.points);
                  }, 0)}
                </p>
              </div>
              <h3>{data[qNumber].question}</h3>
              {data[qNumber].options.map((option, index) => (
                <div key={index}>
                  <button
                    className={`btn ${result ? "active" : ""} ${
                      result && index === data[qNumber].correctOption
                        ? "correct"
                        : ""
                    } ${index === option1 ? "clickedOption" : ""} `}
                    value={index}
                    onClick={() => {
                      handleResult(index);
                      handleNext();
                      handleScore(index);
                      setOption(index);
                      setProgress((prev)=>prev+1);
                    }}
                    disabled={result !== ""}
                  >
                    {option}
                  </button>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {start && !end && (
                  <Timer
                    setQNumber={setQNumber}
                    data={data}
                    handleResult={handleResultEmpty}
                    handleOption={handleOptionNull}
                    handleNext={handleNext}
                  />
                )}
                {next && (
                  <button
                    onClick={() => {
                      setResult("");
                      handleQNumber();
                      handleNext();
                      setOption(null);
                    }}
                    className="startbtn nextbtn btnn"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        {start && qNumber === data.length && (
          <Highscore
            score={score}
            data={data}
            handleStart={handleStart}
            handleEnd={handleEnd}
            setQNumber={setQNumber}
            setScore={setScore}
            highscore={highscore}
            setNext={setNext}
            setProgress={setProgress}
          />
        )}

        {start && end && (
          <Highscore
            score={score}
            data={data}
            handleStart={handleStart}
            handleEnd={handleEnd}
            setQNumber={setQNumber}
            setScore={setScore}
            highscore={highscore}
            setNext={setNext}
            setProgress={setProgress}
          />
        )}
      </div>
    </div>
  );
}