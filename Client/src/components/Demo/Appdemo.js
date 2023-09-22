//* La función App es un componente de React que representa la interfaz de usuario de una aplicación. Aquí está la explicación línea por línea:

function App() {
    return ( // La función App devuelve un bloque de elementos JSX que representa la estructura y contenido del componente.
       <div className='App'>  {/* Se crea un contenedor <div> con la clase CSS "App". Esto proporciona un contenedor para los elementos hijos del componente. */}  
          <SearchBar onSearch={(characterID) => window.alert(characterID)} /> {/*Se renderiza el componente SearchBar y se le pasa la prop onSearch. La prop onSearch es una función de callback que se ejecuta cuando se realiza una búsqueda en el componente SearchBar. En este caso, se muestra una alerta con el ID del personaje.*/}
          <Cards characters={characters} /> {/*Se renderiza el componente Cards y se le pasa la prop characters. La prop characters contiene los datos de los personajes que se utilizarán para representar una lista de personajes.*/}

          <Card // Se renderiza el componente Card con las props correspondientes para el personaje "Rick"
             id={Rick.id}
             name={Rick.name} 
             status={Rick.status} 
             species={Rick.species} 
             gender={Rick.gender}
             origin={Rick.origin.name}
             image={Rick.image}
             onClose={() => window.alert('Emulamos que se cierra la card')} // Estas props se utilizarán para mostrar la información del personaje en la tarjeta y se proporcionará una función de callback para el evento onClose que muestra una alerta simulando el cierre de la tarjeta.
          />
       </div>
    );
 }

 //*****************************************************************************************************************************/
 