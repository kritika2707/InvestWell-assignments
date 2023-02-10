const connection = require('../connection/db');

// fucnction to fetch data
const fetchData = (sqlQuery)=>{
    return connection.query(sqlQuery,(err,result)=>{
        if(err)
        return console.log(err);
        else
        console.log("All rows",result);
    })
}

const insertData = (sqlQuery)=>{
    return connection.query(
        sqlQuery,
        (err,result)=>{
        if(err){
            return console.log(err);
        }
        else
        {
            console.log("New record inserted!!");
        }
    })
}

const updateData = (sqlQuery)=>{
    return connection.query(
        sqlQuery,
        (err,result)=>{
        if(err){
            return console.log(err);
        }
        else
        {
            console.log("Record updated!!" + result);
        }
    })
}

const deleteData = (sqlQuery)=>{
    return connection.query(
        sqlQuery,
        (err,result)=>{
        if(err){
            return console.log(err);
        }
        else
        {
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