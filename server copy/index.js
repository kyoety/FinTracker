const express = require('express');
const app = express();
const cors = require('cors');
const db = require("./app/models");
db.sequelize.sync();
const PORT = 3333;

var corsOptions = {
      origin: "http://localhost:8081"
};

app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json());
app.use(require('./routes'));


server.post("/register", (req, res) => {
      const { name } = req.body;
      const { cost } = req.body;
      const { category } = req.body;

      let sql = "INSERT INTO games (name, cost, category) VALUES (?,?,?)"
      db.query(sql, [name, cost, category], (err,result) =>{
            if (err) {
                  console.log(err);
            }else{
                  console.log(result);
            }
      })
});



app.get("/", (req, res) => {
      res.json({ message: "Welcome to bezkoder application." });
});

app.listen(PORT, () => {
      console.log(`Server started at: http://localhost:${PORT}`)
})

