import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Eventdetail extends Component{
  constructor(props){
    super(props);
    this.state = {
      details:''
    }
  }

  componentWillMount = () => {
    this.getEvent();
  }


  getEvent(){
    let eventId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/events/${eventId}`)
      .then(response => {
        this.setState({details: response.data}, () => {
          console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div>
        <br />
        <Link className="btn grey rounded" to="/">Back</Link>
        <hr />
        <h1>
          {this.state.details.name}
        </h1>
        <ul className="collection">
          <li className="collection-item">{this.state.details.city}</li>
        </ul>
        <Link className="btn" to={`/events/edit/${this.state.details.id}`}>Edit</Link>

        <button className="btn red right">Delete</button>
      </div>
    )
  }
}
