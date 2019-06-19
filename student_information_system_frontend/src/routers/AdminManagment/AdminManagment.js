import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";





import Home from "../InstructorRegistration/InstructorRegistration"

import img1 from "../bg-01.jpg"

import AdminRegistration from "../AdminRegistration/AdminRegistration";
import studentLogin from "../studentLogin/studentLogin";
import Admin from "./AdminManagment.css";
import HandlingInstructor from "./HandlingInstructor"
import HandlingCourse from "./HandlingCourse"

export default class AdminManagment extends Component
{



    render() {
        return (

            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <form className="login100-form8 validate-form">
					<span className="login100-form-title p-b-34">
						Admin Managment
					</span>


                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        <Link to="/HandlingInstructor">Handling Instructor</Link>
                                    </button>
                                </div>

                                <div className="container-login100-form-btn" className="dd">
                                    <button className="login100-form-btn">
                                        <Link to="/HandlingCourse">Handling Courses</Link>
                                    </button>
                                </div>

                                <div className="w-full text-center p-t-27 p-b-239">
						<span className="txt1">

						</span>


                                    <br/><br/>
                                    <div className="w-full text-center">


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
