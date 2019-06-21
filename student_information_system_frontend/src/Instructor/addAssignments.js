import React, {Component} from 'react';
import logo from "../images/logo.png";
import './App.css';
import {Button} from "reactstrap";


class addAssignments extends Component{

    onChange(e){
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>

                <div className="main">
                    <form>
                        <div className="main-form">
                            <label>Subject Name:</label>
                            <select id="name" className="form-input">
                                <option value="select Subject">Select Subject</option>
                                <option value="Af">Application Framework</option>
                            </select>
                        </div>
                        <div className="main-form">
                            <label>Due Date:</label>
                            <input
                                type='date'
                                name='code'
                                className="form-input"
                            />
                        </div>
                        <div className="main-form">
                            <label>Choose file:</label>
                            <input type="file" name="file" onChange={(e)=> this.onChange(e)} className="form-input"/>
                        </div>
                        <div className="main-form">
                            <Button className="form-btn">Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}



export default addAssignments
