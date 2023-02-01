const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')
const {exec} = require('child_process')

app.use(cors())
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('aman')
})
app.post('/data-ku',(req,res)=>{
    const datanya = req.body
    res.send({success: 'kamu berhasil hore'})
    // console.log(datanya)
    fs.writeFileSync('data.json', JSON.stringify(req.body))
})

const dataku = fs.readFile("data.json","utf-8",(err,data)=>{
    if(err) throw err
    const obj = JSON.parse(data)
    console.log(obj)

})
console.log(dataku)



// exec("cd autoWa && py ular.py",(err,stdout,stderr) =>{
//     if(err){
//         console.error(err)
//     }
//     console.log(stdout)
//     console.error(stderr)
// })

app.listen(3001, ()=>{
    console.log('berjalan')
})