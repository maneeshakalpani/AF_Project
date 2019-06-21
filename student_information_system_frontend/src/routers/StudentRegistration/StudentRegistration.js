import React,{Component} from 'react';
import "./studentRegistration.css"

import axios from "axios";

class studentRegistration extends Component {

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
        axios.post('http://localhost:5000/users/register',User).then(res=>{
            console.log(res.data)
            this.props.history.push('/studentLogin')
        })



      /*  register(User).then(res=>{



        })*/
    }
    render() {
        return (
            <div>




                <div className="limiter">


                    <div className="container-login100">

                        <div className="wrap-login100">
                            <div className="div4">
                                </div>

                            <form className="login100-form validate-form" onSubmit={this.onSubmit}>
					<span className="login100-form-title p-b-34">

						Account Registartion
					</span>



                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Full Name"  value={this.state.name}
                                           onChange={this.onChangename} required/>
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Address"  value={this.state.address}
                                           onChange={this.onChangeaddress}/>
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <select id="first-name" className="down"  value={this.state.state1}
                                            onChange={this.onChangestate1}>
                                        <option value="select state">Select State</option>
                                        <option value="Married">Married</option>
                                        <option value="Single">Single</option>
                                    </select >

                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100 ">
                                    <select id="first-name" className="down" value={this.state.gender}
                                            onChange={this.onChangegender}>
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
                                           placeholder="Date of Birth"  value={this.state.dob}
                                           onChange={this.onChangedob}/>
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>
                                <div className="wrap-input100" >
                                    <select id="first-name" className="down"  value={this.state.course}
                                            onChange={this.onChangecourse}>
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
                                           placeholder="Email address"  value={this.state.email}
                                           onChange={this.onChangeemail}/>
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="div1">

                                </div>

                                <div className="wrap-input100">
                                    <input className="input100" type="password" name="pass" placeholder="Password"  value={this.state.password}
                                           onChange={this.onChangepassword}/>
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
