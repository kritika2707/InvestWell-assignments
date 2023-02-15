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

const insertData = (sqlQuery) => {
    return connection.query(
        sqlQuery,
        (err, result) => {
            if (err) {
                return console.log(err);
            }
            else {
                console.log("New record inserted!!");
            }
        })
}

const updateData = (sqlQuery) => {
    return connection.query(
        sqlQuery,
        (err) => {
            if (err) {
                return console.log(err);
            }
            else {
                console.log("Record updated!!");
            }
        })
}

const deleteData = (sqlQuery) => {
    return connection.query(
        sqlQuery,
        (err, result) => {
            if (err) {
                return console.log(err);
            }
            else {
                console.log("Record deleted!!");
            }
        })
}


module.exports = {
    fetchData,
    insertData,
    updateData,
    deleteData
}