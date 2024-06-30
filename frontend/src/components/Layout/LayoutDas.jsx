
import React, { useEffect, useState} from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Flex, Layout, Menu, theme } from 'antd';
import { Outlet,useNavigate } from 'react-router-dom';
import { getUser, isLogin, logout } from '../../config/helper';
import logokshop from "../../assets/logokshop.png";
import na1 from "../../assets/na1.png";
import { FaLaptopCode } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { RiAdminLine } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa6";
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
  getItem('Category', 'categorydas', <TeamOutlined />),
  getItem('Product', 'productdas', <FaLaptopCode />),
  getItem('Role', 'role', <FiMonitor />),
  getItem('User', 'user', <FaUserGroup />),
  getItem('Admin', 'admin', <RiAdminLine />),
  getItem('Order', 'order', <FaCartPlus />),
  getItem('Logout', 'logoutdas', <RiLogoutCircleLine />)
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
            <dvi style={{height:40,width:40,backgroundColor:"#888"}}><img src={logokshop} alt="some example image" /></dvi>
            {/* <div><img src={logokshop} alt="some example image" /></div> */}
          </div>
          <div style={{display:'flex'}}>
            <div style={{marginLeft:'-100px'}}>{user?.Firstname}-{user?.Lastname}</div>
            <dvi><img src={na1} style={{width:40,height:40,borderRadius:20}} /></dvi>
            
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
          Design By Chea Na {new Date().getFullYear()} © 2024
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutDas;
