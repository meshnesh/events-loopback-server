import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Events from './Events'
import About from './About'
import Eventdetail from './Eventdetail'
import Addevent from './Addevent'
import Editevent from './Editevent'
import Userpage from './AddUser'
import GetUser from './GetUser'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Events}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/signup' component={Userpage}/>
      <Route exact path='/login' component={GetUser}/>
      <Route exact path='/event/add' component={Addevent}/>
      <Route exact path='/event/edit/:id' component={Editevent}/>
      <Route exact path='/event/:id' component={Eventdetail}/>
    </Switch>
  </main>
)

export default Main;

