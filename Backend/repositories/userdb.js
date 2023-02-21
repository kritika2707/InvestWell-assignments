const connection = require('../connection/db');

// fucnction to fetch data

//callback is used here
/* const fetchData = (sqlQuery,cb)=>{ */
/*  */
/*     connection.query(sqlQuery,(err,res)=>{ */
/*         if(err) */
/*         return console.log(err); */
/*          */
/*         //console.log(result); */
/*         return cb(null,res); */
/*         //return result; */
/*     }) */
/* } */
/*  */

//promises is used here

/* async await is applied now */
const fetchData = async (sqlQuery) => {

    return new Promise((resolve) => {
        connection.query(sqlQuery, (err, res) => {
            if (err)
                return console.log(err);

            //console.log(result);
            resolve(res);
            //return result;
        })
    })
}

const insertData = async (sqlQuery) => {
    return new Promise((resolve,reject)=>{
        connection.query(
        sqlQuery,
        (err, res) => {
            if (err) {
                return reject(err);
            }
            else {
                resolve("New record inserted!!");
            }
        })
    })}

const updateData = async (sqlQuery) => {
    return new Promise((resolve,reject) =>{
        connection.query(
        sqlQuery,
        (err,result) => {
            if (result.affectedRows == 0) {
                resolve("UserId doesn't exist!!");
            }
            else {
                resolve("Record updated!!");
            }
        })
}
)}

const deleteData = async (sqlQuery) => {
    return new Promise((resolve,reject)=>{connection.query(
        sqlQuery,
        (err, result) => {
            if (err) {
                reject(err);
            }
            else {
                resolve("Record deleted!!");
            }
        })
}
)}

const checkData = async (sqlQuery) => {

    return new Promise((resolve) => {
        connection.query(sqlQuery, (err, res) => {
            if (err)
                return console.log(err);

            //console.log(result);
            resolve(res);
            //return result;
        })
    })
}

module.exports = {
    fetchData,
    insertData,
    updateData,
    deleteData,
    checkData
}