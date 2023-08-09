import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar ({onSearch}) {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      // cada vez que el usuario escriba algo en el input
      //se guarde en el estado local id (es decir se actualiza el estado)
      const {value} = event.target;
      setId(value);
   };

   return (
      <div>
         <input className={style.input} type='search' onChange={handleChange}/>
         <button className={style.button} onClick={()=>onSearch(id)}>Agregar</button>
          {/* onClick={()=>onSearch(id)}: De esta forma estoy ejectutando la funcion onClose */}
      </div>
   );
};