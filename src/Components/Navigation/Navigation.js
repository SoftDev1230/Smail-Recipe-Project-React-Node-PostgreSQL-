import React from 'react';
import { Layout, Menu } from 'antd';
import Logo from '../../static/IFDB_Logo.jpg';

const { Header, Content} = Layout;

const Navigation = () => {
  return (
    <Layout className="layout" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
          
        }}
      >
        <div className="Logo" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Menu mode="horizontal" style={{ display: 'flex', justifyContent: 'center' }} defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <a href="/">
                    <img src={Logo} alt="Logo" style={{ height: '40px', weight: '40px'}} />
                    </a>
                </Menu.Item>
            
                <Menu.Item key="2">
                <a href="/Recipe/Edit">Edit Recipe</a>
                </Menu.Item>

                <Menu.Item key="3">
                <a href="/Recipe/Add">Add Recipe</a>
                </Menu.Item>
                
                <Menu.Item key="4">
                <a href="/Recommended">Recommended</a>
                </Menu.Item>

                <Menu.Item key="5">
                <a href="/Search">Search</a>
                </Menu.Item>
            </Menu>
      </div>
      </Header>

      <Content
        style={{
          padding: '0 50px',
        }}
      >

      </Content>
    </Layout>
  );
};
export default Navigation;