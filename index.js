const express = require('express')
const fs = require('fs')

const app = express()

const data = "Paulo sbbandeira"
const fileTxt = "arquivo.txt"

var teste

fs.readFile('arquivo.txt','utf-8', (err, data) => {
    if (err) throw err;
    teste = data
    console.log(teste);
  });
/*
fs.writeFile(fileTxt, data, (err) => {
    if(err) throw err;
    console.log('arquivo criado')
})
*/

app.get('/', (req, res) => res.send(teste))

app.listen(process.env.PORT || 3000)