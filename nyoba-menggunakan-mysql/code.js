const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')
const {spawn} = require('child_process')



app.use(cors())
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('aman')
})

app.post('/data-ku',(req,res)=>{
    const datanya = JSON.stringify(req.body)
    res.send({success: 'kamu berhasil hore'})
    const aftDat = JSON.parse(datanya)
    fs.writeFileSync('data.json', JSON.stringify(req.body))
})



const dataku = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const dataKirim = JSON.parse(fs.readFileSync('siapKirim.json', 'utf-8'))


function runPy () {
    spawn("python",["ular4.py"])
    return "python berjalan"
}



app.listen(3001, ()=>{})

    // if(Object.keys(dataKirim).length < 7 ) {
    //     fs.writeFileSync('siapKirim.json', JSON.stringify(dataku))
    //     console.log('berhasil')
    // }else{
        // if(dataku.judul !== dataKirim.judul){
        //     console.log('perubahan')
        //     // runPy(()=>{
        //     // fs.writeFile('siapKirim.json',JSON.stringify(dataku),(err)=>{
        //     //     if(err) throw err
        //     // })
        //     // })
        //     changeDat()
        //     // runPy(() =>{
        //     //     changeDat()
        //     // })
        //     // changeDat(()=>{
        //     //     runPy()
        //     // })
        //     runPy()
        // }else{
        //     console.log('sama')
        // }
    // }

    if(dataku.judul === dataKirim.judul){
        console.log('sama')
    }else{
        console.log('beda')
        runPy()
        setTimeout(()=>{
             fs.writeFileSync('siapKirim.json', JSON.stringify(dataku))
        },35000)
    }