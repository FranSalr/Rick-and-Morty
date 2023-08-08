import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import characters, { Rick } from './data.js';
import { useState } from 'react';

function App() {
   const [characters, setCharacters] = useState([
      {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   },
]);

   // const onSearch = () => {
   //    setCharacters(id) => ({
   // //       [
   // //       ...characters,
   // //       id: 1,
   // //       name: 'Rick Sanchez',
   // //       status: 'Alive',
   // //       species: 'Human',
   // //       gender: 'Male',
   // //       origin: {
   // //          name: 'Earth (C-137)',
   // //          url: 'https://rickandmortyapi.com/api/location/1',
   // //       },
   // //       image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   // //    ]
   // })
   // }

   return (
      <div className='App'>
         <Nav /> 
         <Cards characters={characters} />
      </div>
   );
}

export default App;
