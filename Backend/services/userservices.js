// this file is for services functions....
const { fetchData, insertData, updateData, deleteData, checkData } = require('../repositories/userdb');
const bcrypt = require("bcrypt")

//callback is used here
/* const servicesFetchData = (cb)=>{ */
/*     const sqlQuery = "select * from user"; */
/*     fetchData(sqlQuery,function(err,res){ */
/*         //console.log(res); */
/*         cb(null,res); */
/*         //return result; */
/*     }); */
/* } */

//promises is used here
const servicesFetchData = async () => {
    const sqlQuery = "select * from user";
    const result = await fetchData(sqlQuery);
    return new Promise((resolve) => {
        resolve(result);
    })
}
/* const sqlQuery = "select * from user"; */
/* fetchData(sqlQuery,function(err,res){ */
/*     //console.log(res); */
/*     cb(null,res); */
/*     //return result; */
/* }); */

const servicesInsertData = async (newUser) => {
    const sqlQuery = `insert into user(first_name,last_name,user_name,email_id,mobile_number,password) values("${newUser.fname}","${newUser.lname}","${newUser.user_name}","${newUser.email}",${newUser.number},"${newUser.pass}")`;
    const result = await insertData(sqlQuery);
    return new Promise((resolve) => {
        resolve(result);
    })
}

const servicesUpdateData = async (id, updateUserData) => {
    const sqlQuery = `update user set first_name = "${updateUserData.fname}" , last_name = "${updateUserData.lname}", user_name = "${updateUserData.user_name}", email_id = "${updateUserData.email}", mobile_number = "${updateUserData.num}", password = "${updateUserData.pass}" where user_id = ${id}`;
    const result = await updateData(sqlQuery);
    return new Promise((resolve)=>{
        resolve(result);
    })
}

const servicesDeleteData = async (id) => {
    const sqlQuery = `delete from user where user_id = ${id}`;
    const result = await deleteData(sqlQuery);
    return new Promise((resolve)=>{
        resolve(result);
    })
}
const servicesCheckData = async (checkUserData) => {
    const sqlQuery = `select * from user where user_name = "${checkUserData.user_name}" and password = "${checkUserData.pass}"`;
    const result = await checkData(sqlQuery);
    //console.log("Service console:",result)
    return new Promise((resolve) => {
        resolve(result);
    })
}
// const servicesCheckData = (checkUserData)=>{
    // const sqlQuery = `select * from user where user_name = "${checkUserData.userName}"`;
    // return checkData(sqlQuery);
// }
module.exports = {
    servicesFetchData,
    servicesInsertData,
    servicesUpdateData,
    servicesDeleteData,
    servicesCheckData
}