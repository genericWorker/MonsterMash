const fs = require('fs').promises;

const path = process.argv[1];
console.log("Script:   " + path);

const filename = process.argv[2];
console.log("Filename: " + filename);

console.log("=======================================================");
fs.readFile(filename, "utf8") 
    .then(list =>  console.log(list)) 
    .catch(error => console.log(error));