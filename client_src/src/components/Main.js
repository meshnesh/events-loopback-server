import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Events from './Events'
import About from './About'
import Eventdetail from './Eventdetail'
import Addevent from './Addevent'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Events}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/event/add' component={Addevent}/>
      <Route exact path='/event/:id' component={Eventdetail}/>
    </Switch>
  </main>
)

export default Main;

