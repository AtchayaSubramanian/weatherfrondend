// import { Link } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
// import "./css/reg.css";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature:'',
      humidity:'',
      windy:'',
      outlook:'',
    };
  }

  handlefirstNameChange = (event) => {
    this.setState({ temperature: event.target.value });
  };

  handleLastNameChange = (event) => {
    this.setState({ humidity: event.target.value });
  };
  handlemailidChange = (event) => {
    this.setState({ windy: event.target.value });
  };
  handlenumberChange = (event) => {
    this.setState({ outlook: event.target.value });
  };
  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      temperature: this.state.temperature,
      humidity: this.state.humidity,
      windy: this.state.windy,
      outlook: this.state.outlook
      
    };
    axios.post('http://127.0.0.1:8080/post', data)
  };
    render(){
      return(
        <div className="logLogin" >
      <div className="reg">    
          <form id="regform" name="suForm" onSubmit={this.handleSubmit}>    
            <label className="name" ><b>First Name:</b>
            </label>
            <input type="text" name="uname" id="uname" placeholder="First Name" value={this.state.firstName} onChange={this.handlefirstNameChange} />    
            <label className="name" id="lname2"><b>Last Name:</b>
            </label>
            <input type="text" id="uname" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} /> 
            <br /><br /> <br /><br /> 
            <label className="name" id="name" ><b>Email ID:</b>
            </label>
            <input type="email" id="uname" placeholder="Email Id" value={this.state.mailid} onChange={this.handlemailidChange} /> 
            <label className="name" id="lname" ><b>Contact No:</b>
            </label>
            <input type="text" id="uname" placeholder="Number" value={this
            .state.number} onChange={this.handlenumberChange} /> 
            <br /><br /> <br /><br /> 
            <label className="name" id="name1" ><b>Password:</b>
            </label>
            <input type="password" id="uname" value={this.state.pass} onChange={this.handlepassChange} /> 
            <label className="name" id="lname1"><b>Confirm:</b>
            </label>
            <input type="password" id="uname"/>
            <button className="button" type="submit">Submit</button>
          </form>
        </div></div>
  );
            }
          }
export default Register;