import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Eventitem extends Component{
  constructor(props){
    super(props);
    this.state = {
      item: props.item
    }
  }

  render(){
    return(
      <div className="col s6">
        <Link to={`/event/${this.state.item.id}`}>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">
                {this.state.item.title}
              </span>
              <p>
              {this.state.item.description}
              </p>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
