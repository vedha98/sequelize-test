const express = require('express');
const router = express.Router();

const user = require('../models/user');
router.get('/',(req,res)=>{
let data = user.findAll().then(users=>{console.log(users)})
    res.json({msg:"from get router"});
})
router.put('/',(req,res)=>{

    console.log(req.body);
    res.json({content:req.body})
})
module.exports = router