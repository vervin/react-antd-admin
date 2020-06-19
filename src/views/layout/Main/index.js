import React, { Component } from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { connect } from "react-redux";
import { toggleSiderBar } from "@/store/actions";
const { Header, Content } = Layout;


class Main extends React.Component {
  

  

  render() {

    const { sidebarCollapsed, toggleSiderBar} = this.props
    return (
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(sidebarCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggleSiderBar,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
          </Content>
      </Layout>

    );
  }
}


export default connect((state) => state.app, { toggleSiderBar })(Main)