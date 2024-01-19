const express=require('express')
const app=express()
const studentRoutes=require('./routes/student')

app.use(express.json())
app.use('/student',studentRoutes)
app.listen(3000,()=>{
    console.log("app is listening on port 3000");
})