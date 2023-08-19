import { useHistory } from "react-router-dom"; // Este hook nos permite acceder al historial de navegación de la aplicación, lo que nos permite redirigir a diferentes rutas.

const Landing = () => {
    const history = useHistory(); // Estamos usando el hook useHistory para obtener el objeto history que nos permitirá gestionar la navegación en la aplicación.
 return(
    <>
        <h1>BIENVENIDOS A LA DEMO DE REACT ROUTING</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora unde sed laudantium! Quia ad cum error inventore? Molestiae natus numquam iusto. Repellendus obcaecati rerum hic aliquam in excepturi veritatis ipsum.</p>

        <button onClick={() => {history.push("/home") }}>INGRESAR</button>
        {/* Este es un botón que tiene un evento onClick. Cuando se hace clic en el botón, la función de flecha dentro de onClick se ejecuta. En este caso, estamos usando el método history.push("/home") para redirigir al usuario a la ruta "/home". */}
    </>
 );
};

export default Landing;