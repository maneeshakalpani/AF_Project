import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import logincss from './InstructorRegistration.css'





import axios from 'axios';


export default class EditTodo extends Component
{

constructor(props)
{
super(props);

    this.updateStaffid=this.updateStaffid.bind(this);
    this.updateinstructorname=this.updateinstructorname.bind(this);
    this.updateinstructorage=this.updateinstructorage.bind(this);
    this.updateinstructorgender=this.updateinstructorgender.bind(this);
    this.updateinstructormail=this.updateinstructormail.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={

    satffid:'',
        instructorname:'',
        instructorage:'',
        instructorgender:'',
        instructormail:''


    }

}
updateStaffid(e)
{
        this.setState({ satffid:e.target.value});

}


updateinstructorname(e)
{
    this.setState({ instructorname:e.target.value});

}
    updateinstructorage(e)
    {
        this.setState({ instructorage:e.target.value});

    }

    updateinstructorgender(e)
    {
        this.setState({ instructorgender:e.target.value});

    }

    updateinstructormail(e)
    {
        this.setState({ instructormail:e.target.value});

    }
    onSubmit(e)
    {

        const meo={

            staffid:this.state.staffid,
            instructorname:this.state.instructorname,
            iinstuctorage:this.state.instructorage,
            instructorgender:this.state.instructorgender,
            instuctoremail:this.state.instructormail,


        }
        axios.post('http://localhost:5000/instructor/add',meo).then(res=>console.log(res.data));
        this.setState({

            staffid:'',
            instructorname:'',
            instructorage:'',
            instructormail:''


        })
        this.props.history.push('/')

    }


    render() {
        return (

            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <form className="login100-form validate-form">
					<span className="login100-form-title p-b-34">
						Account Registartion
					</span>

                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Staff Id"/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Admin Name"/>
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>

                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Mobile Number"/>
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>

                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Address"/>
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Date Of Birth"/>
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Age"/>
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <select id="first-name" className="down">
                                        <option value="select Gender" className="placeholder">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <select id="first-name" className="down">
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
                                           placeholder="Email address"/>
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>

                                <div className="wrap-input100">
                                    <input className="input100" type="password" name="pass" placeholder="Password"/>
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

                            <div className="login100-more2" ></div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }


}
