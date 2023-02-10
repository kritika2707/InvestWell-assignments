const express = require("express");
const path = require("path");
const router = express.Router();

const {showForm,controlFetchData,controlInsertData,controlUpdateData,controlDeleteData} = require('../controller/usercontroller');
router.get("/",showForm)

router.get('/fetchuser',controlFetchData);

router.post('/createuser',controlInsertData);

router.put('/updateuser/:id',controlUpdateData);

router.delete('/deleteuser/:id',controlDeleteData);

module.exports = router;
