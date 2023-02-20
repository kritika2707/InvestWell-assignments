const { servicesFetchData, servicesInsertData, servicesUpdateData, servicesDeleteData, servicesCheckData } = require('../services/userservices');
const path = require("path");
var CryptoJS = require("crypto-js");

//console.log(hasheddata)

const showForm = (req, res) => {
    res.sendFile(path.join(__dirname, "../..", "frontend", "home.html"));
}
//callback is used here
/* const controlFetchData = (req,res)=>{ */
/*     //implement validation */
/*     servicesFetchData(function(err,result){ */
/*         res.send(result); */
/*     }) */
/* } */

//promises is used here
const controlFetchData = async (req, res) => {
    //implement validation
    const result = await servicesFetchData();
    res.send(result);
}

const controlInsertData = async (req, res) => {
    const newUser = req.body;

    // implement here backend validation 
    
    const result = await servicesInsertData(newUser);
    res.send(result);
}

const controlUpdateData = async (req, res) => {

    const updateUserData = req.body;
    //console.log(updateUserData);
    const result = await servicesUpdateData(updateUserData.uUserId, updateUserData);

    res.send(result);
}

const controlDeleteData = async (req, res) => {
    const updateUserData = req.body;
    const result = await servicesDeleteData(updateUserData.userId);
    res.send(result);
}

const controlCheckData = async (req,res)=>{
    const checkUserData  = req.body;
    //if(checkUserData.userName && checkUserData.pass)
    const result = await servicesCheckData(checkUserData);
    //console.log("Result:" , result);
    //console.log(result.length);
    // if(checkUserData.length == 0){
        // res.send("Enter required fields!");
    // }
    if(result.length == 0){
        return res.send("Invalid Credentials!!");
    }
    var bytes  = CryptoJS.AES.decrypt(result[0].password, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    
    if(originalText != checkUserData.pass)
    {
        return res.send("Invalid Credentials!!");
    }
    else
    {
        res.send({
            userName: result[0].user_name,
            firstName: result[0].first_name,
            lastName: result[0].last_name,
            email: result[0].email_id,
            phone_no: result[0].mobile_number
        })
    }
}


module.exports = {
    showForm,
    controlFetchData,
    controlInsertData,
    controlUpdateData,
    controlDeleteData,
    controlCheckData
}