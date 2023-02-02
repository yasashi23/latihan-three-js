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



const dataku = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const dataKirim = JSON.parse(fs.readFileSync('siapKirim.json', 'utf-8'))



if(Object.keys(dataKirim).length < 7 ) {
    fs.writeFileSync('siapKirim.json', JSON.stringify(dataku))
    console.log('berhasil')
}else{
    if(dataku.judul === dataKirim.judul){
        console.log('sama')
    }else{
        console.log('perubahan')
        fs.writeFileSync('siapKirim.json', JSON.stringify(dataku))
        // exec("cd autoWa && py ular.py",(err,stdout,stderr) =>{
        //     if(err){
        //         console.error(err)
        //     }
        //     console.log(stdout)
        //     console.error(stderr)
        // })
    }
}





app.listen(3001, ()=>{
    console.log('')
})