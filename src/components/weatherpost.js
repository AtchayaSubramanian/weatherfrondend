// import { Link } from "react-router-dom";
import axios from "axios";
import React, { Component } from "react";
 import "./post.css";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature:'',
      humidity:'',
      windy:'',
      outlook:'',
      location:'',
    };
  }

  handletemperatureChange = (event) => {
    this.setState({ temperature: event.target.value });
  };

  handlehumidityChange = (event) => {
    this.setState({ humidity: event.target.value });
  };
  handlewindyChange = (event) => {
    this.setState({ windy: event.target.value });
  };
  handleoutlookChange = (event) => {
    this.setState({ outlook: event.target.value });
  };
   handlelocationChange = (event) => {
    this.setState({ location: event.target.value });
  };
  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      temperature: this.state.temperature,
      humidity: this.state.humidity,
      windy: this.state.windy,
      outlook: this.state.outlook,
      location: this.state.location
      
    };
    axios.post('http://127.0.0.1:8080/post', data)
  };
    render(){
      return(
        <div className="logLogin" >
      <div className="reg">    
          <form id="regform" name="suForm" onSubmit={this.handleSubmit}>    
            <label className="name" ><b>Temperature:</b>
            </label>
            <input type="text" name="uname" id="uname" placeholder="temperature" value={this.state.temperature} onChange={this.handletemperatureChange} />    
            <br></br><br></br>
            <label className="name" id="lname2"><b>Humidity:</b>
            </label>
            <input type="text" id="uname" placeholder="humidity" value={this.state.humidity} onChange={this.handlehumidityChange} /> 
            <br /><br /> 
            <label className="name" id="name" ><b>Windy:</b>
            </label>
            <input type="text" id="uname" placeholder="windy" value={this.state.windy} onChange={this.handlewindyChange} /> 
            <br></br><br></br>
            <label className="name" id="lname" ><b>Outlook:</b>
            </label>
            <input type="text" id="uname" placeholder="outlook" value={this
            .state.outlook} onChange={this.handleoutlookChange} /> 
             <br /><br /> 
            <label className="name" id="lname" ><b>Location:</b>
            </label>
            <input type="text" id="uname" placeholder="location" value={this
            .state.outlook} onChange={this.handlelocationChange} /> 
            <br /><br /> <br /><br /> 


            <button className="button" type="submit">Submit</button>
          </form>
        </div></div>
  );
            }
          }
export default Register;