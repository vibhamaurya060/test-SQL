const express = require("express");
const database = require("./src/config/db");
const todoRouter = require("./src/routes/todoRoute");
const ensureTable = require("./src/middlewares/ensureTable");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 9090;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is a home route");
});

app.use("/todos", ensureTable, todoRouter);

app.listen(port, async () => {
  database.connect((err) => {
    if (err) console.log(err);
    else console.log("we are successfully connected to the database");
  });

  // try {
  //   await database.authenticate();
  //   console.log("successfully connected to the database");
  //   console.log(`server is running at port no ${port}`);
  // } catch (err) {
  //   console.log(err);
    
  // }
});
