let user_detail = [];
let user_id = 0;
//var hash=new Map();
function toSubmit() {
    validation();
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
    }
    user_id++;
    user_detail.push(userObj);
    postApi(userObj);
    toReset();
}

function toReset(e) {
    e.preventDefault();
    document.getElementById("myForm").reset();
}

function validation() {
    let user_name = document.getElementById('user_name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let password = document.getElementById("pass").value;
    let regEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/g;
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

function signInDisplay() {
    document.getElementById("signin_div").style.display = "block";
    document.getElementById("sign_up_form").style.display = "none";
    document.getElementById("delete_user").style.display = "none";
    document.getElementById("update_data").style.display = "none";
}
function signUpDisplay() {
    document.getElementById("signin_div").style.display = "none";
    document.getElementById("sign_up_form").style.display = "block";
    document.getElementById("delete_user").style.display = "none";
    document.getElementById("update_data").style.display = "none";
}
function deleteDisplay() {
    document.getElementById("signin_div").style.display = "none";
    document.getElementById("sign_up_form").style.display = "none";
    document.getElementById("delete_user").style.display = "block";
    document.getElementById("update_data").style.display = "none";
}
function updateDisplay() {
    document.getElementById("signin_div").style.display = "none";
    document.getElementById("sign_up_form").style.display = "none";
    document.getElementById("delete_user").style.display = "none";
    document.getElementById("update_data").style.display = "block";
}

function getApi() {

    let rows = [];
    $.ajax({
        url: "http://localhost:5500/fetchuser",
        type: "GET",

        success: function (result) {
            rows = result;
            let str = rows.length > 0 ?
                `<tr class = "header">
            <th>UserId</th>
            <th>User Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email id</th>
            <th>Mobile Number</th></tr>`: "No data in database";
            rows.forEach((user) => {
                str += `<tr>
                <td>${user.user_id}</td>
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
        },
        error: function () {
            console.log('error');
        }
    });
}

function deleteApi(e) {

    e.preventDefault();
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

        success: function (result) {
            console.log(result);
        },
        error: function () {
            console.log('error');
        }
    });
}

document.getElementById('update-btn').addEventListener('click', updateApi);
document.getElementById('reset-btn').addEventListener('click', toReset);
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
    const uUserId = parseInt(document.getElementById('updateUserId').value);
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
    console.log(obj);
    $.ajax({
        url: 'http://localhost:5500/updateuser',
        type: 'POST',
        //dataType:"json",
        data: obj,

        success: function (result) {
            console.log(result);
        },
        error: function () {
            console.log('error');
        }
    });
    toReset();
}