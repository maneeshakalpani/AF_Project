import React,{Component} from 'react';
import "./InstuctorLogin.css"
import {Link} from "react-router-dom";

import axios from 'axios';
class InstuctorLogin extends Component {

    constructor(props)
    {

        super(props);
        this.updateinstructormail=this.updateinstructormail.bind(this);
        this.updateinstructorpassword=this.updateinstructorpassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={

            email:'',
            password:''


        }


    }

    updateinstructormail(e)
    {
        this.setState({ email:e.target.value});

    }
    updateinstructorpassword(e)
    {
        this.setState({ password:e.target.value});

    }
    onSubmit(e){
        e.preventDefault()

        const User={
            email:this.state.email,
            password:this.state.password
        }

        axios.post('http://localhost:5000/instructor/login', User)
            .then(res => {
                console.log("login")
                localStorage.setItem('usertoken', res.data)
                console.log( res.data)

                if(res.data=="correct")
                {

                    this.props.history.push('/');

                }
                else
                {

                    alert("Incorrect username and Password");


                }

            }).catch(err => {
            console.log(err)
        })

    }

    render() {
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <form className="login100-form6 validate-form" onSubmit={this.onSubmit}>
					<span className="login100-form-title p-b-34">
						Account Login
					</span>

                                <div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20"
                                     data-validate="Type user name">
                                    <input id="first-name" className="input100" type="text" name="username"
                                           placeholder="User name"


                                           value={this.state.email}
                                           onChange={this.updateinstructormail}




                                    />
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
                                     data-validate="Type password">
                                    <input className="input100" type="password" name="pass" placeholder="Password"

                                           value={this.state.password}
                                           onChange={this.updateinstructorpassword}






                                    />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        Sign in
                                    </button>
                                </div>


                                <div className="div7">
                                </div>


                                <div className="w-full text-center p-t-27 p-b-239">
						<span className="txt1">
							Forgot
						</span>

                                    <a href="#" className="txt2">
                                        User name / password?
                                    </a>
                                    <br/><br/>

                                </div>

                            </form>

                            <div className="login100-more3" ></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default InstuctorLogin
