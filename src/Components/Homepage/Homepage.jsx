

import { useEffect, useState } from "react";
import "./Homepage.css"

function Homepage () {
    const [Caracters, setCharacters] = useState([]);

    useEffect(() => {
        fetchCaracters()
    }, []);

    const fetchCaracters = () => {
        fetch(`https://rickandmortyapi.com/api/character`)
        .then(response => response.json())
        .then(data => setCharacters(data.results))
    }


    return (
        <div>
            {Caracters.map(caracter => (
                <div key={caracter.id}>
                    <h1>{caracter.name}</h1>
                </div>
            ))}
            
        </div>
    )
}; 

export default Homepage;