import React,{Component} from 'react';
import "./studentRegistration.css"


class studentRegistration extends Component {
    render() {
        return (
            <div>




                <div className="limiter">


                    <div className="container-login100">

                        <div className="wrap-login100">
                            <div className="div4">
                                </div>

                            <form className="login100-form validate-form">
					<span className="login100-form-title p-b-34">

						Account Registartion
					</span>



                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Full Name"/>
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
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Date of Birth"/>
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100" >
                                    <select id="first-name" className="down">
                                        <option value="Course name">Select Course</option>
                                        <option value="Information Technology"> Information Technology</option>
                                        <option value=" Computer Systems & Network">Computer Systems & Network</option>
                                        <option value="Software Engineering">Software Engineering</option>
                                        <option value=" Information Systems Engineering">Information Systems Engineering</option>
                                        <option value=" Cyber Security"> Cyber Security</option>
                                        <option value="Interactive Media">Interactive Media</option>
                                        <option value="Data Science">Data Science</option>

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

                            <div className="login100-more" ></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default studentRegistration
