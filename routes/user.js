const express = require('express');
const usercontroller = require('../controllers/usercontoller');
const router=express.Router();
router.use(express.json());

router.get('/users',(req,res)=>{
    usercontroller.getAllUsers(req,res)
})

router.get('/user/:id',(req,res)=>{
    console.log("we are here..")
    usercontroller.getParticularUser(req,res)
})

router.post('/add/user',(req,res)=>{
    usercontroller.addUser(req,res)
})

module.exports = router;