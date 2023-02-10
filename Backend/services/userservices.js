// this file is for services functions....
const {fetchData,insertData,updateData,deleteData} = require('../repositories/userdb');

const servicesFetchData = ()=>{
    const sqlQuery = "select * from user";
    return fetchData(sqlQuery);
}

const servicesInsertData = (newUser)=>{
    const sqlQuery = `insert into user(first_name,last_name,user_name,email_id,mobile_number,password) values("${newUser.fname}","${newUser.lname}","${newUser.user_name}","${newUser.email}",${newUser.number},"${newUser.pass}")`;
    return insertData(sqlQuery);
}

const servicesUpdateData = (id , updateUser)=>{
    console.log(updateUser);
    const sqlQuery  = `update user set first_name = "${updateUser.first_name}" , last_name = "${updateUser.last_name}", user_name = "${updateUser.user_name}", email_id = "${updateUser.email}", mobile_number = "${updateUser.number}", password = "${updateUser.pass}" where user_id = ${id}`;
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