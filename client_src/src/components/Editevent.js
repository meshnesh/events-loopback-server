import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Editevent extends Component{

  constructor(props){
    super(props);
    this.state = {
      id:'',
      name:'',
      city:''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentWillMount = () => {
    this.getEventDetails();
  }

  getEventDetails(){
    let eventId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/events/${eventId}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          city: response.data.city,
        }, () => console.log(this.state));
    })
    .catch(err => console.log(err));
  }

  editEvent(newEvent){
    axios.request({
      method:'put',
      url:`http://localhost:3000/api/events/${this.state.id}`,
      data: newEvent
    }).then(response => {
      this.props.history.push('/');
    }).catch(err=> console.log(err));
  }


  onSubmit(e){
    const newEvent = {
      name: this.refs.name.value,
      city: this.refs.city.value
    }
    this.editEvent(newEvent);
    e.preventDefault();
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]:value
    })
  }


  render(){
    return(
      <div>
        <br />
        <Link className="btn grey rounded" to="/">Back</Link>
        <hr />
        <h1>Edit Event</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange}/>
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="city" ref="city" value={this.state.city} onChange={this.handleInputChange}/>
            <label htmlFor="city">City</label>
          </div>
          <input type="submit" className="btn" value="save" />
        </form>
      </div>
    )
  }
}
