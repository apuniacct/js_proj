const express = require('express');

const app = express();

app.use(express.static("public"))
app.set('view engine', 'ejs')

//var GameInit = require("./public/game/game")

//const wasmFile = 'game/game_bg.wasm'; // Update this to your WASM module's path

app.get('/', (req, res) => {

  res.render("index"/*, { id }*/)

  /*
  WebAssembly.instantiateStreaming(fetch("game/game_bg.wasm"), ).then(
  
  
    (obj) => {
      
    }
  );
  //const loader = new WasmLoader();
  //loader.load(wasmFile).then((module) => {
    // Call a function in your WASM module...
    //module.exports.gameStart();
    //res.send('Game started!');
  //});
  //res.sendFile(path.join(__dirname, './game/index.html'));
  */

});

app.get('/hi', (req, res) => {
})


const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});