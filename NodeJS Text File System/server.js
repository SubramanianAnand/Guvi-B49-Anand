const express = require("express");
const fs = require("fs");
const path = require("path");

const outputFolder = './output';

if(!fs.existsSync(outputFolder)){
    fs.mkdirSync(outputFolder);
}

const app = express();

const PORT = 3000;

app.get('/createFile', (req, res) =>{
    const currentTime = new Date();
    
   const year =  currentTime.getFullYear().toString();
   const month =  (currentTime.getMonth()+1).toString();
   const date =  currentTime.getDate().toString();
   const hours =  currentTime.getHours().toString();
   const mins =  currentTime.getMinutes().toString();
   const secs =  currentTime.getSeconds().toString();
   
   const dateTimeForFileName = `${year}-${month}-${date}-${hours}-${mins}-${secs}.txt`;

   const filePath = path.join(outputFolder, dateTimeForFileName);

   console.log("Filepath:", filePath);

   fs.writeFile(filePath, currentTime.toISOString(), (err) =>{
    if(err){
        res.status(500).send(`Error creating File: ${err}`);
        return;
    }
    res.send(`File created succesfully at : ${filePath}`);
   });
});

app.get("/getFiles", (req, res) => {
    fs.readdir(outputFolder, (err, files) => {
        if(err){
        res.status(500).send(`Error reading File: ${err}`);
        return;
    }

    const textFiles = files.filter((file)=>path.extname(file) === ".txt");
    res.json(textFiles); 
    });
});

app.listen(PORT, () =>{
    console.log("Server is running on PORT", PORT);
});
