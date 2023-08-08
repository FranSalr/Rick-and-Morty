import Card from "../Card/Card";
import SContainer from "../SContainer/SContainer";

export default function Cards({characters}) {
  const onClose= () => {alert('Eliminar')};
  return (
    <SContainer>
      {characters.map(({name, status, species, gender, origin, image, id}) => {
        return (
        <Card
         name={name}
         status={status}
         species={species}
         gender={gender}
         origin={origin}
         image={image}
         key={id}
         onClose={onClose}
        />
      );
        })}
    </SContainer>
  );
} 
