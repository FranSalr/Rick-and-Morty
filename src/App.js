import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { useState } from "react";
import axios from "axios";
import Home from "./views/Home";
import About from "./views/About";
import Detail from "./views/Detail";
import Form from "./components/Form/Form";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "Password16";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (
          data.name &&
          !characters.find((character) => character.id === data.id)
        ) {
          setCharacters((characters) => [...characters, data]);
        } else {
          window.alert(
            "¡No hay personajes con este ID!  ¡No se puede repetir el mismo personaje!"
          );
        }
      }
    );
  }

  const onClose = (id) => {
    const filteredCharacters = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(filteredCharacters); // En lugar de pasar [filteredCharacters] como argumento a setCharacters,le paso simplemente filteredCharacters, ya que este es un array resultante del filtro y no necesitas envolverlo en otra matriz.
  };

  const isHomeRoute = location.pathname === "/";

  return (
    <div className="App">
      {!isHomeRoute && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
