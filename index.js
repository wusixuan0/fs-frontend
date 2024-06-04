const express = require('express');
const path = require('path');

const app = express();
const data = require('./netlify/functions/api-data/data');

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the views directory

app.set('views', path.join(__dirname, 'public/views'));
app.use(express.static(path.join(__dirname, 'public/views')));

// Route for the index page
app.get('/', (req, res) => {
    res.render('index', { programs: data.programs });
});

// Route for the item page
app.get('/:musicId', (req, res) => {
    const musicId = req.params.musicId;
    res.render('item', { response: data.response });
});

// Start server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
