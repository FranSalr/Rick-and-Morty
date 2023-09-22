const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  try {
    const { id: charId } = req.params;
    const response = await axios.get(URL + charId) // response
      const { id, name, gender, species, origin, image, status } = response.data
      res.json({ id, name, gender, species, origin, image, status })
  } catch (error) {
    res.status(500).json({message: error.message}); //5xx
  }
}

//!!! CODIGO DE PROMESAS
// const getCharById = (req, res) => {
//   const { id } = req.params;
//   axios
//     .get(`${URL}/${id}`)
//     .then(({ data }) => {
//       if (data) {
//         const { id, name, gender, species, origin, image, status } = data;
//         const character = { id, name, gender, species, origin, image, status };

//         res.status(201).json(character);
//       } else {
//         res.status(404).json({ mesagge: "Not Found" });
//       }
//     })
//     .catch((error) => {
//       res.status(500).json({ mesagge: error });
//     });
// };

module.exports = getCharById;

//!!! CODIGO DE WEB SERVER
// const axios = require("axios");

// const sucessH = (response, res) => {
//   const { id, name, gender, species, origin, image, status } = response.data;
//   res.writeHead(200, { "Content-type": "application/json" });
//   res.end(JSON.stringify({ id, name, gender, species, origin, image, status }));
// };

// const errorH = (error, res) => {
//   res.writeHead(500, { "Content-type": "text/plain" });
//   res.end(error.message);
// };

// const getCharById = (res, id) => {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => sucessH(response, res))
//     .catch((error) => errorH(error, res));
// };

// module.exports = getCharById;
