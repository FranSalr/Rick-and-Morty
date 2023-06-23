import Card from "../Card/Card";
import SContainer from "../SContainer/SContainer";

export default function Cards(props) {
  const { characters } = props;
  return (
    <SContainer>
      {characters.map((character) => (
        <Card
         name={character.name}
         status={character.status}
         species={character.species}
         gender={character.gender}
         origin={character.origin.name}
         image={character.image}
         key={character.id}
         onClose={()=>alert('Eliminar')}
        />
      ))}
    </SContainer>
  );
}
