import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Addevent extends Component{


  addEvent(newEvent){
    axios.request({
      method:'post',
      url:'http://localhost:3000/api/event_apps',
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
    this.addEvent(newEvent);
    // console.log(this.refs.name.value);
    e.preventDefault();
  }


  render(){
    return(
      <div>
        <br />
        <Link className="btn grey rounded" to="/">Back</Link>
        <hr />
        <h1>Add Event</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="title" ref="title" />
            <label htmlFor="name">Title</label>
          </div>
          <div className="input-field">
            <input type="text" name="location" ref="location" />
            <label htmlFor="location">Location</label>
          </div>
          <div className="input-field col s12">
            <textarea className="materialize-textarea" type="text" name="description" ref="description" placeholder="Event Description">
            </textarea>
            <label htmlFor="description">Description</label>
          </div>
          <input type="submit" className="btn" value="save" />
        </form>
      </div>
    )
  }
}
