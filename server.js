const mysql = require('mysql2');

//database connection
let mysql_con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'kittu277',
    database: 'investwell_assignment'
})
mysql_con.connect((err)=>{
    if(err)
        console.log(err);
    else
        console.log('Database Connected!!')
    
        /* mysql_con.query('select * from user',function(err,result){ */
        /*     if(err) throw err; */
        /*     console.log(result); */
        /* }); */
})

const express = require("express");
const bodyParser = require("body-parser");
let app = express(); 
//const connection = require('./connection');


//api middlewares
app.use(bodyParser.json()); //this is to accept data in json format

app.use(bodyParser.urlencoded({ extended:true })); //this is to decode data send through html form

app.use(express.static('htmlfiles'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/htmlfiles/home.html');
});

app.post('/createuser',(req,res)=>{
    let userData = req.body;
     var fname = userData.fname;
     var lname = userData.lname;
     var user_name = userData.user_name;
     var email = userData.email;
     var mobile = userData.number;
     var pass = userData.pass;

     mysql_con.connect(function(err){
        if(err){
            throw err;
        }
        var sql = "insert into user(first_name,last_name,user_name,email_id,mobile_number,password) values('"+fname+"','"+lname+"','"+user_name+"','"+email+"','"+mobile+"','"+pass+"')";
        mysql_con.query(sql, (err)=>{
            if(err) throw err;
            
            res.send('Sign Up successfully!! ');
        });
     });
});


app.use(function (request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

/* //using get api to fetch all data from database */
app.get('/fetchuser',(req,res)=>{
    mysql_con.query('select * from user',(err,rows)=>{
        if(err)
            console.log(err);
        else
            //console.log(rows);
            res.send(rows)
    })
})

/* //get api to fetch specific id data */
/* app.get('/form/:user_id',(req,res)=>{ */
/*     mysql_con.query('select * from user where user_id=?',[req.params.user_id],(err,rows)=>{ */
/*         if(err) */
/*             console.log(err); */
/*         else */
/*             //console.log(rows); */
/*             res.send(rows) */
/*     }) */
/* }) */
/*  */
/*  */
// delete api to delete a data from user
app.delete('/deleteuser',(req,res)=>{
    mysql_con.query('delete from user where user_id=?',[req.params.user_id],(err,rows)=>{
        if(err)
            console.log(err);
        else
            res.send(rows)
    })
})

/*  */
/* //post api to send data to server */
/* app.post('/form',(req,res)=>{ */
/*     var user = req.body; */
/*     var userData = [user.user_id,user.first_name,user.last_name,user.user_name,user.email_id,user.mobile_number,user.password]; */
/*     mysql_con.query('insert into user values(?)',[userData],(err,rows)=>{ */
/*         if(err){ */
/*             console.log(err); */
/*         } */
/*         else{ */
/*             res.send(rows) */
/*         } */
/*     }) */
/* }) */
/*  */
/* //patch api to update data into database */
/*  */
app.patch('/updateuser',(req,res)=>{
    var user = req.body;
    mysql_con.query(`update user set user_id = '${user.user_id}' where user_id= 102`,[user],(err,rows)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(rows)
        }
    })
})
/*  */
/* //put api to update all the values in database */
/* app.put('/form',(req,res)=>{ */
/*     var user = req.body; */
/*     mysql_con.query(`update user set ? where user_id=`+user.user_id,[user],(err,rows)=>{ */
/*         if(err){ */
/*             console.log(err); */
/*         } */
/*         else{ */
/*             if(rows.affectedRows == 0){ */
/*                 var userData = [user.user_id,user.first_name,user.last_name,user.user_name,user.email_id,user.mobile_number,user.password]; */
/*                 mysql_con.query('insert into user values(?)',[userData],(err,rows)=>{ */
/*                     if(err){ */
/*                         console.log(err); */
/*                     } */
/*                     else{ */
/*                         res.send(rows) */
/*                     } */
/*                 }) */
/*             } */
/*             else{ */
/*                 res.send(rows) */
/*             } */
/*         } */
/*     }) */
/* }) */
/*  */

//to assign a port to the server
app.listen(5500,()=>console.log("Server is running on port 5500"))






























/* // New app using express module */
/*     const app = express(); */
/*     app.use(bodyParser.urlencoded({ */
/*     	extended:true */
/*     })); */
/*      */
/*     app.get("/", function(req, res) { */
/*     res.sendFile(__dirname + "/home.html"); */
/*     }); */
/*      */
/*     app.post("/", function(req, res) { */
/*     let user_name = String(req.body.user_name); */
/*     let password = String(req.body.pass); */
/*      */
/*     res.send("Username = " + user_name + "Password = " + password); */
/*     }); */
/*      */
/*     app.listen(3000, function(){ */
/*     console.log("server is running on port 3000"); */
/*     }) */