// Require libraries
const fs = require('fs');
const nRouter = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// Get route to display the db items
nRouter.get('/', (req, res) => {
    const db = fs.readFileSync('./db/db.json', (err) => { if (err) console.log(err)});
    res.json(JSON.parse(db));
});

// Post route to add a note to the db
nRouter.post('/', (req, res) => {
    const {title, text} = req.body;
    // Get db
    const db = JSON.parse(fs.readFileSync('./db/db.json', (err) => { if (err) console.log(err)}));
    // Item to be added with uuid
    const item = {
        id: uuidv4(),
        title,
        text
    }
    // Add item to db
    db.push(item);
    // Write the db back to the file
    fs.writeFileSync('./db/db.json', JSON.stringify(db, null, 2));
    // Respond with the item we just added
    res.json(item);

});

// Delete route to delete a note by id
nRouter.delete('/:id', (req, res) => {
    const db = JSON.parse(fs.readFileSync('./db/db.json', (err) => { if (err) console.log(err)}));
    // Filter db and only keep notes that aren't equal to the id specified
    const newDb = db.filter((note) => {
        return note.id !== req.params.id;
    });
    // Write the new db back to file
    fs.writeFileSync('./db/db.json', JSON.stringify(newDb, null, 2));
    // Respond with json
    res.json({message: `Deleted ${req.params.id}`});
});

// Export the router for index.js
module.exports = nRouter;

