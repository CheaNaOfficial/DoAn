import React, { useEffect, useState, useRef } from "react";
import { request } from "../config/request";
import { Button, Input, Space, Form, Select, message, DatePicker, Row, Col } from "antd";
import dayjs from "dayjs";
// import '../../src/Styles/StylePage/RegisterPage.scss';
import '../../src/Styles/StyleDas/RegisterDas.scss'
import register from '../assets/register.png'
import bg01 from '../assets/bg01.jpg'

const RegisterDas = () => {
  const [formCate] = Form.useForm();
  const [role, setRole] = useState([]);

  useEffect(() => {
    formCate.setFieldsValue({
      Status: "1",
    });
  }, []);

  const onFinish = async (item) => {
    var Id = formCate.getFieldValue("Id");
    var data = {
        ...item,
        Id: Id,
        Dob: dayjs(item.Dob).format("YYYY-MM-DD"),
    };
    var method = Id == null ? "post" : "put";
    var url = Id == null ? "user_admin/create" : "user_admin/update";
    const res = await request(url, method, data);
    if (res) {
      message.success(res.message);
    }
  };

  return (
    <div className="main-bg">
      <div style={{ 
        paddingTop: '190px',
        background:'#fff',
        display:'flex',
        width:'40%',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:50,
        borderRadius:20,
        marginTop:10
      
      }}>
      <div style={{marginTop:'100'}}><img src={register} /></div>
        <div
          style={{
            width: 500,
            margin: "auto",
            marginTop: -190,
            backgroundColor: "#fff",
            padding: 30,
            border: 10,
            borderRadius: 20,
            marginLeft:-20,
            height:'70vh',
            
          }}
        >
          <h1 style={{ textAlign: "center", marginTop: "-10px" }}>Register</h1>
          <Form form={formCate} layout="vertical" onFinish={onFinish}>
            <Row gutter={5}>
              <Col span={12}>
                <Form.Item
                  label="Firstname"
                  name={"Firstname"}
                  rules={[
                    {
                      required: true,
                      message: "Please fill in employee firstname",
                    },
                  ]}
                >
                  <Input placeholder="firstname" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Lastname"
                  name={"Lastname"}
                  rules={[
                    {
                      required: true,
                      message: "Please fill in employee Lastname",
                    },
                  ]}
                >
                  <Input placeholder="Lastname" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={5}>
              <Col span={12}>
                <Form.Item
                  label="Gender"
                  name={"Gender"}
                  rules={[
                    {
                      required: true,
                      message: "Please fill in employee Gender",
                    },
                  ]}
                >
                  <Select placeholder="Select Gender">
                    <Select.Option value="1">Male</Select.Option>
                    <Select.Option value="0">Female</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Dob"
                  name={"Dob"}
                  rules={[
                    {
                      required: true,
                      message: "Please fill in employee Dob",
                    },
                  ]}
                >
                  <DatePicker
                    style={{ width: '100%' }}
                    format={"DD/MM/YYYY"}
                    placeholder="DD/MM/YYYY"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={5}>
              <Col span={12}>
                <Form.Item
                  label="Tel"
                  name={"Tel"}
                  rules={[
                    {
                      required: true,
                      message: "Please fill in employee Tel",
                    },
                  ]}
                >
                  <Input placeholder="Tel" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Email"
                  name={"Email"}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={5}>
              <Col span={12}>
                <Form.Item
                  label="Password"
                  name={"Password"}
                  rules={[
                    {
                      required: true,
                      message: "Please fill in employee Password",
                    },
                  ]}
                >
                  <Input placeholder="Password" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Address"
                  name={"Address"}
                  rules={[
                    {
                      required: true,
                      message: "Please fill in employee Address",
                    },
                  ]}
                >
                  <Input placeholder="Address" />
                </Form.Item>
              </Col>
            </Row><br></br>
            <Form.Item>
              <Space style={{ display: "flex", justifyContent: "center" }}>
                <Button htmlType="submit" type="primary">Register</Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterDas;
