import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import NavBar from './components/NavBar';

const App = () => (
  <div>
    <NavBar />
    <div className="container">
      <Main />
    </div>
    <div className="fixed-action-btn">
      <Link to="/event/add" className="btn-floating btn-large red waves-effect waves-light">
        <i className="fa fa-plus fa-3x"></i>
      </Link>
    </div>
  </div>
)

export default App;
