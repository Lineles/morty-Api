import { useState, createContext } from "react";

export const QuizContext = createContext();

export default function QuizContextProvider (props) {

    const [QuizArray, setQuizArray] = useState([])

    const handleQuizSettings = (value) => setQuizArray(value)

    return(
        <QuizContext.Provider value={{QuizArray, handleQuizSettings}}>
            {props.children}
        </QuizContext.Provider>
    )

};
