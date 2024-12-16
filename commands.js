const fs = require('fs');
const path = require('path');

//Create a file
const createFile = (fileName, content) => {
    fs.writeFile(fileName, content, (err) => {
        if(err){
            console.log("Error creating file:", err.message);
            return
        }
        console.log(`File "${fileName}" create successfully.`);
    });
};

//Read a file
const readFile = (fileName) => {
    fs.readFile(fileName, 'utf8', (err, data)=> {
        if(err){
            console.error("Error reading file: ", err.message);
            return;
        }
        console.log(`Content of "${fileName}":\n${data}`);
    });
};

//Append data to a file
const appendToFile = (fileName, content) => {
    fs.appendFile(fileName, content, (err) => {
        if(err){
            console.error("Error appending to file:", err.message);
            return;
        }
        console.log(`Content added to "${fileName}".`);
        
    });
};

//Delete a file
const deleteFile = (fileName) => {
    fs.unlink(fileName, (err)=> {
        if(err){
            console.error('Error deleting file:', err.message);
            return;            
        }
        console.log(`File "${fileName}" deleted successfully`);
    });
};

//List all files in the current directory
const listFiles = () => {
    fs.readdir('.', (err, files)=> {
        if(err){
            console.error("Error listing files:", err.message);
            return;
        }
        console.log("Files in the current directory:");
        files.forEach((file) => console.log(file));
    });
};

module.exports = {createFile, readFile, appendToFile, deleteFile, listFiles};