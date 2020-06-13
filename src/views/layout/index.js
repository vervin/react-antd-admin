import React, { Component } from 'react';

import { Layout } from "antd";
import SiderBar from "./Sider";
import "./index.css"
import Main from './Main';

export default function () {
  return (
    <div>

      <Layout style={{ minHeight: '100vh' }}>
        <SiderBar></SiderBar>
        <Main></Main>
      </Layout>
    </div>
  )
}