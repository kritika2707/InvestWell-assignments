const Joi = require('joi');

const signUpSchema = Joi.object({
    fname: Joi.string().min(2).max(25).required(),
    lname: Joi.string().min(2).max(25).required(),
    user_name: Joi.string().min(3).max(15).required(),
    email: Joi.string().email().pattern(new RegExp(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)).required(),
    number: Joi.number().required(),
    pass: Joi.string().min(7).max(16).pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,16}$/)).required(),
    cnfpass: Joi.ref('pass')
})
const loginSchema = Joi.object({
    user_name: Joi.string().required(),
    pass: Joi.string().required()
})
const updateSchema = Joi.object({
    uUserId: Joi.number().min(1).required(),
    fname:Joi.string().min(2).max(25).required(),
    lname: Joi.string().min(2).max(25).required() ,
    user_name: Joi.string().min(3).max(15).required(),
    email: Joi.string().email().pattern(new RegExp(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)).required(),
    num: Joi.number().required(),
    pass: Joi.string().min(7).max(16).pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,16}$/)).required()
})
const deleteSchema = Joi.object({
    userId: Joi.number().required()
})

const signUpValidate = (req,res,next)=>{
    const {error} = signUpSchema.validate(req.body);
    if(error){
        const {details } = error;
        const message = details.map(i => i.message).join(',');
        //console.log(error);
        return res.send(message);
    }
    else{
        next();
    }
}

const signInValidate = (req,res,next)=>{
    const {error,value} = loginSchema.validate(req.body);
    //console.log('Hi')
    if(error){
        //console.log('Hello')
        const {details } = error;
        const message = details.map(i => i.message).join(',');
        //console.log(error);
        return res.send(message);
    }
    else{
        next();
    }
}
const updateValidate = (req,res,next)=>{
    const {error} = updateSchema.validate(req.body);
    if(error){
        const {details } = error;
        const message = details.map(i => i.message).join(',');
        //console.log(error);
        return res.send(message);
    }
    else{
        next();
    }
}
const deleteValidate = (req,res,next)=>{
    const {error} = deleteSchema.validate(req.body);
    if(error){
        const {details } = error;
        const message = details.map(i => i.message).join(',');
        //console.log(error);
        return res.send(message);
    }
    else{
        next();
    }
}

module.exports = {
    signUpValidate,
    signInValidate,
    updateValidate,
    deleteValidate
}