import React from 'react';
import { Layout, theme } from 'antd';
import { NavBar, SideBar } from '../components';

const { Header, Content, Footer, Sider } = Layout;


export const JournalLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          background: colorBgContainer
        }}
      >
        <div className="demo-logo-vertical" />
        <SideBar></SideBar>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
          marginRight: 10,
        }}
      >
        <Header style={{ background: colorBgContainer }}>
          <NavBar></NavBar>
        </Header>
        <Content>
          { children }
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Footer dummy content
        </Footer>
      </Layout>
    </Layout>
  );
};