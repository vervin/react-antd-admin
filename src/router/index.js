import React, { Component} from 'react';

import { HashRouter, Route, Redirect,Switch } from 'react-router-dom'

import LayoutPage from '../views/layout'
import Login from '../views/login'


class Router extends Component {
render () {
  return (
    <HashRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' exact component={LayoutPage}></Route>



        {/* render={() => {
          if (!token) {
            return <Redirect to="/login" />
          } else {
            if (role) {
              return <Layout />
            } else {
              getUserInfo(token).then(() => <Layout />)
            }
          }
        }} */}
      </Switch>
    </HashRouter>
  )
}
}

export default Router