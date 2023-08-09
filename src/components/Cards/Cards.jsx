import Card from "../Card/Card";
import SContainer from "../SContainer/SContainer";

export default function Cards({characters, onClose}) {
  return (
    <SContainer>
      {characters.map(({id, name, status, species, gender, origin, image}) => {
        return (
        <Card
         name={name}
         status={status}
         species={species}
         gender={gender}
         origin={origin}
         image={image}
         id={id}
         onClose={onClose} //onClose={onClose} 
        />
      );
        })}
    </SContainer>
  );  
} 
