

// import React from 'react'
// import { Outlet } from 'react-router-dom';

// const LayoutDas = () => {
//   return (
//     <div>
//       <div style={{backgroundColor:'blue',height:'80px'}}>
//         <h1>MainLayoutLogin login / register</h1>
//       </div>
//       <Outlet />
//     </div>
//   )
// }

// export default LayoutDas;



import React, { useEffect, useState} from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Flex, Layout, Menu, theme } from 'antd';
import { Outlet,useNavigate } from 'react-router-dom';
import { getUser, isLogin, logout } from '../../config/helper';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Dashboard', 'chartdas', <PieChartOutlined />),
  getItem('Customer', 'customerdas', <DesktopOutlined />),
  getItem('Employee', 'employee', <TeamOutlined />),
  getItem('User', 'userdas', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('System', 'system', <UserOutlined />, [
    getItem('Order Status', 'order-status'),
    getItem('Payment method', 'payment-method'),
    getItem('Role', 'role'),
  ]),
  getItem('Category', 'categorydas', <TeamOutlined />),
  getItem('Product', 'productdas', <TeamOutlined />), // [getItem('Team 1', '6'), getItem('Team 2', '8')]),
   // [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '7', <FileOutlined />),
  getItem('Logout', 'logoutdas', <PieChartOutlined />)
];
const LayoutDas = () => {
  const user = getUser();
  const navigate = useNavigate();
  useEffect(()=>{
    if(!isLogin()){
      navigate("/login")
    }
  },[])



  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  const onClickMenu = (event) =>{
    if(event.key == "logoutdas"){
      logout();
      return;
    }
    navigate(event.key)
  }

  if(!user){
    return null;
  }
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={onClickMenu} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
        <div style={{display:'flex',justifyContent:'space-between',padding:5}}>
          <div style={{display:'flex'}}>
            <dvi style={{height:40,width:40,backgroundColor:"#888"}}></dvi>
            <div>Brand Name</div>
          </div>
          <div style={{display:'flex'}}>
            <div>{user?.Firstname}-{user?.Lastname}</div>
            <dvi style={{height:40,width:40,backgroundColor:"#888",borderRadius:20}}></dvi>
          </div>
         
        </div>
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutDas;
