import React, { useEffect, useState,useRef } from "react";
import { request } from "../config/request";
import {
  Button,
  Input,
  Modal,
  Space,
  Table,
  Form,
  Select,
  Flex,
  message,
  Tag,
  DatePicker,
} from "antd";
import { formartDateClient } from "../config/helper";
import dayjs from "dayjs";

const CategoryDas = () => {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);

  const [formCate] = Form.useForm();

  useEffect(() => {
    formCate.setFieldsValue({
      Status: "1",
    });
    getList();
  }, []);

  const filterRef = useRef({ 
    txt_search : null,
    status : null
  })


  const getList = async () => {

    var param = {
      txt_search :filterRef.current.txt_search,
      status : filterRef.current.status,
    }
    const res = await request("category/getlist", "get",param);
    if (res) {
      setList(res.list);
    }
    console.log(res);
  };
  const onClickEdit = (item) => {
    formCate.setFieldsValue({
      // input data in form
      Id: item.Id,
      Name: item.Name,
      Description: item.Description,
      Status: item.Status + "",
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
        const res = await request("category/delete", "delete", data);
        if (res) {
          message.success(res.message)
          getList();
        }
      }
    });
  };
  const onFinish = async (item) => {
    var Id = formCate.getFieldValue("Id");
    // new
    var data = {
      Id : Id,
      Name: item.Name,
      Description: item.Description,
      Status: item.Status,
    };
    var method = (Id == null ? "post" : "put")
    var url = (Id == null ? "category/create" : "category/update")
    const res = await request(url,method,data);
    if (res) {
      message.success(res.message);
      getList();
      onCloseModal();
    }

    // if (Id == null) {
    //   // insert new
    //   var data = {
    //     Name: item.Name,
    //     Description: item.Description,
    //     Status: item.Status,
    //   };
    //   const res = await request("category/create", "post", data);
    //   if (res) {
    //     message.success(res.message);
    //     getList();
    //     onCloseModal();
    //   }
    // } else {
    //   // block update
    //   var data = {
    //     Id: Id,
    //     Name: item.Name,
    //     Description: item.Description,
    //     Status: item.Status,
    //   };
    //   const res = await request("category/update", "put", data);
    //   if (res) {
    //     message.success(res.message);
    //     getList();
    //     onCloseModal();
    //   }
    // }
  };
  const onTextSearch = (value) =>{
    filterRef.current.txt_search = value // set value to ref key txt_search
    getList();
  }
  const onChangeStatus = (value) =>{
    filterRef.current.status = value
    // alert(value)
  }
  const onCloseModal = () => {
    formCate.resetFields(); // clear for history
    formCate.setFieldsValue({
      Status: "1",
    });
    setOpen(false);
  }
  
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between",paddingBottom:10 }}>
        <Space>
          <div>List Category</div>
          <Input.Search placeholder="Search" onSearch={onTextSearch} />
          <Select placeholder="Status" allowClear style={{width:120}} onChange={onChangeStatus}>
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
        style={{tableLayout:'fixed'}}
        dataSource={list}
        columns={[
          {
            key: "N0",
            title: "N0",
            dataIndex: "",
            render: (value, item, index) => index + 1,
          },
          {
            key: "Name",
            title: "Name",
            dataIndex: "Name",
            render: (value, item, index) => value,
          },
          {
            key: "Description",
            title: "Description",
            dataIndex: "Description",
          },
          {
            key: "Status",
            title: "Status",
            dataIndex: "Status",
            render:(value,item,index)=>(value==1 ? <Tag color="green">Actived</Tag>:<Tag color="red">InActived</Tag> )
          },
          {
            key: "Create At",
            title: "Create At",
            dataIndex: "CreateAt",
            render: (value) => formartDateClient(value)
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
          formCate.getFieldValue("Id") == null
            ? "New Category"
            : "Update Category"
        }
        open={open}
        onCancel={onCloseModal}
        // okText="Save"
        footer={null}
      >
        <Form
          form={formCate}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item 
            label="Name"
            name={"Name"}
            rules={[
              {
                required : true,
                message : "Please fill in category name"
              }
            ]}
          >
            <Input placeholder="Category name" />
          </Form.Item>
          <Form.Item label="Description" name={"Description"}>
            <Input placeholder="Description" />
          </Form.Item>
          <Form.Item label="Status" name={"Status"}>
            <Select>
              <Select.Option value="1">Actived</Select.Option>
              <Select.Option value="0">InActived</Select.Option>
            </Select>
          </Form.Item>
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

export default CategoryDas;


