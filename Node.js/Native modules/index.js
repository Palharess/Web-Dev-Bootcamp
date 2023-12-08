const fs = require("fs");

fs.writeFile("message.txt", "Testandooooo", (err)=>{
    if(err) throw err;
    console.log("O arquivo foi criado");
});