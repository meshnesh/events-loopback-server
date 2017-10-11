import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class AddUser extends Component{


  addEvent(newEvent){
    axios.request({
      method:'post',
      url:'http://localhost:3000/api/Users',
      data: newEvent
    }).then(response => {
      console.log(response)
      this.props.history.push('/login');
    }).catch(err=> console.log(err));
  }


  onSubmit(e){
    const newEvent = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      username: this.refs.username.value,
      password: this.refs.password.value
    }
    this.addEvent(newEvent);
    // console.log(this.state);
    e.preventDefault();
  }


  render(){
    return(
      <div>
        <br />
        <Link className="btn grey rounded" to="/">Back</Link>
        <hr />
        <h1>sign up</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="email" ref="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input type="text" name="username" ref="username" />
            <label htmlFor="username">User Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="password" ref="password" />
            <label htmlFor="password">password</label>
          </div>
          <input type="submit" className="btn" value="save" />
        </form>
      </div>
    )
  }
}
