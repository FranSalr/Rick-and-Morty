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
  const { pathname } = useLocation(); // "/endpoint"

  const navigate = useNavigate();
  const [access, setAccess] = useState(true);
  const dispatch = useDispatch();

  //false DB
// const email = "ejemplo@gmail.com";
// const password = "Password16";

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      window.alert(error.response.data.response);
    }
  }

  //!!! CODIGO PROMESAS
  // function login(userData) {
  //   const { email, password } = userData;
  //   const URL = "http://localhost:3001/rickandmorty/login/";
  //   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //     const { access } = data;
  //     setAccess(data);
  //     access && navigate("/home");
  //   });
  // }

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  async function onSearch(id) {
    try {
      const { data } = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (!characters.find((char) => char.id === data.id)) {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } 
        else {
          window.alert(
            "¡No hay personajes con este ID!  ¡No se puede repetir el mismo personaje!"
          );
        }
      }
    } catch (error) {
      debugger;
      window.alert(error.response.data.message);
    }
  }

  //ASYNC AWAIT
  // const onSearch = async (id) => {
  //   try {
  //     const { data } = await axios(
  //       `http://localhost:3001/rickandmorty/character/${id}`
  //     );
  //     if (
  //       data.name &&
  //       !characters.find((character) => character.id === data.id)
  //     ) {
  //       setCharacters((characters) => [...characters, data]);
  //     } else {
  //       window.alert(
  //         "¡No hay personajes con este ID!  ¡No se puede repetir el mismo personaje!"
  //       );
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //!!! CODIGO PROMESAS
  // function onSearch(id) {
  //   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
  //     ({ data }) => {
  //       if (
  //         data.name &&
  //         !characters.find((character) => character.id === data.id)
  //       ) {
  //         setCharacters((characters) => [...characters, data]);
  //       } else {
  //         window.alert(
  //           "¡No hay personajes con este ID!  ¡No se puede repetir el mismo personaje!"
  //         );
  //       }
  //     }
  //   );
  // }

  function onClose(id) {
    // [{id},{id},{id},{id},{id}]
    // fiterCharacters = [{id}, {id}, {id}]
    const fiterCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(fiterCharacters);
    dispatch(removeFav(id));
  }
  // const onClose = (id) => {
  //   const filteredCharacters = characters.filter(
  //     (character) => character.id !== id
  //   );
  //   setCharacters(filteredCharacters); // En lugar de pasar [filteredCharacters] como argumento a setCharacters,le paso simplemente filteredCharacters, ya que este es un array resultante del filtro y no necesitas envolverlo en otra matriz.
  //   dispatch(removeFav(id));
  // };

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} logout={setAccess} />}
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
