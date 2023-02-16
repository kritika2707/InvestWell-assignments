const express = require("express");
const path = require("path");
const router = express.Router();

const { showForm, controlFetchData, controlInsertData, controlUpdateData, controlDeleteData, controlCheckData } = require('../controller/usercontroller');

router.get("/", showForm)

router.get('/fetchuser', controlFetchData);

router.post('/createuser', controlInsertData);

router.post('/updateuser', controlUpdateData);

router.post('/deleteuser', controlDeleteData);

router.post('/login', controlCheckData);

module.exports = router;
