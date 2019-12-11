const express = require('express');
const router = express.Router();

const user = require('../models/user');

router.get('/',(req,res)=>{
    let data ={} 
    user.findAll().then(users=>{
     res.json({users:users})
    })
})

router.put('/',(req,res)=>{
let {name,desc,salary} = req.body;
user.create({name,desc,salary}).then( res.json({msg:"success"})   );
})
router.post('/',(req,res)=>{
let {id,salary} = req.body;

user.update({salary},{where:{id:id}}).then(res.json({msg:"success"}))

})
router.delete('/',(req,res)=>{
    let{id}=req.body;
    user.destroy({where:{id:id}}).then(res.json({msg:'deleted successfully'}))
})
module.exports = router