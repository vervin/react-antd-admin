import React, { Component } from 'react';

import { Layout, Menu } from 'antd';
import {

  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import { connect } from "react-redux";

const { Sider } = Layout;

class SiderBar extends React.Component {
  render() {
    const { sidebarCollapsed } = this.props

    return (
      <Sider trigger={null} collapsible collapsed={sidebarCollapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        
    );
  }
}

export default connect((state) => state.app)(SiderBar)

