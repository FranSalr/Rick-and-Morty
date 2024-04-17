const { Favorite } = require("../db/connection");
const getAllFavorites = async () => {
  return await Favorite.findAll();
};
module.exports = getAllFavorites;