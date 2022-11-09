import { useState } from "react";
import QuizSettings from "./QuizSettings";
import CaracterQuiz from "./CaracterQuiz";

import "./Quiz.css"


function Quiz () {

    const [isSettingsDisplayed, setSettings] = useState(false)
    const [isCaracterQuizDisplayed, setCaracterQuiz] = useState(false)



    return (
        <div className="Quiz-container">
            {isSettingsDisplayed ? (
                <QuizSettings setCaracterQuiz={setCaracterQuiz} setSettings={setSettings} /> 
            ): null }

            {isCaracterQuizDisplayed ? (
                <CaracterQuiz setCaracterQuiz={setCaracterQuiz} setSettings={setSettings}/> 
            ): (
                <div className="Start-Quiz-container">
                    <h1 className="Start-Quiz-h1"> Quize time</h1>
                    <button onClick={() => setSettings(true)} className="Start-Quiz-button"> Start Quiz</button>
                </div> 
            ) }
        </div>
    )
};

export default Quiz;
