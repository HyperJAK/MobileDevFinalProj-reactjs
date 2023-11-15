const express = require ("express")
const app = express()
const bodyParser = require('body-parser')
const mysql = require ('mysql2')
const cors = require('cors');
app.use(cors());



const db = mysql.createPool({
    host: "localhost",
    user: "JAK",
    password: "jak1",
    database: "CompSecDb",
  });

db.getConnection((err, connection) => {
if (err) {
    console.error('Error getting connection from pool:', err);
    return;
}

console.log('Connected to the database');

connection.release();
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/get", (req,res)=> {
    const sqlSelect = "SELECT * FROM users";
    db.query(sqlSelect, (err, result)=>{
        res.send(result)
    });

});

app.get("/api/getUsers", (res) => {
    const sqlSelectUsers = "SELECT email, password FROM account";
    db.query(sqlSelectUsers, (err, result) => {
        if (err) {
            console.error("Error fetching users:", err);
            return res.status(500).send("Internal Server Error");
        }

        const usersArray = Array.isArray(result) ? result : [result];
        res.send(usersArray);
    });
});


app.post("/api/insert", (req)=>{

    app.delete("/api/delete/:id", (req, res) => {
        const idToDelete = req.params.id;
        const sqlDelete = "DELETE FROM users WHERE id = (?)";

        db.query(sqlDelete, idToDelete, (err, result) => {
            if (err) {
                console.error("Error deleting record:", err);
                return res.status(500).send("Internal Server Error");
            }

            res.status(200).send("Record deleted successfully");
        });
    });



    const name=req.body.name;
    const email=req.body.email;
    const title=req.body.title;
    const department=req.body.department;
    const status=req.body.status;
    const position=req.body.position;
    const picture=req.body.picture;
    const allowed=req.body.allowed;

    const sqlInsert = "INSERT INTO users (name,email,title,department,status,position,picture,allowed) VALUES (?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [name,email,title,department,status,position,picture,allowed], (err, result)=>{
    });

});

app.post("/api/insertUser", (req) => {
    const email = req.body.email;
    const password = req.body.pass;

    const sqlInsertUser = "INSERT INTO account (email, password) VALUES (?, ?)";

    db.query(sqlInsertUser, [email, password], (err, result) => {
    });
});

app.listen(5174, () =>{console.log("running on port 5174"); })