const express = require('express');

var menu=require('../helpers/menu');
const app = express();
app.post('/', function (req, res) {
    let info=req.body;
    console.log(info)
  
     menu.createMenu(info).then(resp=>{
         let rest=resp.rows;


res.send({status:200,body:rest})
     }).catch(err=>{
res.send({status:400,body:err});

     })    

})

app.get('/',function(req,res){

    let info=req.body;
    console.log(info)
  menu.selectAllMenu()
.then(resp=>{


    let resp=respt.rows;



    res.send({status:200,body:resp});
                 


}).catch(err=>{

    res.send({status:400,body:err});
})

})

app.delete('/',function(req,res){


    let info=req.body;
    console.log(info)
  menu.deleteMenu(info)
.then(resp=>{


    let resp=respt.rows;



    res.send({status:200,body:resp});
                 


}).catch(err=>{

    res.send({status:400,body:err});
})

})
module.exports=app;