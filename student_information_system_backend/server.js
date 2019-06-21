var express=require('express');
var cors=require('cors');
var bodyparser=require("body-parser");
var app=express();
var mongoose=require('mongoose');
var port=process.env.PORT||5000;
const todoRoutes=express.Router();

let Instructor=require('./model/Instructor.model');

const nodemailer = require("nodemailer");

const path=require('path');
const crypto=require('crypto');
const multer=require('multer');
const gridFsStorage=require('multer-gridfs-storage');
const grid=require('gridfs-stream');
const methodOverride=require('method-override')

app.use(bodyparser.json())
app.use(cors())
//const mongouri='mongodb://localhost:27017/student_information_system'
mongoose.connect('mongodb://localhost:27017/student_information_system').then(()=>{


    console.log("connect to the db");




}).catch(err=>{

    console.log(err);


});
//const conn=mongoose.createConnection(mongouri);


//middleware
app.use(methodOverride('_method'))

//Mongo Url
//init gfs
/*let gfs;
conn.once('open',()=>{
    gfs=grid(conn.db,mongoose.mongo);
    gfs.collection('uploads')
})

//create storage engine
const storage=new gridFsStorage({
    url:mongouri,
    file:(req,res)=>{
        return new Promise((resolve,reject)=>{
            crypto.randomBytes(16,(err,buf)=>{
                if(err){
                    return reject(err);
                }
                const filename=buf.toString('hex')+path.extname(file.originalname);
               const fileInfo={
                   filename:filename,
                   bucketName:'uploads'
               };
               resolve(fileInfo);
            });
        });
    }
});
const upload=multer({storage});*/





const Users=require('./business/Student')
app.use('/users',Users)
const Instructor=require('./business/Instructor')
app.use('/instructor',Instructor);

const Admin=require('./business/Admin')
app.use('/Admin',Admin);

/*app.get('/test',function(req,res){
    res.sendfile('index.html',{root:__dirname})
});

app.post('/upload',upload.single('file'),(req,res)=>{
  res.json({file:req.file})
   // res.redirect('/')
})
//get/file
//display
app.get('/files',(req,res)=>{
    gfs.files.find().toArray((err,files)=>{
        //check files
        if(!files||files.length===0){
            return res.status(404).json({
                err:'no file exsist'
            })
        }
        return res.json(files)
    })

})*/

/*app.get('/files/:filename',(req,res)=>{
    gfs.files.findOne({filename:req.params.filename},())

})*/


const Admin=require('./business/Admin')
const Users=require('./business/Student')
app.use('/admin',Admin)
app.use('/users',Users)
app.use('/instructor',todoRoutes);

app.listen(port,()=>{

   console.log('server running on port:'+port)
});