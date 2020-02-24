const express = require('express');
const app = express();
const exec = require('child_process').exec;
var bodyParser = require('body-parser');
var fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var codeResult = [];


app.get('/', (req, res) => {
    
    res.send(codeResult)

});

app.post('/', (req,res) => {
    
    codeLines = JSON.parse(req.body.codeLines)
   
    
    
    
    createPythonFile(codeLines)    
    

});

app.listen(3000, () => {
    console.log('My rest API running on 3000');
})


function createPythonFile(codeLines) {

    var code = codeLines.join("\n");
    fs.writeFile('code.py',code)
    runFile()
}


function runFile() {
    const myShellScript = exec('sh shell.sh .');
    myShellScript.stdout.on('data', (data)=>{
        console.log(data); 

        if(data!==undefined){
            codeResult.push(data);
        }
    
        return data;
    });
    myShellScript.stderr.on('data', (data)=>{
        console.error(data);
        if(data!==undefined){
            codeResult.push(data);
        }
        return data;
    });
}