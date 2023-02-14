const {servicesFetchData,servicesInsertData,servicesUpdateData,servicesDeleteData} = require('../services/userservices');

const path = require("path");

const showForm = (req,res)=>{
    res.sendFile(path.join(__dirname,"../..","frontend","home.html"));
}
//callback is used here
/* const controlFetchData = (req,res)=>{ */
/*     //implement validation */
/*     servicesFetchData(function(err,result){ */
/*         res.send(result); */
/*     }) */
/* } */

//promises is used here
const controlFetchData =async (req,res)=>{
    //implement validation
    const result = await servicesFetchData();
        res.send(result);
}

const controlInsertData = (req,res)=>{
    const newUser = req.body;

// implement here backend validation 

    return servicesInsertData(newUser);
}

const controlUpdateData = (req,res)=>{

    const updateUserData = req.body;
    //console.log(updateUserData);
    return servicesUpdateData(updateUserData.uUserId, updateUserData);
}

const controlDeleteData = (req,res)=>{
    const updateUserData = req.body;
    return servicesDeleteData(updateUserData.userId);
}

module.exports = {
    showForm,
    controlFetchData,
    controlInsertData,
    controlUpdateData,
    controlDeleteData
}