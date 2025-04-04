import {useQuiz} from "./Context"

export default function ProgressBar() {
    const {progress,data}=useQuiz();
    {console.log(progress,data)}
  return (
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
  )
}
