import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios';


function App() {
   const [characters, setCharacters] = useState([]);
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name && !characters.find((character) => character.id === data.id)) {
            setCharacters((characters) => [...characters, data]);
         } else {
            window.alert('¡No hay personajes con este ID!  ¡No se puede repetir el mismo personaje!');
         }
      });
   }
   
   const onClose = (id) => {
      const filteredCharacters = characters.filter((character) => character.id !== id)
      setCharacters(filteredCharacters); // En lugar de pasar [filteredCharacters] como argumento a setCharacters,le paso simplemente filteredCharacters, ya que este es un array resultante del filtro y no necesitas envolverlo en otra matriz.
   };

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/> 
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
