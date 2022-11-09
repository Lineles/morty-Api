import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CaracterQuiz from "./Components/CaracterQuiz/CaracterQuiz";
import Quiz from "./Components/CaracterQuiz/Quiz";
import QuizContextProvider from "./Contexts/QuizContext";

import './App.css';
import Header from "./Components/Header/Header";


function App() {

  
  return (

      <QuizContextProvider>
          <Router >
            <Header /> 
            <Routes>
              <Route path="/" element={<Quiz /> } /> 
              <Route path="/CaracterQuiz" element={<CaracterQuiz />} />
            </Routes>
          </Router>
      </QuizContextProvider>

  );
}

export default App;
