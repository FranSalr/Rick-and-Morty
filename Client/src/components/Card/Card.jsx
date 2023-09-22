import styled from "styled-components";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const DivCard = styled.div`
  display: inline-block;
  background-color: rgba(255, 222, 173, 0.6);
  border-radius: 10px;
  color: white;
  overflow: hidden;
  margin: 15px 0px;
  max-width: 18.8rem;
`;

const Button = styled.button`
  background-color: dodgerblue;
  color: darkgreen;
  border: 0px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  margin: 15px 15px 0px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const styleSpecie = {
  display: "inline-block",
  fontSize: "16px",
  color: "dodgerblue",
  marginRight: "15px",
  marginTop: "-10px",
};

const styleGender = {
  display: "inline-block",
  fontSize: "16px",
  color: "darkgreen",
  marginRight: "15px",
  marginTop: "-10px",
};

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites)

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(!isFav)
      dispatch(removeFav(props.id))
    } else {
      debugger
      setIsFav(!isFav)
      dispatch(addFav(props))
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  return (
    <DivCard>
      {isFav ? (
        <Button onClick={handleFavorite}>❤️</Button>
      ) : (
        <Button onClick={handleFavorite}>🤍</Button>
      )}
      <Button onClick={() => props.onClose(props.id)}>X</Button>
      {/* onClick={()=>onClose()}: De esta forma estoy ejectutando la funcion onClose */}
      <Link to={`/detail/${props.id}`}>
        <h2 style={{ textDecoration: "none", color: "blue" }}>{props.name}</h2>
      </Link>
      {/* <h4>{props.status}</h4> */} {/*Lo comento para no mostrarlo} */}
      <h4 style={styleSpecie}>{props.species}</h4>
      <h4 style={styleGender}>{props.gender}</h4>
      {/* <h4>{props.origin}</h4> */}
      <img style={{ display: "block" }} src={props.image} alt="Not found" />
    </DivCard>
  );
}