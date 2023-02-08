let user_detail = [];
let user_id = 0;
//var hash=new Map();
/* function toSubmit(){ */
/*     document.getElementById("myTable").style.display = "block"; */
/*     let user_name = document.getElementById('user_name').value; */
/*     let fname = document.getElementById('fname').value; */
/*     let lname = document.getElementById('lname').value; */
/*     let email = document.getElementById('email').value; */
/*     let number = document.getElementById('number').value; */
/*     let pass = document.getElementById('pass').value; */
/*     //console.log(user_name,fname, lname, email, number, pass); */
/*      */
/*     user_id++; */
/*     user_detail.push({user_id, user_name, fname, lname, email, number, pass}); */
/*     hash.set(email,pass); */
/*     //console.log(user_detail); */
/*     let datadisplay = ""; */
/*  */
/*     for(let i=0;i<user_detail.length;i++) */
/*     { */
/*  */
/*         let obj = user_detail[i]; */
/*             datadisplay +="<tr> <td>" + obj.user_id + "</td>"; */
/*             datadisplay += "<td>" + obj.user_name+ "</td>"; */
/*             datadisplay += "<td>" + obj.fname + "</td>"; */
/*             datadisplay += "<td>" + obj.lname + "</td>"; */
/*             datadisplay += "<td>" + obj.email + " </td>"; */
/*             datadisplay +="<td>" + obj.number +"<br> </td>";  */
/*             datadisplay += "<td>" + obj.pass + "<br> </td> </tr>"; */
/*     } */
/*     //console.log(datadisplay); */
/*     display = document.getElementById("display").innerHTML = datadisplay; */
/*     display.innerHTML = datadisplay; */
/* } */
let user = {
    fname: document.querySelector("#fname").value,
    fname: document.querySelector("#fname").value,
    fname: document.querySelector("#fname").value,
    fname: document.querySelector("#fname").value,
    fname: document.querySelector("#fname").value,
    fname: document.querySelector("#fname").value,
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

function getApi(){
    
    $.ajax({
        url: "http://localhost:5500/fetchuser",
        type: "GET",
        
        success: function (result){
            console.log(result);
        },
        error: function(error){
            console.log(error);
        }
        })
}

function postApi(){
    $.ajax({
        url: 'http://localhost:5500/createuser',
        type: 'POST',
        data: 
        success: function(){
           alert('hello');
        },
        error: function(){
            alert('error');
        }
    });
}