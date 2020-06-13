import React, { Component } from 'react';

import { HashRouter, Route, Link, Redirect, Switch } from 'react-router-dom'


export default function () {
  return (
    <div>
      login
      <ul>
        <li>
          <Link to="/login/home">Home</Link>
        </li>
        <li>
          <Link to="/login/about">About</Link>
        </li>
        <li>
          <Link to="/login/dashboard">Dashboard</Link>
        </li>
      </ul>


      

      <Switch>
        <Route exact path="/login/home">
          <Home />
        </Route>
        <Route path="/login/about">
          <About />
        </Route>
        <Route path="/login/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}