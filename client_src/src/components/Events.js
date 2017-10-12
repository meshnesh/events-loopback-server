import React, { Component } from 'react';
import axios from 'axios';
import Eventitem from './Eventitem';

export default class Events extends Component {
  constructor(){
    super();
    this.state = {
      events:[]
    }
  }

  componentWillMount(){
    this.getEvents();
  }


  getEvents(){
    axios.get('http://localhost:3000/api/event_apps')
      .then(response => {
        this.setState({events: response.data}, () => {
          console.log(this.state);
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    const eventItem = this.state.events.map((event, i) => {
      return(
        <Eventitem key={event.id} item={ event }/>
      )
    })
    return (
      <div>
        <h1>
          Events
        </h1>
        <ul className="collection">
          {eventItem}
        </ul>
      </div>
    )
  }
}
