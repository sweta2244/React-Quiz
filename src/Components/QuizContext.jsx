import { useEffect, useReducer, useState } from "react";
import { useRef } from "react";
import { MyContext } from "./Context";

const initialState = {
  start: false,
  result: "",
  next: false,
  qNumber: 0,
  score: 0,
  option1: null,
  progress: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "start quiz":
      return {
        ...state,
        start: !state.start,
      };
    case "correct option clicked":
      return {
        ...state,
        result: "correct",
        next: !state.next,
        score: state.score + action.scoreValue,
        option1: action.option,
        progress: state.progress + 1,
      };
    case "incorrect option clicked":
      return {
        ...state,
        result: "incorrect",
        next: !state.next,
        option1: action.option,
        progress: state.progress + 1,
      };
    case "next":
      return {
        ...state,
        result: "",
        qNumber: state.qNumber + 1,
        next: !state.next,
        option1: null,
      };
    case "restart":
      return {
        start: !state.start,
        qNumber: 0,
        score: 0,
        next: false,
        progress: 0,
        result: "",
        option: null,
      };
    case "time up":
      return {
        ...state,
        qNumber: action.l,
        option: null,
      };
  }
}

export default function QuizContext({children}) {
  const highscore = useRef(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setdata] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/sweta2244/react-quiz-api/main/questions.json");
        const json = await response.json();
        setdata(json.questions);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <MyContext.Provider
      value={{
        data,
        score: state.score,
        start: state.start,
        result: state.result,
        next: state.next,
        highscore,
        qNumber: state.qNumber,
        option1: state.option1,
        dispatch,
        progress: state.progress,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
