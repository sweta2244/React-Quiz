import { useEffect, useState } from "react";
import {useQuiz} from "./Context";

export default function Timer() {
    const {data, dispatch,start}=useQuiz();
    const [secondsRemaining, setSecondsRemaining] = useState(450);
    const mins = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
  
    useEffect(() => {
      if (secondsRemaining <= 0) {
        dispatch({type:"time up",l:data.length});
        return;
      }
  
      const id = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);
  
      return () => clearInterval(id);
    }, [secondsRemaining]);
  
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
      {start && (
        <div className="timer">
          {mins < 10 && "0"}
          {mins}:{seconds < 10 && "0"}
          {seconds}
        </div>
      )}
      </div>
    );
  }