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

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <DivCard>
         <Button onClick={() => onClose(id)}>X</Button>
         {/* onClick={()=>onClose()}: De esta forma estoy ejectutando la funcion onClose */}
         <h2 style={{textDecoration: "none", color: "white"}}>{name}</h2>
         {/* <h4>{status}</h4> */} {/*Lo comento para no mostrarlo} */}
         <h4  style={styleSpecie}>{species}</h4>
         <h4 style={styleGender}>{gender}</h4>
         {/* <h4>{origin}</h4> */}
         <img style={{display: "block"}} src={image}  alt="Not found" />
      </DivCard>
   );
};