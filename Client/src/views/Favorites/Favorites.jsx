import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/Card/Card";
import { filterCards, orderCards } from "../../redux/actions";

const DivCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const DivFilter = styled.div`
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const DivOrdered = styled.div`
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Favorites = ({ onClose }) => {
  const { myFavorites } = useSelector((state) => state); // Haciendolo de esta manera {destructuring} es equivalente a hacerlo como la linea de abajo, me ahorro hacer ese codigo.
  // const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    const order = event.target.value;
    dispatch(orderCards(order)); // A o D
    // setAux(!aux)
  };

  const handlerFilter = (event) => {
    const filter = event.target.value;
    dispatch(filterCards(filter)); // male o female, etc.
    // setAux(!aux)
  };

  return (
    <DivCard>
      <DivOrdered>
        <select name="" id="" onChange={handlerOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
      </DivOrdered>
      <DivFilter>
        <select name="" id="" onChange={handlerFilter}>
          <option value="Todos">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </DivFilter>
      {/* Mapea y renderiza la Card de los personajes favoritos */}
      {myFavorites.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id} // le pasamos el id del charaje para luego ejecutar el onClose
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={onClose}
          />
        );
      })}
    </DivCard>
  );
};

export default Favorites;
