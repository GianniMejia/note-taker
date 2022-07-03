const express = require("express");
const fs = require("fs");
const uuid = require("uuid");

const app = express ();

//app.use ("/", (req, res) => {
   // res.send("Hello World.");
//});

app.get("/notes", (req, res) =>{
    res.sendFile("./notes.html");
});
app.get("*", (req,res)=>{
    res.senfFile("./ndex.html");
});

app.get("/api/notes",(req,res)=>{
    let content = fs.readFileSync("./db.json");
});
app.post("/api/notes", (req, res)=> {
    let content =fs.readFileSync("./db.json");
    let notesObject = JSON.parse(content.toString());
    let note =req.body;
    notesObject.push(note);
    fs.writeFileSync(".db.json", JSON.stingify(notesObject));

    res.send(note);
})


const PORT = 8000;
app.listen(PORT, () => console.log("server runnung at port:",PORT));
