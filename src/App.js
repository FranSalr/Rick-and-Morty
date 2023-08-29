import React, { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Detail from "./views/Detail/Detail";
import Login from "./views/Login/Login";
import Favorites from "./views/Favorites/Favorites";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const EMAIL = "ejemplo@gmail.com";
  const PASSWORD = "Password16";

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  function login(dataUser) {
    if (dataUser.password === PASSWORD && dataUser.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  function logout() {
    setAccess(false);
    navigate("/"); // Redirige a la página de inicio de sesión (Form)
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
    dispatch(removeFav(id));
  };

  const isHomeRoute = location.pathname === "/";

  return (
    <div className="App">
      {!isHomeRoute && <Nav onSearch={onSearch} logout={logout}/>}
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route
          path="/home"
          element={<Home characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;
