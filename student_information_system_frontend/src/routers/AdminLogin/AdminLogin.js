import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";





import Home from "../InstructorRegistration/InstructorRegistration"

import img1 from "../bg-01.jpg"
import "./AdminLogin.css"
import AdminRegistration from "../AdminRegistration/AdminRegistration";
import studentLogin from "../studentLogin/studentLogin";
import AdminManagment from "../AdminManagment/AdminManagment"
export default class AdminLogin extends Component
{



    render() {
        return (

            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <form className="login100-form8 validate-form">
					<span className="login100-form-title p-b-34">
						Account Login
					</span>

                                <div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20"
                                     data-validate="Type user name">
                                    <input id="first-name" className="input100" type="text" name="username"
                                           placeholder="User name"/>
                                        <span className="focus-input100"></span>
                                </div>
                                <div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
                                     data-validate="Type password">
                                    <input className="input100" type="password" name="pass" placeholder="Password"/>
                                        <span className="focus-input100"></span>
                                </div>

                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        <Link to="/AdminManagment">Sign in</Link>
                                    </button>
                                </div>

                                <div className="w-full text-center p-t-27 p-b-239">
						<span className="txt1">
							Forgot
						</span>

                                    <a href="#" className="txt2">
                                        User name / password?
                                    </a>
                                    <br/><br/>
                                    <div className="w-full text-center">
                                        <a href="#" className="txt3">
                                            Sign Up
                                        </a>
                                    </div>
                                </div>


                            </form>

                            <div className="login100-more4"></div>
                        </div>
                    </div>
                </div>


            </div>


        );
    }


}
