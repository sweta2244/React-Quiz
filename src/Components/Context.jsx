import { createContext, useContext } from "react";

export const MyContext=createContext();

export const useQuiz=()=>useContext(MyContext);
