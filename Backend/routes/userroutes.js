const express = require("express");
const path = require("path");
const router = express.Router();
const {signUpValidate, signInValidate} = require('../validation/validation.js');

const { showForm, controlFetchData, controlInsertData, controlUpdateData, controlDeleteData, controlCheckData} = require('../controller/usercontroller');
router.get("/", showForm)

router.get('/fetchuser', controlFetchData);

router.post('/createuser',signUpValidate, controlInsertData);

router.post('/updateuser', controlUpdateData);

router.post('/deleteuser', controlDeleteData);

router.post('/login', signInValidate, controlCheckData);

module.exports = router;
