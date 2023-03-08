import axios from "axios";

import "./get.css";
import React, { useState,useEffect } from "react";
function Main(){
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8080/get')
          .then(response => {
              setQuotes(response.data);
          })
          .catch(error => {
              console.log(error);
          });
  }, []);
  
    return (
      <div className="body">
      <div className="navbar">
        
      </div>
      <div>
        <p className="head">
          Weather Information
        </p>
      </div>
      <div className="table">
        <table border={1}>
          <thead>
            <tr>
              <th>temperature</th>
              <th>humidity</th>
              <th>windy</th>
              <th>outlook</th>
              <th>location</th>
           
            </tr>
          </thead>
          <tbody>
             {quotes.map(quote =>(
              <tr key={quote.temperature}>
              <td>{quote.temperature}</td>
              <td>{quote.humidity}</td>
              <td>{quote.windy}</td>
              <td>{quote.outlook}</td>
              <td>{quote.location}</td>
              </tr>

             )
          
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Main;