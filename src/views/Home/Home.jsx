import Cards from "../../components/Cards/Cards";

const Home = ({characters, onClose}) => {
 return (
  <>
  {/* le pasamos por props la función onClose a Cards */}
    <Cards characters={characters} onClose={onClose} />
  </>
 );
};

export default Home;