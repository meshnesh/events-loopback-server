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
    axios.get(`http://localhost:3000/api/event_apps/${eventId}`)
      .then(response => {
        this.setState({details: response.data}, () => {
          console.log(this.state);
        })
    })
    .catch(err => console.log(err));
  }

  onDelete(){
    let eventId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/event_apps/${eventId}`)
      .then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
  }

  render(){
    return(
      <div>
        <br />
        <Link className="btn grey rounded" to="/">Back</Link>
        <hr />
        <h1>
          {this.state.details.title}
        </h1>
        <ul className="collection">
          <li className="collection-item">{this.state.details.location}</li>
          <li className="collection-item">{this.state.details.description}</li>
        </ul>
        <Link className="btn" to={`/event/edit/${this.state.details.id}`}>Edit</Link>

        <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
      </div>
    )
  }
}
