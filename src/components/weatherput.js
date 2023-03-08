import axios from "axios";
import React, { Component } from "react";
import './put.css';
class UpdateValues extends Component {
    constructor(props){
        super(props);
        this.state={
            temperature:'',
            humidity:'',
            windy:'',
            outlook:'',
        }
    }
handletemperatureChange = (event) => {
    this.setState({ temperature:event.target.value});
}

handlehumidityChange = (event) => {
    this.setState({ humidity:event.target.value});
}
handlewindyChange = (event) => {
    this.setState({ windy:event.target.value});
}
handleoutlookChange = (event) => {
    this.setState({ outlook:event.target.value});
}


handleSubmit = (event) =>{
    event.preventDefault();
    const data = {
        temperature: this.state.temperature,
        humidity:this.state.humidity,

        windy:this.state.windy,
        outlook:this.state.outlook,
        location:this.state.location    
    }
    axios.put('http://127.0.0.1:8080/',data)
};
render(){
    return ( 
        <form onSubmit={this.handleSubmit} className="ge" align="center">
            <label className="login-label">Temperature</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.temperature}
                onChange ={this.handletemperatureChange}
            /><br/><br/>

            <label className="login-label">Humidity</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.humidity}
                onChange ={this.handlehumidityChange}
            /><br/><br/>

            <label className="login-label">Windy</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.windy}
                onChange ={this.handlewindyChange}
            /><br/><br/>

            <label className="login-label">Outlook</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.outlook}
                onChange ={this.handleoutlookChange}
            /><br/><br/>

<label className="login-label">Location</label><br/>
            <input
                className="login-input" 
                type="text" 
                value={this.state.location}
                onChange ={this.handlelocationChange}
            /><br/><br/>
            <button className="login-button" type="submit" style={{padding:10,color:"blue"}}> Submit </button>
        </form>
    );
  }
}

export default UpdateValues;