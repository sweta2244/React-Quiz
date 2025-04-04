import {useQuiz} from "./Context";

export default function Highscore(){
  const{score,data,highscore,dispatch,qNumber,start}=useQuiz();
    function handleHighScore() {
      if (score > highscore.current) {
        highscore.current = score;
        return score;
      } else return highscore.current;
    }
    return (
      <div>
      {start && qNumber === data.length && (
        <>
          <button className="btnScored-result">
            You scored {score} out of{" "}
            {data.reduce((total, curr) => {
              return (total = total + curr.points);
            }, 0)}
          </button>
          <p>(Highscore: {handleHighScore()} points)</p>
          <button
            className="startbtn btnn"
            onClick={() => dispatch({type:"restart"})
            }
          >
            Restart
          </button>
        </>
      )}
      </div>
    );
  }
  