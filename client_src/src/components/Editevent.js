import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Editevent extends Component{

  constructor(props){
    super(props);
    this.state = {
      id:'',
      title:'',
      location:'',
      description:''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentWillMount = () => {
    this.getEventDetails();
  }

  getEventDetails(){
    let eventId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/event_apps/${eventId}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          location: response.data.location,
          description: response.data.description,
        }, () => console.log(this.state));
    })
    .catch(err => console.log(err));
  }

  editEvent(newEvent){
    axios.request({
      method:'put',
      url:`http://localhost:3000/api/event_apps/${this.state.id}`,
      data: newEvent
    }).then(response => {
      this.props.history.push('/');
    }).catch(err=> console.log(err));
  }


  onSubmit(e){
    const newEvent = {
      title: this.refs.title.value,
      location: this.refs.location.value,
      description: this.refs.description.value
    }
    this.editEvent(newEvent);
    e.preventDefault();
  }

  handleInputChange(e){
    const target = e.target;
    const value = target.value;
    const title = target.title;

    this.setState({
      [title]:value
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
            <input type="text" name="title" ref="title" value={this.state.title} onChange={this.handleInputChange}/>
            <label htmlFor="title">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="location" ref="location" value={this.state.location} onChange={this.handleInputChange}/>
            <label htmlFor="location">Location</label>
          </div>
          <div className="input-field col s12">
            <textarea className="materialize-textarea" type="text" name="description" ref="description" value={this.state.description} onChange={this.handleInputChange}>
            </textarea>
            <label htmlFor="description">Description</label>
          </div>
          <input type="submit" className="btn" value="save" />
        </form>
      </div>
    )
  }
}
