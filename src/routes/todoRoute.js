const { Router, query } = require("express");
const database = require("../config/db");

const todoRouter = Router();

todoRouter.get("/", async (req, res) => {
  try {
    // we have to get the data from the server
    // to make  the quries to the database
    // todo
    // to get all the todos
    const page = req.query.page || 1;
    const limit = req.query.limit || 3;
    const ofset = (page-1)*limit;

    const query = `select * from todos LIMIT ${limit} OFFSET ${ofset}`;
    database.query(query, (err, result) => {
      if (err) console.log(err);
      console.log(result);
      res.send(result);
    });
    // how we can create the table
    // create table todo(title varchar , status bolean)
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

todoRouter.post("/", async (req, res) => {
  const { title } = req.body;
  try {
    const query = "INSERT INTO todos(title) values(?)";
    database.query(query, [title], (err, result) => {
      if (err) console.log(err);
      else res.status(201).send("todo is created successfully");
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

todoRouter.patch("/:id", async (req, res) => {
  try {
    let baseQuery = "UPDATE todos SET status = ?";
    if(req.query.title){
        baseQuery+=", title = ?"
    }
    baseQuery+='WHERE id =?'
    database.query(
      query,
      [req.body.status, req.body.title, +req.params.id],
      (err, result) => {
        if (err) console.log(err);
        else res.send("your todo is updated successfully");
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

todoRouter.delete("/:id", async (req, res) => {
  try {
    const query = "DELETE FROM todos WHERE id = ?";
    database.query(query, [+req.params.id], (err, result) => {
      if (err) console.log(err);
      else res.send("todo is deleted successfully");
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

module.exports = todoRouter;


// database.query(query,[id,req.body],(err,result)=>{
  
// })