import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Addevent extends Component{


  addEvent(newEvent){
    axios.request({
      method:'post',
      url:'http://localhost:3000/api/events',
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
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="city" ref="city" />
            <label htmlFor="city">City</label>
          </div>
          <input type="submit" className="btn" value="save" />
        </form>
      </div>
    )
  }
}
