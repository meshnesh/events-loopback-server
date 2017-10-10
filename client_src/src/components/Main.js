import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Events from './Events'
import About from './About'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Events}/>
      <Route exact path='/about' component={About}/>
    </Switch>
  </main>
)

export default Main;

