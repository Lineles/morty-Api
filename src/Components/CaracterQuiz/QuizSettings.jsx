import { useContext } from "react";
import { QuizContext } from "../../Contexts/QuizContext";
import "./QuizSettings.css"


function QuizSettings (props) {

      

        const { handleQuizSettings } = useContext(QuizContext);

        const StartGame = (value) => {
            handleQuizSettings(value);
            props.setCaracterQuiz(true);
            props.setSettings(false)
        }

    let Easy =  [1, 2, 3 , 4, 5];
    let Medium = [6, 599, 242 , 244, 77];
    let Hard = [65, 109, 118, 201, 243];
    let Imposible = [139, 287, 319 , 489, 566]; 

return(
    <div className="Settings-Popup">

        <div className="Settings-box">
            <h1 className="Settings-h1"> Choose Game Mode</h1>
                <button onClick={() => StartGame(Easy)} className="Settings-button">Easy</button> 
                <button onClick={() => StartGame(Medium)} className="Settings-button">Medium</button>
                <button onClick={() => StartGame(Hard)} className="Settings-button">Hard</button>
                <button onClick={() => StartGame(Imposible)} className="Settings-button">Imposible</button>
        </div>
    </div>
)
}

export default QuizSettings; 