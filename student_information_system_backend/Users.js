

const express=require("express")
const users=express.Router()
const cors=require("cors")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")

const User=require('./User')
users.use(cors())

process.env.SECRET_KEY='secret'

users.post('/register',(req,res)=>{
    const userData={
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        password:req.body.password
    }

    User.findOne({
        email:req.body.email
    })
        .then(user=>{
            if(!user){
                bcrypt.hash(req.body.password,10,(err,hash)=>{
                    userData.password=hash
                    User.create(userData).then(user=>{
                        res.json({status:user.email+'registerd'})
                    })
                        .catch(err=>{
                            res.send('error:' +err)
                        })
                })
            }else{
                res.json({error:'user already exsists'})
            }
        })
        .catch(err=>{
            res.send('error:' + err)
        })
})

users.post('/login',(req,res)=>{

    User.findOne({
        email:req.body.email
    })
        .then(user=>{
            if(user){
                if(bcrypt.compareSync(req.body.password,user.password)){
                    const payload={
                        _id:user._id,
                        first_name:user.first_name,
                        last_name:user.last_name,
                        email:user.email
                    }
                    let token=jwt.sign(payload,process.env.SECRET_KEY,{
                        expiresIn:1440
                    })
                    res.send(token)
                }else{
                    //res.json({error:"user dose not exist"})
                    console.log("user dose not exist")
                }
            }else{
                //res.json({error:"user does not exist"})
                console.log("user dose not exist")
            }
        })
        .catch(err=>{
            res.send('error:'+err)
        })
})

users.get('/profile',(req,res)=>{
    var decoded=jwt.verify(req.headers['authorization'],process. env.SECRET_KEY)

    User.findOne({
        _id:decoded._id
    })
        .then(user=>{
            if(user){
                res.json({status:User.email})
            }else{
                // res.send("user does not exist")
                console.log(user)
            }

        }).catch(err=>{
        res.send('error:'+err)
    })

})

module.exports=users