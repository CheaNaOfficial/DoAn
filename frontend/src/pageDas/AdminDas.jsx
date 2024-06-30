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
import dayjs from "dayjs";

const UserDas = () => {
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
    const res = await request("user_admin/getlist", "get", param);
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
  const onClickDelete = async (item) => {
    Modal.confirm({
      title: "Delete",
      content: "Are you sure you want to delete ?",
      okText: "Yes",
      cancelText: "No",
      okType: "danger",
      centered: true,
      onOk: async () => {
        var data = {
          Id: item.Id,
        };
        const res = await request("uuser_admin/delete", "delete", data);
        if (res) {
          message.success(res.message);
          getList();
        }
      },
    });
  };
  const onFinish = async (item) => {

    var Id = formCate.getFieldValue("Id")
    var data = {
        ...item,
        Id:Id,
        Dob:formartDateServer(item.Dob),
        
    };
    var method = Id == null ? "post" : "put";
    var url = Id == null ? "user_admin/create" : "user_admin/update";
    const res = await request(url, method, data);
    if (res) {
      message.success(res.message);
      getList();
      onCloseModal();
    }
  };
  const onTextSearch = (value) => {
    filterRef.current.txt_search = value; // set value to ref key txt_search
    getList();
  };
  const onChangeStatus = (value) => {
    filterRef.current.status = value;
    // alert(value)
  };
  const onCloseModal = () => {
    formCate.resetFields(); // clear for history
    formCate.setFieldsValue({
      Status: "1",
    });
    setOpen(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: 10,
        }}
      >
        <Space>
          <div>Employee</div>
          <Input.Search placeholder="Search" onSearch={onTextSearch} />
          <Select
            placeholder="Status"
            allowClear
            style={{ width: 120 }}
            onChange={onChangeStatus}
          >
            <Select.Option value={"1"}>Active</Select.Option>
            <Select.Option value={"0"}>InActive</Select.Option>
          </Select>
          <DatePicker />
        </Space>

        <Button
          type="primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          New
        </Button>
      </div>
      <Table
        dataSource={list}
        columns={[
          {
            key: "N0",
            title: "N0",
            dataIndex: "",
            render: (value, item, index) => index + 1,
          },
          {
            key: "Lastname",
            title: "Lastname",
            dataIndex: "Lastname",
          },
          {
            key: "Firstname",
            title: "Firstname",
            dataIndex: "Firstname",
            render: (value, item, index) => value,
          },
          {
            key: "Gender",
            title: "Gender",
            dataIndex: "Gender",
            render:(value)=> value == 1 ? "Male" : "Female" 
            // render: (value, item, index) =>
            //   value == 1 ? (<Tag color="green">Actived</Tag>) : (<Tag color="red">InActived</Tag>),
          },
          {
            key: "Dob",
            title: "Dob",
            dataIndex: "Dob",
          },
          {
            key: "Tel",
            title: "Tel",
            dataIndex: "Tel",
          },
          {
            key: "Address",
            title: "Address",
            dataIndex: "Address",
          },
          {
            key: "Status",
            title: "Status",
            dataIndex: "Status",
            render: (value, item, index) => value == 1 ? (<Tag color="green">Actived</Tag>) : (<Tag color="red">InActived</Tag>),
          },
          {
            key: "Create At",
            title: "Create At",
            dataIndex: "CreateAt",
            render: (value) => formartDateClient(value),
          },
          {
            key: "Action",
            title: "Action",
            dataIndex: "Status",
            render: (value, item, index) => (
              <Space>
                <Button type="primary" onClick={() => onClickEdit(item)}>
                  Edit
                </Button>
                <Button
                  type="primary"
                  danger
                  onClick={() => onClickDelete(item)}
                >
                  Delete
                </Button>
              </Space>
            ),
          },
        ]}
      />

      <Modal
        title={
          formCate.getFieldValue("Id") == null ? "New user" : "Update user"}
          open={open}
          onCancel={onCloseModal}
          footer={null}
          maskClosable={false} // click ben ngoai modal khong close
      >
        <Form form={formCate} layout="vertical" onFinish={onFinish}>
          <Row gutter={5}>
            <Col span={12}>
              <Form.Item
                label="Firstname"
                name={"Firstname"}
                rules={[
                  {
                    required: true,
                    message: "Please fill in user firstname",
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
                    message: "Please fill in user Lastname",
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
                    message: "Please fill in user Gender",
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
                    message: "Please fill in user Dob",
                  },
                ]}
              >
                <DatePicker
                  style={{width:'100%'}}
                  format={"DD/MM/YYYY"}
                  placeholder="Dob"
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
                    message: "Please fill in user Tel",
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
              <Form.Item label="Status" name={"Status"}>
                <Select>
                  <Select.Option value="1">Actived</Select.Option>
                  <Select.Option value="0">InActived</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Address"
                name={"Address"}
                rules={[
                  {
                    required: true,
                    message: "Please fill in user Address",
                  },
                ]}
              >
                <Input placeholder="Address" />
              </Form.Item>
            </Col>
          </Row>


          <Form.Item>
            <Space style={{ display: "flex", justifyContent: "right" }}>
              <Button onClick={onCloseModal}>Cancel</Button>
              <Button htmlType="submit" type="primary">
                {formCate.getFieldValue("Id") == null ? "Save" : "Update"}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserDas;



