import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="blue darken-4">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">EventZ</a>
            <a data-activates="main-menu" className="button-collapse show-on-large">
              <i className="fa fa-bars fa-2x"></i>
            </a>
            <ul className="right hide-on-small-only">
              <li>
                <Link to="/">
                  <i className="fa fa-users"></i> Events
                </Link>
              </li>
            </ul>
            <ul className="side-nav" id="main-menu">
              <li>
                <Link to="/">
                  <i className="fa fa-users fa-2x"></i> Events
                </Link>
              </li>
              <li>
                <Link to="/event/add">
                  <i className="fa fa-plus fa-2x"></i> Add Event
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="fa fa-question-circle fa-2x"></i> About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
