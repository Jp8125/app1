const express=require('express')
const router=express.Router()
const studentController=require('../controllers/student')

router.get('/list',studentController.getStudents)              
router.post('/add',studentController.postStudent)
module.exports=router