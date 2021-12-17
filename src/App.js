import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login } from "./componentes/Login";
import { Peso } from "./componentes/Peso";
import { Signup } from "./componentes/Signup";
import { Treino } from "./componentes/Treino";

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>{" "}
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/peso">Peso</Link>
            </li>
            <li>
              <Link to="/treino">Treino</Link>
            </li>
          </ul>
       </nav> */}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/peso" element={<Peso />} />
          <Route path="/" element={<Treino />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
