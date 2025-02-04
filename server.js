const express = require('express');

const app = express();

// Declare the public directory as static
app.use(express.static("public"))

// Choose ejs as the serverside render engine
app.set('view engine', 'ejs')

// Use the root endpoint for simplicity
app.get('/', (req, res) => {
    // Render the .ejs file
    res.render("index")
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
