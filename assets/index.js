const express = require("express");

const app = express ();

app.use ("/", (req, res) => {
    res.send("Hello World.");
});

app.use("/notes", (req, res) =>{
    res.sendFile("./notes.html");
});
app.use("*", (req,res)=>{
    res.senfFile("./ndex.html");
});

app.get("/api/notes",(req,res)=>{
    let content = fs.readFileSync("./db.json");
});
app.post("/api/notes", (req, res)=> {})


const PORT = 8000;
app.listen(PORT, () => console.log("server runnung at port:",PORT));
