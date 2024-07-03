//const fs= require("fs");
//fs.writeFileSync("message.txt", "Hello from Node.js", (err)=>{
    //if (err) throw err;
   //console.log("the file has been saved!");
// })
import superheros from "superheros";
const name= superheros.random();
console.log(`I am ${name}!`);