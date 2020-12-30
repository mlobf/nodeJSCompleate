const fs = require('fs');

/*
const multiplicacao = function (a, b) {
    return a * b;
};
*/

const addNote = function (title, body) {

    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    })
    if (duplicateNotes.length === 0) {

        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log('New Note Added!!')
    } else {
        console.log('Note title taken!')
    }

};

const saveNotes = function (notes) {

    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);

};


const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch (error) {
        return [];
    };

};


module.exports = {
    addNote: addNote
};