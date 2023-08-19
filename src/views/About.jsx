import { useLocation } from "react-router-dom";
import myImage from "../images/myImage.jpg"


const About = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>BIENVENIDOS A MI APP!</h1>
      <h4>
      <img src={myImage} alt="Mi imagen" style={{ width: '400px' }}/>
      </h4>
      <h3>ME LLAMO FRANCO SALRACH Y SOY EL CREADOR DE ESTA APLICACIÓN</h3>
    </>
  );
};

export default About;
