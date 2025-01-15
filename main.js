const express = require('express');
const { WasmLoader } = require('wasm-loader');

const app = express();

const wasmFile = 'game/game_bg.wasm'; // Update this to your WASM module's path

app.get('/game', (req, res) => {
  const loader = new WasmLoader();
  loader.load(wasmFile).then((module) => {
    // Call a function in your WASM module...
    module.exports.gameStart();
    res.send('Game started!');
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});