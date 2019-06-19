var express=require('express');
var cors=require('cors');
var bodyparser=require("body-parser");
var app=express();
var mongoose=require('mongoose');
var port=process.env.PORT||5000;
const todoRoutes=express.Router();
let Instructor=require('./Instructor.model');
const nodemailer = require("nodemailer");
app.use(bodyparser.json())
app.use(cors())
mongoose.connect('mongodb://localhost:27017/student_information_system').then(()=>{


    console.log("connect to the db");




}).catch(err=>{

    console.log(err);


});

todoRoutes.route('/add').post(function (req,res) {

    let instructor=new Instructor(req.body);
    instructor.save()
        .then(todo=>{


            res.status(200).json({'todo':'todo addded successfully'});



            let transporter=nodemailer.createTransport({

                service:'gmail',
                auth:{

                    user:'maneshmkw@gmail.com',
                    pass:'sudubula'


                }


            });

            let mailOPtion={


                from:'',
               to:req.body.instuctoremail,
               // to:'jananisarada3@gmail.com',
                subject:'testing script',
                text:'it works'


            };
            transporter.sendMail(mailOPtion,function (err,data) {
                if(err)
                {

                    console.log('error occur');
                }

                else{

                    console.log('mail sent');

                }
            });

















        })
        .catch(err=>{

            res.status(400).send('adding new todo failed');

        })});
todoRoutes.route('/').get(function (req,res) {



    Instructor.find(function (err,instructor) {

        if(err)
        {

            console.log(err);

        }
        else{


            res.json(instructor);

        }

    });



});

const Users=require('./Users')
app.use('/users',Users)
app.use('/instructor',todoRoutes);
app.listen(port,()=>{

   console.log('server running on port:'+port)
});