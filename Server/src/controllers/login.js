const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
 
  const user = users.some(user => user.email === email && user.password === password)
  user ? res.json({access: true}) : res.json({access: false})
}


module.exports = login;
