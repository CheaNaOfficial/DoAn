import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { request } from '../config/request';
import { setUser } from '../config/helper';
import Cookie from "js-cookie"
import '../Styles/StylePage/LoginPage.scss'
const LoginPage = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    var username = values.username;
    var password = values.password;
    if(username == "" || password == ""){
            alert("Please fill in username or password!")
            return false;
          }
          var data = { 
            "Username" : username, //099998888
            "Password" : password, //"123456"
          }
          const res = await request("user/login","post",data);
          
            if(res){
              Cookie.set("token",res.token)
              if(res.error){ 
                alert(res.message)
              }else{ // Login success
                setUser(res.user)
                navigate("/")
              }
                
            }
  }

  const ClickBtnRegisterPage = () =>{
    navigate("../register")
  }

  return (
    <div className='main-register' style={{paddingTop:'200px',width:'78%',height:'90vh'}}>

    <div className="login-form"  style={{width:400,margin:"auto",marginTop:15,background:"rgba(255, 255, 255, 0.02)",padding:30,border:10,borderRadius:20}}>
      <Form
      name="normal_login"
      initialValues={{
        // remember: true,
      }}
      onFinish={onFinish}
      style={{marginTop:'-10px'}}
    >

      <h1 style={{textAlign:'center',marginTop:'-10px',color:'white'}}>LOGIN</h1>

      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon"  style={{color:'white'}}/>} placeholder="Username" style={{marginTop:'25px',background:'none',borderColor:'1.5px solid white'}} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" style={{color:'white'}} />}
          type="password"
          placeholder="Password"
          style={{marginTop:'25px',borderColor:'1.5px solid white',background:'none'}}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox style={{color:'white'}}>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">Forgot password</a>
      </Form.Item>

      <Form.Item>
        <Button style={{backgroundColor:'white'}} htmlType="submit" className="login-form-button">
          Log in
        </Button>
         <a onClick={ClickBtnRegisterPage} style={{color:'white',marginLeft:'20px'}}>register now!</a>
      </Form.Item>
      </Form>
    </div>
    </div>
  );
};
export default LoginPage;










