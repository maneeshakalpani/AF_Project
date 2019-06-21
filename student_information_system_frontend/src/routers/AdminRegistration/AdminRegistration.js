import React,{Component} from 'react';
import "./AdminRegistration.css"
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
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <form className="login100-form validate-form" onSubmit={this.onSubmit}>
					<span className="login100-form-title p-b-34">
						Account Registartion
					</span>

                                <div className="wrap-input100 ">
                                    <input id="first-name" className="input100" type="text"
                                           placeholder="Staff Id" value={this.state.name}
                                           onChange={this.onChangename} required/>
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

                            <div className="login100-more1" ></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminRegistration
