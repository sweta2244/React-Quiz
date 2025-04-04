import { useEffect, useState } from "react";

export default function Timer({ setQNumber, data, handleResult, handleOption }) {
    const [secondsRemaining, setSecondsRemaining] = useState(450);
    const mins = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
  
    useEffect(() => {
      if (secondsRemaining <= 0) {
        setQNumber(data.length);
        handleResult();
        handleOption();
        return;
      }
  
      const id = setInterval(() => {
        setSecondsRemaining((prev) => prev - 1);
      }, 1000);
  
      return () => clearInterval(id);
    }, [secondsRemaining]);
  
    return (
      <div className="timer">
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </div>
    );
  }