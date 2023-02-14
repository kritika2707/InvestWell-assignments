const {servicesFetchData,servicesInsertData,servicesUpdateData,servicesDeleteData} = require('../services/userservices');

const path = require("path");

const showForm = (req,res)=>{
    res.sendFile(path.join(__dirname,"../..","frontend","home.html"));
}

const controlFetchData = (req,res)=>{
    //implement validation
    const result = servicesFetchData();
    result.then((data)=>{
        res.send(data);
    })
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