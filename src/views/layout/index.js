import React, { Component } from 'react';

import { Layout } from "antd";
import SiderBar from "./Sider";
import "./index.css"
import Main from './Main';
// const Context = React.createContext();
// const Provider = Context.Provider;
// const Consumer = Context.Consumer;
export default class LayOut extends Component {

  // state = {
  //   collapsed: false,
  // };

  render() {
    return (
      // <Provider value={{ collapsed: this.state.collapsed, toggle: this.toggle}}>
      <Layout style={{ minHeight: '100vh' }}>
        <SiderBar></SiderBar>
        <Main></Main>
        {/* <Consumer> */}
        {/* {value => <SiderBar {...value}/>} */}
        {/* </Consumer> */}
        {/* <Consumer> */}
        {/* {value => <Main {...value} />} */}
        {/* </Consumer> */}
      </Layout>
      // </Provider>
    )
  }
  // toggle = () => {

  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });

  // };
}