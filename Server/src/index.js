const express = require("express");
const { conn } = require("./db/connection");
const server = express();
const PORT = 3001;
const router = require("./routes/index");
// Libreria Dotenv -> guardar nuestras variables de entorno
// .env

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use("/rickandmorty", router);

conn
  .sync({
    force: true,
  })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server raised in port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

//! Codigo de WEB SERVER
// const http = require("http");
// const getCharById = require("./controllers/getCharById");

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     const { url } = req;

//     if (url.includes("/rickandmorty/character/")) {
//       const id = Number(url.split("/").at(-1))
//       getCharById(res, id);
//     } else {
//       res.writeHead(400, { "Content-type": "application/json" })
//       res.end(JSON.stringify({ error: "Route not found"}));
//     }
//   })
//   .listen(3001, "localhost");