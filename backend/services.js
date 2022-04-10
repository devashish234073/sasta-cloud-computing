
const express = require('express')
const { exec } = require("child_process");
var cors = require('cors');
const app = express()
const port = 3000

app.use(cors());

app.get('/run', (req, res) => {
  var cmnd = req.query.cmnd;
  runRaw(res,cmnd);
})

app.get('/runOnLinux', (req, res) => {
  var cmnd = req.query.cmnd;
  var distro = req.query.distro;
  cmnd = `docker run ${distro} sh -c "${cmnd}"`;
  runRaw(res,cmnd);
})

app.get('/getDockerImages', (req, res) => {
  var cmnd = "docker images";
  run(res,cmnd);
})

app.get('/createDockerImage', (req, res) => {
  var cmnd = "docker run "+req.query.imageName;
  runRaw(res,cmnd);
})

app.get('/removeDockerImage', (req, res) => {
  var cmnd = "docker rmi -f "+req.query.imageName;
  runRaw(res,cmnd);
})

app.get('/getDockerProcesses', (req, res) => {
  var cmnd = "docker ps";
  run(res,cmnd);
})


app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`)
})

function processTableLines(lines) {
  var data = [];
  for(var i=0;i<lines.length;i++) {
    var line = lines[i];
    var lineSplit = line.split("  ");
    var row = [];
    for(var j=0;j<lineSplit.length;j++) {
      var d = lineSplit[j].trim();
      if(d!="") {
        row.push(d);
      }
    }
    if(row.length>0) {
      data.push(row);
    }
  }
  return data;
}

function run(res,cmnd) {
  exec(cmnd, (error, stdout, stderr) => {
    if (error) {
        res.end(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        res.end(`stderr: ${stderr}`);
        return;
    }
    console.log(stdout);
    var lines = stdout.split("\n");
    var data = processTableLines(lines);
    res.end(JSON.stringify(data));
  });
}

function runRaw(res,cmnd) {
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
}