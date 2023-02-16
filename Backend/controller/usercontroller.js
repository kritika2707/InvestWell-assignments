const { servicesFetchData, servicesInsertData, servicesUpdateData, servicesDeleteData, servicesCheckData } = require('../services/userservices');

const path = require("path");

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

const controlInsertData = (req, res) => {
    const newUser = req.body;

    // implement here backend validation 

    return servicesInsertData(newUser);
}

const controlUpdateData = (req, res) => {

    const updateUserData = req.body;
    //console.log(updateUserData);
    return servicesUpdateData(updateUserData.uUserId, updateUserData);
}

const controlDeleteData = (req, res) => {
    const updateUserData = req.body;
    return servicesDeleteData(updateUserData.userId);
}

const controlCheckData = async (req,res)=>{
    const checkUserData  = req.body;
    //if(checkUserData.userName && checkUserData.pass)
    const result = await servicesCheckData(checkUserData);
    //console.log("Result:" , result);
    //console.log(result.length);
    if(result.length == 0)
    {
        res.send("No user found!!");
    }
    else if(checkUserData.user_name === result[0].user_name && checkUserData.pass === result[0].password)
    {
        let sendData = {
            userName: result[0].user_name,
            firstName: result[0].first_name,
            lastName: result[0].last_name,
            email: result[0].email_id,
            phone_no: result[0].mobile_number
        }
        res.send(sendData);
    }
    else if(checkUserData.user_name === result[0].user_name && checkUserData.pass != result[0].password)
    {
        res.send("Incorrect password!!");
    }
    else
    {
        console.log(error);
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