import React from 'react';
import logo from './logo.svg';
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import Router from "./router";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
