const { createFile, readFile, appendToFile, deleteFile, listFiles } = require('./commands');

const args = process.argv.slice(2);
const command = args[0];
const fileName = args[1];
const content = args[2];

switch (command) {
  case 'create':
    if (!fileName || !content) {
      console.log('Usage: create <fileName> <content>');
    } else {
      createFile(fileName, content);
    }
    break;

  case 'read':
    if (!fileName) {
      console.log('Usage: read <fileName>');
    } else {
      readFile(fileName);
    }
    break;

  case 'append':
    if (!fileName || !content) {
      console.log('Usage: append <fileName> <content>');
    } else {
      appendToFile(fileName, content);
    }
    break;

  case 'delete':
    if (!fileName) {
      console.log('Usage: delete <fileName>');
    } else {
      deleteFile(fileName);
    }
    break;

  case 'list':
    listFiles();
    break;

  default:
    console.log('Invalid command. Available commands: create, read, append, delete, list');
}
