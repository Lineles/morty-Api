import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


import './App.css';
import CaractersPage from "./Components/CaracterPage/CaractersPage";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/caracters" element={<CaractersPage /> } />
      </Routes>
    </Router>
  );
}

export default App;
