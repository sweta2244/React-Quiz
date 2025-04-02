import { useEffect, useState } from "react";
import react from "../assets/react.svg";
export default function Header({ handleStart, start}) {
  const [data, setdata] = useState(null);
  const [result,setResult]=useState(null);
  const [next,setNext]=useState(false);
  const [qNumber,setQNumber]=useState(0);
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
  function handleQNumber(){
    setQNumber((prev)=>prev+1);
  }

  function handleNext(){
    setNext(!next);
  }
  function handleResult(index){
     data[qNumber].correctOption===index?(setResult("correct")):setResult("incorrect");
  }
  return (
    <div className="main-div">
      <div className="header">
        <div className="logo-section">
          <img src={react} alt="react" width="100px" />
          <h1>THE REACT QUIZ</h1>
        </div>

        {!start && (
          <>
            <h2>Welcome to The React Quiz!</h2>
            <h3>15 questions to test your React mastery</h3>
            <button onClick={handleStart}>Start Quiz</button>
          </>
        )}

        {start && (
          <div>
            <h2>{data[qNumber].question}</h2>
            {data[qNumber].options.map((option,index)=><div key={index}><button value={index} onClick={(e)=>{setResult(e.target.value);handleResult(index);handleNext();}}>{option}</button>
            </div>)}
            <p>{result}</p>
            {next && <button onClick={()=>{setResult(null);handleQNumber();handleNext();}}>Next</button>}
          </div>
        )}
      </div>
    </div>
  );
}