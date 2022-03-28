
const express = require('express')
const { exec } = require("child_process");
const app = express()
const port = 3000

app.get('/run', (req, res) => {
  var cmnd = req.query.cmnd;
  exec(cmnd, (error, stdout, stderr) => {
    if (error) {
        res.end(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        res.end(`stderr: ${stderr}`);
        return;
    }
    res.end(`${stdout}`);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
