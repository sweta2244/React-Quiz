import React, { useReducer } from 'react'
import { createContext } from 'react';
import { useContext } from 'react'

const QuizContext=createContext();
const initiaState={status:""}
    
export default function QuizProvider({children}) {
    const [{status},dispatch]=useReducer(reducer,initiaState);
  return (
    <div>
        <QuizContext.Provider value={{status}}>
            {children}
        </QuizContext.Provider>
    </div>
  )
}

function useQuiz(){
    const context=useContext(QuizContext);
    return context;
}

function reducer(state,action){

}