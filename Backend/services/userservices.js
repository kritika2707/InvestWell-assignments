// this file is for services functions....
const {fetchData,insertData,updateData,deleteData} = require('../repositories/userdb');

const servicesFetchData = (cb)=>{
    return new Promise((resolve)=>{
        const sqlQuery = "select * from user";
        const result = fetchData(sqlQuery);
        result.then((data)=>{
            resolve(data);
        }) 
    })
    /* const sqlQuery = "select * from user"; */
    /* fetchData(sqlQuery,function(err,res){ */
    /*     //console.log(res); */
    /*     cb(null,res); */
    /*     //return result; */
    /* }); */
}

const servicesInsertData = (newUser)=>{
    const sqlQuery = `insert into user(first_name,last_name,user_name,email_id,mobile_number,password) values("${newUser.fname}","${newUser.lname}","${newUser.user_name}","${newUser.email}",${newUser.number},"${newUser.pass}")`;
    return insertData(sqlQuery);
}

const servicesUpdateData = (id , updateUserData)=>{
    const sqlQuery  = `update user set first_name = "${updateUserData.fname}" , last_name = "${updateUserData.lname}", user_name = "${updateUserData.user_name}", email_id = "${updateUserData.email}", mobile_number = "${updateUserData.num}", password = "${updateUserData.pass}" where user_id = ${id}`;
    return updateData(sqlQuery);
}

const servicesDeleteData = (id)=>{
    const sqlQuery = `delete from user where user_id = ${id}`;
    return deleteData(sqlQuery);
}

module.exports = {
    servicesFetchData,
    servicesInsertData,
    servicesUpdateData,
    servicesDeleteData
}