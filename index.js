const fs = require('fs')
var rl = require('readline-sync')
var arquivo = rl.question("Qual arquivo? ")
var fp = fs.readFileSync(arquivo, "utf8")

var level = require('level')
var db = level('DATABASE')

fp = fs.readFileSync(arquivo, "utf8")

db.put("file", fp, function(err){
    if(!err){
        console.log("Adicionando palavras do arquivo: " +  arquivo)
    } else {
        console.log("err")
    }
})