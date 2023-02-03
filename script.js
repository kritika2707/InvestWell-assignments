let user_detail = [];
let user_id = 0;
var hash=new Map();
function toSubmit(){
    document.getElementById("myTable").style.display = "block";
    validation();
    let user_name = document.getElementById('user_name').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let pass = document.getElementById('pass').value;
    //console.log(user_name,fname, lname, email, number, pass);
    
    user_id++;
    user_detail.push({user_id, user_name, fname, lname, email, number, pass});
    hash.set(email,pass);
    //console.log(user_detail);
    let datadisplay = "";

    for(let i=0;i<user_detail.length;i++)
    {

        let obj = user_detail[i];
            datadisplay +="<tr> <td>" + obj.user_id + "</td>";
            datadisplay += "<td>" + obj.user_name+ "</td>";
            datadisplay += "<td>" + obj.fname + "</td>";
            datadisplay += "<td>" + obj.lname + "</td>";
            datadisplay += "<td>" + obj.email + " </td>";
            datadisplay +="<td>" + obj.number +"<br> </td>"; 
            datadisplay += "<td>" + obj.pass + "<br> </td> </tr>";
    }
    //console.log(datadisplay);
    display = document.getElementById("display").innerHTML = datadisplay;
    display.innerHTML = datadisplay;
}

function toReset(){
    document.getElementById("myForm").reset();
}

function validation(){
    let user_name = document.getElementById('user_name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let password = document.getElementById("pass").value;
    let regEmail=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/g;  
    //var regPhone=/^\d{10}$/;                                        
    var regName = /\d+$/g;  
                                
    if (user_name == "" || regName.test(user_name)) {
        window.alert("Please enter valid user name");
        return false;
    }
    
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        return false;
    }
    
    if(number.length != 10){
        window.alert("Mobile number must have 10 digits!!");
        return false;
    }
    if(password === ""){
        window.alert("Password can't be empty!!");
        return false;
    }
    else if (password.length < 8 || password.length > 16) {
        window.alert("Password must 8 to 16 characters long");
        return false;
    }
    if( hash.has(email)){
        alert("This Email already exist");
        return false;
    }
}

function myFunction() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } 
    else {
      x.type = "password";
    }
}

function signInDisplay(){
    document.getElementById("signin_div").style.display = "block";
    document.getElementById("sign_up_form").style.display = "none";
}
function signUpDisplay(){
    document.getElementById("signin_div").style.display = "none";
    document.getElementById("sign_up_form").style.display = "block";
}


function toVerify(){
    let user_name=document.forms.second.user_name1.value;
    let pass=document.forms.second.pass1.value;
    let result=false;
    for(var j=0;j<user_detail.length;j++){
        if((user_detail[j][1]==user_name) && (user_detail[j][6]==pass)){
            result=true;
            break;
        }
    }
    if(result){
        document.getElementById("signin_div").style.display="none";
        document.getElementById("welcome").style.display="block";
        document.getElementById("type").innerHTML="Welcome: " + user_detail[j][1] + " " + user_detail[j][6];
    }
    else{
        alert("Please Signup first");
    }
}

// code for creating server
const express = require('express'); // Importing express module

const app = express(); // Creating an express object

const port = 8000; // Setting an port for this application


// Starting server using listen function
app.listen(port, function (err) {
if(err){
	console.log("Error while starting server");
}
else{
	console.log("Server has been started at "+port);
}
})

app.get('/homepage/form/detail', function (req, res) {
    let form_detail = req.query
    console.log("Form details:",req.query)
    res.send(form_detail);
  })
