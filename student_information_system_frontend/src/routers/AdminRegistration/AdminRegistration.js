import React,{Component} from 'react';
import "./AdminRegistration.css"

import axios from 'axios';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";

class AdminRegistration extends Component {

    constructor(props)
    {
        super(props);

        this.updateStaffid=this.updateStaffid.bind(this);
        this.updatename=this.updatename.bind(this);
        this.updatemobileno=this.updatemobileno.bind(this);
        this.updateaddress=this.updateaddress.bind(this)
        this.updateadob=this.updateadob.bind(this);
        this.updatestate=this.updatestate.bind(this);

        this.updateage=this.updateage.bind(this);
        this.updategender=this.updategender.bind(this);
        this.updatemail=this.updatemail.bind(this);
        this.updatepassword=this.updatepassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={

            satffid:'',
            name:'',
            mobileno:'',
            address:'',
            dob:'',
            state1:'',
            age:'',
            gender:'',
            email:'',
            password:''


        }}

    updateStaffid(e)
    {
        this.setState({ satffid:e.target.value});

    }


    updatename(e)
    {
        this.setState({ name:e.target.value});

    }
    updatemobileno(e)
    {
        this.setState({mobileno:e.target.value});

    }
    updateaddress(e)
    {
        this.setState({address:e.target.value});

    }
    updateadob(e)
    {
        this.setState({dob:e.target.value});

    }
    updatestate(e)
    {
        this.setState({state1:e.target.value});

    }

    updateage(e)
    {
        this.setState({ age:e.target.value});

    }

    updategender(e)
    {
        this.setState({ gender:e.target.value});

    }

    updatemail(e)
    {
        this.setState({ email:e.target.value});

    }
    updatepassword(e)
    {
        this.setState({ password:e.target.value});

    }

    onSubmit(e)
    {

        const meo={

            staffid:this.state.satffid,
            name:this.state.instructorname,
            mobileno:this.state.mobileno,
            address:this.state.address,
            dob:this.state.dob,
            state:this.state.state1,
            age:this.state.age,
            gender:this.state.gender,
            email:this.state.email,
            password:this.state.password


        }
        axios.post('http://localhost:5000/Admin/add',meo).then(res=>console.log(res.data));
        this.setState({

            satffid:'',
            name:'',
            age:'',
            email:''


        })
        //this.props.history.push('/')


import axios from "axios";


class AdminRegistration extends Component {

    constructor(){
        super()
        this.state={
            name:"",
            address:"",
            state1:"",
            gender:"",
            dob:"",
            course:"",
            email:"",
            password:""
        }
        this.onChangename=this.onChangename.bind(this)
        this.onChangeaddress=this.onChangeaddress.bind(this)
        this.onChangestate1=this.onChangestate1.bind(this)
        this.onChangegender=this.onChangegender.bind(this)
        this.onChangedob=this.onChangedob.bind(this)
        this.onChangecourse=this.onChangecourse.bind(this)
        this.onChangeemail=this.onChangeemail.bind(this)
        this.onChangepassword=this.onChangepassword.bind(this)

        this.onSubmit=this.onSubmit.bind(this)
    }

    onChangename(e){
        this.setState({name:e.target.value})
    }

    onChangeaddress(e){
        this.setState({address:e.target.value})
    }

    onChangestate1(e){
        this.setState({state1:e.target.value})
    }

    onChangegender(e){
        this.setState({gender:e.target.value})
    }

    onChangedob(e){
        this.setState({dob:e.target.value})
    }

    onChangecourse(e){
        this.setState({course:e.target.value})
    }

    onChangeemail(e){
        this.setState({email:e.target.value})
    }

    onChangepassword(e){
        this.setState({password:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const User={
            name:this.state.name,
            address:this.state.address,
            state1:this.state.state1,
            gender:this.state.gender,
            dob:this.state.dob,
            course:this.state.course,
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://localhost:5000/admin/register',User).then(res=>{
            console.log(res.data)
            this.props.history.push('/Admin')
        })



        /*  register(User).then(res=>{



          })*/

    }
    render() {
        return (
            <div>
                <div className="header-top">
                    <div className="logo">
                        <div className="logohandling">

                        </div>


                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-6 col-4 header-top-left">

                            </div>

                        </div>
                    </div>
                </div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <form className="login100-form validate-form" onSubmit={this.onSubmit}>
					<span className="login100-form-title p-b-34">
						Account Registartion
					</span>

                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"

                                           placeholder="Staff Id"


                                           value={this.state.satffid}
                                           onChange={this.updateStaffid}


                                    />

                                           placeholder="Staff Id" value={this.state.name}
                                           onChange={this.onChangename} required/>

                                    <span className="focus-input100"></span>
                                </div>

                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Admin Name" value={this.state.name}
                                           onChange={this.updatename}



                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>

                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Mobile Number"

                                           value={this.state.mobileno}
                                           onChange={this.updatemobileno}



                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>

                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Address"

                                           value={this.state.address}
                                           onChange={this.updateaddress}




                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Date Of Birth"

                                           value={this.state.dob}
                                           onChange={this.updateadob}


                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Age"
                                           value={this.state.age}
                                           onChange={this.updateage}



                                    />

                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <select id="first-name" className="down"

                                            value={this.state.gender}
                                            onChange={this.updategender}




                                    >
                                        <option value="select Gender" className="placeholder">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <select id="first-name" className="down"


                                            value={this.state.state1}
                                            onChange={this.updatestate}





                                    >
                                        <option value="select state">Select State</option>
                                        <option value="Married">Married</option>
                                        <option value="Single">Single</option>
                                    </select>

                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>

                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="email"
                                           placeholder="Email address"


                                           value={this.state.email}
                                           onChange={this.updatemail}


                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>

                                <div className="wrap-input100">
                                    <input className="input100" type="password" name="pass" placeholder="Password"


                                           value={this.state.password}
                                           onChange={this.updatepassword}



                                    />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="div1">

                                </div>
                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        Sign Up
                                    </button>
                                </div>



                            </form>

                            <div className="login100-more1" ></div>
                        </div>
                    </div>
                </div>
                <footer className="com">
                    <div className="cont">

                        <div className="footerdiv"></div>

                        <div className="row footer-bottom d-flex justify-content-between">
                            <p className="col-lg-8 col-sm-12 footer-text m-0 text-white">Copyright © 2018 All rights
                                reserved <i className="fa fa-heart-o" aria-hidden="true"></i> <a href="#"></a></p>
                            <div className="col-lg-4 col-sm-12 footer-social">

                                <p className="mail1">jananisaradha@gmail.com</p>              <p
                                className="mail1"> 072-4050478</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default AdminRegistration
