import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../../Contexts/QuizContext";

import "./CaracterQuiz.css"

function CaracterQuiz (props) {

    let [currentQuestion, setCurrentQuestion] = useState(0);
    const [Caracter, setCharacter] = useState([]);
    const [QestionInput, setQuestionInput] = useState("");
    let [points, setPoints] = useState(0);
    let [rightAnswers, setRightAnswers] = useState(0);
    let [wrongAnswers, setwrongAnswers] = useState(0);
    const { QuizArray } = useContext(QuizContext)
    const Questions = QuizArray[currentQuestion];
   

   let api = `https://rickandmortyapi.com/api/character/${Questions}`

   useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json()); 
      setCharacter(data);
    })(); 
  }, [api]);

   let {name, id, image} = Caracter;
   
   const nextQuestion = (QuestionInput) => {
        if (QuestionInput.toLowerCase() === name.toLowerCase()) {
            setRightAnswers(rightAnswers += 1)
            setCurrentQuestion(currentQuestion += 1)
            setPoints(points += 10)
        } else {
            console.log("false")
            setwrongAnswers(wrongAnswers += 1);
            setCurrentQuestion(currentQuestion += 1)
        }
    };

    const endGame = () => {
        props.setCaracterQuiz(false);
    }


    const Game = (currentQuestion) => {
        if (currentQuestion === 5){

            return(
            <div className="Game-End-Popup"> 
                    <h1 className="Game-End-h1"> Results</h1>
                    <h1 className="Game-End-h1">Points: {points}</h1>
                    <h1 className="Game-End-h1"> Correct Anwers: {rightAnswers}</h1>
                    <h1 className="Game-End-h1"> Wrong Anwers: {wrongAnswers}</h1> 
                    <button onClick={endGame} className="Game-End-button"> Ok </button>
            </div>  )
        } else {
            return(
            <div className="Quiz-Question-Container"> 
                <h1 className="Quiz-Question-h1"> Who is this? </h1>

                <img src={image} alt={id}  className="Quiz-Question-img"/>
                <input 
                    onInput={(event) => setQuestionInput(event.target.value) }
                    type="text" 
                    className="Quiz-Question-input"/>
                <button onClick={() => nextQuestion(QestionInput)} className="Quiz-Question-button"> Next </button>
                <h1 className="Quiz-Question-Points">Points {points}</h1>
            </div>)
        }}
    
    
    return (
        <div className="Caracter-Quiz-Container"> 
           {Game(currentQuestion)}
        </div>

    )
}

export default CaracterQuiz; 