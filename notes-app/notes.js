const fs = require('fs');

const multiplicacao = function (a, b) {
    return a * b;
};

const addNote = function (title, body) {
    loadNotes();
};

const loadNotes = function () {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
};





module.exports = {
    multiplicacao: multiplicacao,
    addNote: addNote
};