// what is middleware and how it's working .

const database = require("../config/db");

const ensureTable = (req, res, next) => {
  console.log("this is the esure table middleware");
  const query = `CREATE TABLE IF NOT EXISTS todos(
  id INT PRIMARY KEY  AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  status BOOL DEFAULT FALSE
  )`;

  database.query(query, (err, result) => {
    if (err) console.log(err);
    else next();
  });

};

module.exports = ensureTable;
