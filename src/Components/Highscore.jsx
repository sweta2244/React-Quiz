export default function Highscore({
    score,
    data,
    handleStart,
    handleEnd,
    setQNumber,
    setScore,
    highscore,
    setNext,
    setProgress
  }) {
    function handleHighScore() {
      if (score > highscore.current) {
        highscore.current = score;
        return score;
      } else return highscore.current;
    }
    return (
      <div>
        <button className="btnScored-result">
          You scored {score} out of{" "}
          {data.reduce((total, curr) => {
            return (total = total + curr.points);
          }, 0)}
        </button>
        <p>(Highscore: {handleHighScore()} points)</p>
        <button
          className="startbtn btnn"
          onClick={() => {
            handleStart();
            handleEnd();
            setQNumber(0);
            setScore(0);
            setNext(false);
            setProgress(0);
          }}
        >
          Restart
        </button>
      </div>
    );
  }
  