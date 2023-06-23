import styled from "styled-components";

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
}

const styleGender = {
   display: "inline-block",
   fontSize: "16px",
   color: "darkgreen",
   marginRight: "15px",
   marginTop: "-10px",
}

export default function Card(props) {
   return (
      <DivCard>
         <Button onClick={props.onClose}>X</Button>
         <h2 style={{textDecoration: "none", color: "white"}}>{props.name}</h2>
         {/* {<h4>{props.status}</h4>} {/*Lo comento para no mostrarlo} */}
         <h4 style={styleSpecie}>{props.species}</h4>
         <h4 style={styleGender}>{props.gender}</h4>
         {/* {<h4>{props.origin.name}</h4>} */}
         <img style={{display: "block"}} src={props.image} alt="" />
      </DivCard>
   ); 
}