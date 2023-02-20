let user_detail = [];
let user_id = 0;
//var hash=new Map();
document.getElementById("signup").addEventListener("click", toSubmit)
function toSubmit(e) {
    e.preventDefault();
    if(validation()){
    //console.log('Hello')
    document.getElementById("myForm").addEventListener("submit", (event) => {
        event.preventDefault();
    })
    var userObj = {
        fname: document.querySelector("#fname").value,
        lname: document.querySelector("#lname").value,
        user_name: document.querySelector("#user_name").value,
        email: document.querySelector("#email").value,
        number: document.querySelector("#number").value,
        pass: document.querySelector("#pass").value,
        cnfpass: document.querySelector('#cnfpass').value
    }
    user_id++;
    user_detail.push(userObj);
    postApi(userObj);
    document.forms.signupform.fname.value = "";
    document.forms.signupform.lname.value = "";
    document.forms.signupform.user_name.value = "";
    document.forms.signupform.email.value = "";
    document.forms.signupform.number.value = "";
    document.forms.signupform.pass.value = "";
    document.forms.signupform.cnfpass.value = "";
}   

}

function validation() {
    let user_name = document.getElementById('user_name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let password = document.getElementById("pass").value;
    let cnfpassword = document.getElementById("cnfpass").value;
    let regEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/g;
    var regPhone=/^\d{10}$/;                                        
    var regName = /^[a-zA-Z0-9]+$/;
    var regPass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

    if (user_name == "" || regName.test(user_name)) {
        window.alert("Please enter valid user name");
        return false;
    }

    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        return false;
    }

    if (number.length != 10) {
        window.alert("Mobile number must have 10 digits!!");
        return false;
    }
    if (password === "") {
        window.alert("Password can't be empty!!");
        return false;
    }
    else if (password.length < 8 || password.length > 16) {
        window.alert("Password must 8 to 16 characters long");
        return false;
    }
    else if(!regPass.test(password)){
        window.alert("Password must contain atleast <br> one number <br> one special character <br> one upper case alphabet <br> one lower case alphabet");
        return false;
    }
    if(cnfpassword != password){
        window.alert("Password doesn't match!");
        return false;
    }
    return true;
}
document.getElementById('showpass').addEventListener('change',showPass)
function showPass() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    }
    else {
        x.type = "password";
    }
}

function signInDisplay() {
    document.getElementById("signin_div").style.display = "block";
    document.getElementById("sign_up_form").style.display = "none";
    document.getElementById("delete_user").style.display = "none";
    document.getElementById("update_data").style.display = "none";
    document.getElementById('showTable').style.display = "none";
    document.getElementById('displayDiv').style.display = "none";
    document.getElementById('delete').style.display = "none";
    document.getElementById('update').style.display = "none";
    document.getElementById('show').style.display = "none";
    document.getElementById('signUpD').style.display = "block";
}
function signUpDisplay() {
    document.getElementById("signin_div").style.display = "none";
    document.getElementById("sign_up_form").style.display = "block";
    document.getElementById("delete_user").style.display = "none";
    document.getElementById("update_data").style.display = "none";
    document.getElementById('showTable').style.display = "none";
    document.getElementById('displayDiv').style.display = "none";
}
function deleteDisplay() {
    document.getElementById("signin_div").style.display = "none";
    document.getElementById("sign_up_form").style.display = "none";
    document.getElementById("delete_user").style.display = "block";
    document.getElementById("update_data").style.display = "none";
    document.getElementById('showTable').style.display = "none";
    document.getElementById('displayDiv').style.display = "none";
}
function updateDisplay() {
    document.getElementById("signin_div").style.display = "none";
    document.getElementById("sign_up_form").style.display = "none";
    document.getElementById("delete_user").style.display = "none";
    document.getElementById("update_data").style.display = "block";
    document.getElementById('showTable').style.display = "none";
    document.getElementById('displayDiv').style.display = "none";
}

function getApi() {
    document.getElementById('showTable').style.display = "block";
    document.getElementById("signin_div").style.display = "none";
    document.getElementById("sign_up_form").style.display = "none";
    document.getElementById("delete_user").style.display = "none";
    document.getElementById("update_data").style.display = "none";
    document.getElementById('displayDiv').style.display = "none";

    let rows = [];
    $.ajax({
        url: "http://localhost:5500/fetchuser",
        type: "GET",

        success: function (result) {
            rows = result;
            let str = rows.length > 0 ?
                `<tr class = "header">
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email id</th>
            <th>Mobile Number</th></tr>`: "No data in database";
            rows.forEach((user) => {
                str += `<tr>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.user_name}</td>
                <td>${user.email_id}</td>
                <td>${user.mobile_number}</td>
                </tr>`;
            });
            console.log(str);
            const output = document.getElementsByClassName('myTable')[0];
            output.innerHTML = str;
        },
        error: function (error) {
            console.log(error);
        }
    })
}


