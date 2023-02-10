let user_detail = [];
let user_id = 0;
//var hash=new Map();
function toSubmit(){
    validation();
    document.getElementById("myForm").addEventListener("submit",(event)=>{
        event.preventDefault();
    })
    var userObj = {
        fname: document.querySelector("#fname").value,
        lname: document.querySelector("#lname").value,
        user_name: document.querySelector("#user_name").value,
        email: document.querySelector("#email").value,
        number: document.querySelector("#number").value,
        pass: document.querySelector("#pass").value,
    }
    user_id++;
    user_detail.push(userObj);
    postApi(userObj);
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
    document.getElementById("delete_user").style.display = "none";
}
function signUpDisplay(){
    document.getElementById("signin_div").style.display = "none";
    document.getElementById("sign_up_form").style.display = "block";
    document.getElementById("delete_user").style.display = "none";
}
function deleteDisplay(){
    document.getElementById("signin_div").style.display = "none";
    document.getElementById("sign_up_form").style.display = "none";
    document.getElementById("delete_user").style.display = "block";
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


function postApi(userObj){
    $.ajax({
        url: 'http://localhost:5500/createuser',
        type: 'POST',
        //dataType:"json",
        data: userObj,
        
        success: function(result){
           console.log(result);
        },
        error: function(){
            console.log('error');
        }
    });
}

function deleteApi(){
    //e.preventDefault();
    const userId = parseInt(document.getElementById('deleteUserId').value);
    console.log(userId);
    const obj = {
        userId
    }
    $.ajax({
        url: 'http://localhost:5500/deleteuser',
        type: 'POST',
        //dataType:"json",
        data: obj,
        
        success: function(result){
           console.log(result);
        },
        error: function(){
            console.log('error');
        }
    });
}