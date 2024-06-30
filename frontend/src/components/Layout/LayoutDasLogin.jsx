


import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { request } from '../../config/request';
import { setUser } from '../../config/helper';
import '../../components/Layout/LayoutDasLogin.scss';
import imageLogin from '../../assets/imageLogin.png';

const LayoutDasLogin = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { username, password } = values;
    if (username === '' || password === '') {
      alert('Please fill in username or password!');
      return false;
    }
    const data = {
      Username: username,
      Password: password,
    };
    const res = await request('user_admin/login', 'post', data);
    if (res) {
      if (res.error) {
        alert(res.message);
      } else {
        setUser(res.user);
        navigate('/dashboard');
      }
    }
  };

  return (
    <div className='wrapper' style={{ height: '100vh', width: '100%', margin: 'auto', marginTop: -10, backgroundColor: '#eee', padding: 30, border: 10 }}>
      <div className='main-form'>
        <div>
          <img src={imageLogin} style={{ marginTop: 50, marginLeft: 50 }} alt='Login' />
        </div>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{
            // remember: true,
          }}
          onFinish={onFinish}
          style={{ marginTop: 10, marginLeft: 20, borderRadius: '20px' }}
        >
          <h3 className='title-signup'>LOGIN</h3>
          <br></br>
          <Form.Item
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className='login-form-forgot' href='/'>Forgot password</a>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' className='login-form-button'>
              Log in
            </Button>
            {/* Or <Link to='/layoutdaslogin/registerdas'>register now!</Link> */}
            Or <Link to='/registerdas'>register now!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LayoutDasLogin;






// import React from 'react';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { Button, Checkbox, Form, Input, message } from 'antd';
// import { Link, useNavigate } from 'react-router-dom';
// import { request } from '../../config/request';
// import { setUser } from '../../config/helper';
// import '../../components/Layout/LayoutDasLogin.scss';
// import imageLogin from '../../assets/imageLogin.png';

// const LayoutDasLogin = () => {
//   const navigate = useNavigate();

//   const onFinish = async (values) => {
//     const { username, password } = values;
//     if (!username || !password) {
//       message.error('Please fill in both username and password!');
//       return;
//     }
//     const data = { Username: username, Password: password };
//     try {
//       const res = await request('employee/login', 'post', data);
//       if (res.error) {
//         message.error(res.message);
//       } else {
//         setUser(res.user);
//         navigate('/dashboard');
//       }
//     } catch (error) {
//       message.error('Login failed! Please try again.');
//     }
//   };

//   return (
//     <div className='wrapper' style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eee' }}>
//       <div className='main-form' style={{ display: 'flex', background: '#fff', padding: 30, borderRadius: 20, boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
//         <div style={{ flex: 1 }}>
//           <img src={imageLogin} alt='Login' style={{ width: '100%', borderRadius: '20px 0 0 20px' }} />
//         </div>
//         <Form
//           name='normal_login'
//           className='login-form'
//           initialValues={{ remember: true }}
//           onFinish={onFinish}
//           style={{ flex: 1, padding: '20px 40px' }}
//         >
//           <h3 className='title-signup' style={{ textAlign: 'center' }}>LOGIN</h3>
//           <Form.Item
//             name='username'
//             rules={[{ required: true, message: 'Please input your Username!' }]}
//           >
//             <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
//           </Form.Item>
//           <Form.Item
//             name='password'
//             rules={[{ required: true, message: 'Please input your Password!' }]}
//           >
//             <Input
//               prefix={<LockOutlined className='site-form-item-icon' />}
//               type='password'
//               placeholder='Password'
//             />
//           </Form.Item>
//           <Form.Item>
//             <Form.Item name='remember' valuePropName='checked' noStyle>
//               <Checkbox>Remember me</Checkbox>
//             </Form.Item>
//             <a className='login-form-forgot' href='/'>Forgot password</a>
//           </Form.Item>
//           <Form.Item>
//             <Button type='primary' htmlType='submit' className='login-form-button' style={{ width: '100%' }}>
//               Log in
//             </Button>
//             <div style={{ textAlign: 'center' }}>
//               Or <Link to='/registerdas'>register now!</Link>
//             </div>
//           </Form.Item>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default LayoutDasLogin;







