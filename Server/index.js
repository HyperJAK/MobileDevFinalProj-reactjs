const express = require ("express")
const app = express()
const bodyParser = require('body-parser')
const cors=require('cors')
const mysql = require ('mysql2')

const db = mysql.createPool({
    host: "localhost",
    user: "JAK",
    password:"jak1",
    database:"mobiledevdb"

})

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
    const id = req.body.id;
    const sqlSelect = "SELECT * FROM users where id = ?";
    db.query(sqlSelect, [id], (err, result)=>{
        res.send(result)
    });

});

app.get("/api/getUsers", (req, res) => {
    const sqlSelectUsers = "SELECT id,email,password FROM account";
    db.query(sqlSelectUsers, (err, result) => {
        res.send(result);
    });
});


app.post("/api/update", (req, res)=>{


    app.delete("/api/delete/:id", (req, res) => {
        const idToDelete = req.params.id;
        const sqlDelete = "DELETE FROM account WHERE id = (?)";

        db.query(sqlDelete, idToDelete, (err, result) => {
            if (err) {
                console.error("Error deleting record:", err);
                return res.status(500).send("Internal Server Error");
            }

            res.status(200).send("Record deleted successfully");
        });
    });


    const id = req.body.id;
    const name=req.body.name;
    const email=req.body.email;
    const title=req.body.title;
    const department=req.body.department;
    const status=req.body.status;
    const position=req.body.position;
    const picture=req.body.picture;
    const allowed=req.body.allowed;

    const sqlUpdate = "UPDATE users SET name=?, email=?, title=?, department=?, status=?, position=?, picture=?, allowed=? WHERE id = ?";

    db.query(sqlUpdate, [name,email,title,department,status,position,picture,allowed, id], (err, result)=>{

    });

});

app.post("/api/insertUser", (req, res) => {
    const email = req.body.email;
    const password = req.body.pass;

    const sqlInsertUser = "INSERT INTO account (email, password) VALUES (?, ?)";
    db.query(sqlInsertUser, [email, password], (err, result) => {
    });
});

app.listen(5174, () =>{console.log("running on port 5174"); })