function postApi(userObj) {
    $.ajax({
        url: 'http://localhost:5500/createuser',
        type: 'POST',
        //dataType:"json",
        data: userObj,

        success: function (result) {
            console.log(result);
            // if(typeof(result)=== "string")
            // {
                alert(result);
            //}
        },
        error: function (error) {
            console.log(error);
        }
    }
    )};


function deleteApi(e) {

    e.preventDefault();
    const userId = document.getElementById('deleteUserId').value;
    console.log(userId);
    const obj = {
        userId
    }
    $.ajax({
        url: 'http://localhost:5500/deleteuser',
        type: 'POST',
        //dataType:"json",
        data: obj,

        success: function (result) {
            alert(result);
        },
        error: function () {
            console.log('error');
        }
    });
}

document.getElementById('update-btn').addEventListener('click', updateApi);
document.getElementById('updatereset-btn').addEventListener('click', updateReset);
document.getElementById('delete-btn').addEventListener('click', deleteApi);

function updateApi(e) {
    e.preventDefault();
    const fname = document.getElementById('ufname').value;
    const lname = document.getElementById('ulname').value;
    const user_name = document.getElementById('uusername').value;
    const email = document.getElementById('uemail').value;
    const num = document.getElementById('unumber').value;
    const pass = document.getElementById('upass').value;
    //console.log("HI");
    const uUserId = document.getElementById('updateUserId').value;
    //console.log(uUserId);
    const obj = {
        uUserId,
        fname,
        lname,
        user_name,
        email,
        num,
        pass
    }
    //console.log(obj);
    $.ajax({
        url: 'http://localhost:5500/updateuser',
        type: 'POST',
        //dataType:"json",
        data: obj,

        success: function (result) {
            //displayDetails(result);
            alert(result);
        },
        error: function (error) {
            console.log(error);
        }
    });
    document.forms.updateform.updateUserId.value = "";
    document.forms.updateform.ufname.value = "";
    document.forms.updateform.ulname.value = "";
    document.forms.updateform.uusername.value = "";
    document.forms.updateform.uemail.value = "";
    document.forms.updateform.unumber.value = "";
    document.forms.updateform.upass.value = "";
}

function updateReset(){
    document.forms.updateform.updateUserId.value = "";
    document.forms.updateform.ufname.value = "";
    document.forms.updateform.ulname.value = "";
    document.forms.updateform.uusername.value = "";
    document.forms.updateform.uemail.value = "";
    document.forms.updateform.unumber.value = "";
    document.forms.updateform.upass.value = "";
}
document.getElementById('login').addEventListener('click',loginApi);
function loginApi(e){
    e.preventDefault();

    const user_name = document.getElementById('loginuser_name').value;
    const pass = document.getElementById('login_pass').value;
    // if(user_name.length == 0 || pass.length == 0)
    // {
        // return alert("Provide the login details!!");
    // }
    const obj = {
        user_name,
        pass
    }
    $.ajax({
        url: 'http://localhost:5500/login',
        type: 'POST',
        //dataType:"json",
        data: obj,
        success: function (result) {
            console.log(result);
            if(typeof(result)=== "string")
            {
                alert(result);
            }
            else{
            document.getElementById('displayDiv').style.display = "block";
            document.getElementById("signin_div").style.display = "none";
            document.getElementById("sign_up_form").style.display = "none";
            document.getElementById("delete_user").style.display = "none";
            document.getElementById("update_data").style.display = "none";
            let username = result[0].user_name;
            let firstname = result[0].first_name;
            let lastname = result[0].last_name
            let emailid = result[0].email_id;
            let contact = result[0].mobile_number;

            let display = "<h1 id='welcome'>Welcome " +username+ "!! </h1> <br><br> <div id='afterLogin'> First Name :" +firstname+"<br> Last Name : "+lastname+"<br> Email : "+emailid+"<br> Phone Number : "+contact+"<br><div>";    
            document.getElementById('displayDiv').innerHTML = display;
            document.forms.second.user_name1.value = "";
            document.forms.second.pass1.value = "";
            document.getElementById('delete').style.display = "block";
            document.getElementById('update').style.display = "block";
            document.getElementById('show').style.display = "block";
            document.getElementById('signUpD').style.display = "none";
        }
            
            // console.log("Ajax called:",result);
        },
        error: function (error) {
            console.log(error);
        }
    });
    document.getElementById('login_fields').reset();
}