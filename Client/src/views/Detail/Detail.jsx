import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DivDetail = styled.div`
  display: inline-block;
  background-color: rgba(255, 222, 173, 0.6);
  border-radius: 10px;
  color: white;
  overflow: hidden;
  margin: 15px 0px;
  max-width: 18.8rem;
`;

const styleGeneral = {
  display: "inline-block",
  fontSize: "16px",
  color: "darkgreen",
  marginRight: "15px",
  marginTop: "-10px",
};

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
          setLoading(false);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <DivDetail>
      <h2 style={styleGeneral}>{character.name}</h2>
      <h2 style={styleGeneral}>{character.status}</h2>
      <h2 style={styleGeneral}>{character.species}</h2>
      <h2 style={styleGeneral}>{character.gender}</h2>
      {character.origin.name && character.origin.name !== "unknown" && (
        <h2 style={styleGeneral}>{character.origin.name}</h2>
      )}
      <img src={character.image} alt={character.name} />
    </DivDetail>
  );
};

export default Detail;
