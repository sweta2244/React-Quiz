import React from 'react'
import {useQuiz} from './Context'

export default function Welcome() {
    const {start,dispatch}=useQuiz();
  return (
    <div>
        {!start && (
          <>
            <h2>Welcome to The React Quiz!</h2>
            <h3>15 questions to test your React mastery</h3>
            <button onClick={()=>dispatch({type:"start quiz"})} className="startbtn btnn">
              Start Quiz
            </button>
          </>
        )}
    </div>
  )
}
