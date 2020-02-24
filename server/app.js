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
    
    createPythonFile(codeLines);

    res.send("Thank you")
    

});

app.listen(3000, () => {
    console.log('My rest API running on 3000');
})

async function createPythonFile(codeLines) {
            
        
    newStr = codeLines[0]+'\n'+codeLines[1]+'\n'+codeLines[2]+'\n'

    fs.writeFile('code.py',newStr, err=>{
        if(err)
            throw(err)
    })
    
    
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