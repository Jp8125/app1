
exports.getStudents=(req,res,next)=>{
res.status(200).json([
    {
      "id": 1,
      "name": "John Doe",
      "age": 20,
      "grade": "A",
      "courses": ["Mathematics", "Physics", "English"]
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 21,
      "grade": "B",
      "courses": ["History", "Chemistry", "Spanish"]
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "age": 19,
      "grade": "A-",
      "courses": ["Computer Science", "Biology", "Art"]
    }
  ]
  )
}
exports.postStudent=(req,res,next)=>{
    console.log(req.body);
    let name=req.body.name
    let age=req.body.age
    let grade=req.body.grade
    res.status(201).json({
        message:"data added success!",
        data:{
            name:name,
            age:age,
            grade:grade,
            courses:[]
        }
    })
}