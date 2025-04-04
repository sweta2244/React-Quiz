import React from 'react'
import {useQuiz} from './Context';

export default function ScoreBoard() {
    const {qNumber,data,score}=useQuiz();
  return (
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
  )
}
