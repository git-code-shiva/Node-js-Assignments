const fs = require('fs/promises');
const express = require("express");

// const server = http.createServer(function (req, res) {   // 2 - creating server

//     //handle incomming requests here..
//     res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
//         // set response content    
//         // res.write('<html><body><h1>This is home Page.</h1></body></html>');
//         res.write('index.html')
//         res.end();

// });

// server.listen(5000); 
// console.log('Node.js web server at port 5000 is running..')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	const data=await fs.writeFile("index.html","<h1> Hello World </h1><p> This is Shiva Sharma... </p>",(err)=>{
        console.log(err);
    });
}
myFileWriter();



const app = express();

app.listen(5000, () => {
  console.log("Application started and Listening on port 5000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});