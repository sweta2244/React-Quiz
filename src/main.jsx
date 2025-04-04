import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import QuizContext from './Components/QuizContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizContext>
      <App />
    </QuizContext>
  </StrictMode>,
)
