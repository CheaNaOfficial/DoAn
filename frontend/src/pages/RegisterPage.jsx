
import React, { useEffect, useState, useRef } from "react";
import { request } from "../config/request";
import {
  Button,
  Input,
  Modal,
  Space,
  Table,
  Form,
  Select,
  message,
  Tag,
  DatePicker,
  Row,
  Col,
  InputNumber,
} from "antd";
import { formartDateClient, formartDateServer } from "../config/helper";
import '../../src/Styles/StylePage/RegisterPage.scss'
import dayjs from "dayjs";

const Employee = () => {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [formCate] = Form.useForm();
  const [role, setRole] = useState([]);


  useEffect(() => {
    formCate.setFieldsValue({
      Status: "1",
    });
    getList();
  }, []);

  const filterRef = useRef({
    txt_search: null,
    status: null,
    // role_id : null
  });

  const getList = async () => {
    var param = {
      txt_search: filterRef.current.txt_search,
      status: filterRef.current.status,
      // role_id : filterRef.current.role_id,
    };
    const res = await request("user/getlist", "get", param);
    if (res) {
      setList(res.list);
      setRole(res.role)
    }
    console.log(res);
  };
  const onClickEdit = (item) => {
    formCate.setFieldsValue({
      ...item,
      Dob:dayjs(item.Dob),
      Gender :item.Gender+"",
      Status:item.Status,
      role:item.role
    
    });
    setOpen(true);
  };
  const onFinish = async (item) => {

    var Id = formCate.getFieldValue("Id")
    var data = {
        ...item,
        Id:Id,
        Dob:formartDateServer(item.Dob),
        
    };
    var method = Id == null ? "post" : "put";
    var url = Id == null ? "user/create" : "user/update";
    const res = await request(url, method, data);
    if (res) {
      message.success(res.message);
      getList();
      onCloseModal();
    }
  };
  const onChangeStatus = (value) => {
    filterRef.current.status = value;
  };
  const onCloseModal = () => {
    formCate.resetFields(); // clear for history
    formCate.setFieldsValue({
      Status: "1",
    });
    setOpen(false);
  };

  return (
    <div className="main-register" style={{paddingTop:'190px'}}>
        <div
          style={{
          width: 500,
          margin: "auto",
          marginTop: 10,
          backgroundColor: "#eee",
          padding: 30,
          border: 10,
          borderRadius:20
        }}
        >
        <h1 style={{ textAlign: "center", marginTop: "-10px"}}>Register</h1>
        <Form form={formCate} layout="vertical" onFinish={onFinish} open={open}>
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
                  style={{width:'100%'}}
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
          {/* <Row gutter={5}>
            <Col span={12}>
              <Form.Item label="Status" name={"Status"}>
                <Select>
                  <Select.Option value="1">Actived</Select.Option>
                  <Select.Option value="0">InActived</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Salary"
                name={"Salary"}
                rules={[
                  {
                    required: true,
                    message: "Please fill in employee Salary",
                  },
                ]}
              >
                <InputNumber placeholder="Salary" style={{width:'100%'}}/>
              </Form.Item>
            </Col>
          </Row> */}
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
            {/* <Col span={12}>
              <Form.Item 
                label="RoleId"
                name={"RoleId"}
                rules={[
                  {
                    required: true,
                    message: "Please select role",
                  },
                ]}
              >
                <Select placeholder="Select role"
                  showSearch
                  optionFilterProp="label"
                  >
                  {role.map((item,index)=>(
                    <Select.Option label={item.Name} key={index} value={item.Id}>{item.Name}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col> */}
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
          </Row>
         
          <Form.Item>
            <Space style={{ display: "flex", justifyContent: "center" }}>
              {/* <Button onClick={onCloseModal}>Cancel</Button> */}
              {/* <Button htmlType="submit" type="primary">
                {formCate.getFieldValue("Id") == null ? "Register" : "Update"}
              </Button> */}

              <Button htmlType="submit" type="primary"> {formCate.getFieldValue("Id") !== null}Register</Button>
            </Space>
          </Form.Item>
        </Form>
      {/* </Modal> */}
      </div>
    </div>
  );
};

export default Employee;
