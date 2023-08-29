import Card from "../Card/Card";
import SContainer from "../SContainer/SContainer";

export default function Cards({ characters, onClose }) {
  return (
    <SContainer>
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              key={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin}
              image={image}
              id={id} // le pasamos el id del personaje para luego ejecutar onClose.
              onClose={onClose}
            />
          );
        }
      )}
    </SContainer>
  );
}
