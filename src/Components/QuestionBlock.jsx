import React from "react";
import {useQuiz} from "./Context";

export default function QuestionBlock() {
  const { data, qNumber, result, option1, dispatch } = useQuiz();
  return (
    <div>
      <h3>{data[qNumber].question}</h3>
      {data[qNumber].options.map((option, index) => (
        <div key={index}>
          <button
            className={`btn ${result ? "active" : ""} ${
              result && index === data[qNumber].correctOption ? "correct" : ""
            } ${index === option1 ? "clickedOption" : ""} `}
            value={index}
            onClick={() => {
              data[qNumber].correctOption === index
                ? dispatch({
                    type: "correct option clicked",
                    scoreValue: data[qNumber].points,
                    option: index,
                  })
                : dispatch({ type: "incorrect option clicked", option: index });
            }}
            disabled={result !== ""}
          >
            {option}
          </button>
        </div>
      ))}
    </div>
  );
}
