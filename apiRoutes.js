const fs = require("fs");

//API Routing: 
module.exports = (app) => {
  
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    app.get("/api/notes", (req, res) => {
        return res.json(noteList);
    });
  
    app.post('/api/notes', (req, res) => {
        // get Id of last note if it exists
        let lastId;
        if (noteList.length) {
            lastId = Math.max(...(noteList.map(note => note.id)));

        } else {
            lastId = 0;
        }

        const id = lastId + 1;

 
        noteList.push({ id, ...req.body });
        //Removes last index
        res.json(noteList.slice(-1));
    });

-
    app.delete('/api/notes/:id', (req, res) => {
     
        let findNote = noteList.find(({ id }) => id === JSON.parse(req.params.id));


        noteList.splice(noteList.indexOf(findNote), 1);
        res.end("Note was deleted");
    });
};