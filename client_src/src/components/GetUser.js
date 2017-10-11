import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Addevent extends Component{


  login(newlogin){
    axios.request({
      method:'post',
      url:'http://localhost:3000/api/Users/login',
      data: newlogin
    }).then(response => {
      console.log(response.status, response.data)
      if(response.status === 200){
        alert("sucssesful login");
        this.props.history.push('/login');
      }else{
        alert("unsuccesful login")
        this.props.history.push('/login');
      }
    }).catch(err=> console.log(err));
  }


  onSubmit(e){
    const newlogin = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    this.login(newlogin);
    // console.log(this.refs.name.value);
    e.preventDefault();
  }


  render(){
    return(
      <div>
        <br />
        <Link className="btn grey rounded" to="/">Back</Link>
        <hr />
        <h1>Login page</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="email" ref="email" />
            <label htmlFor="name">Email</label>
          </div>
          <div className="input-field">
            <input type="text" name="password" ref="password" />
            <label htmlFor="city">password</label>
          </div>
          <input type="submit" className="btn" value="save" />
        </form>
      </div>
    )
  }
}
