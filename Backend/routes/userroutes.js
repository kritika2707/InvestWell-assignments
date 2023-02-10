const express = require("express");
const path = require("path");
const router = express.Router();

const {showForm,controlFetchData,controlInsertData,controlUpdateData,controlDeleteData} = require('../controller/usercontroller');

router.get("/",showForm)

router.get('/fetchuser',controlFetchData);

router.post('/createuser',controlInsertData);

router.post('/updateuser',controlUpdateData);

router.post('/deleteuser',controlDeleteData);

module.exports = router;
