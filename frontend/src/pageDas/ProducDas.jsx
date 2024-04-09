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
  Row,
  Col,
  InputNumber,
  Image,
} from "antd";
import { TiDeleteOutline } from "react-icons/ti";
import { Config, formartDateClient, formartDateServer,isEmptyOrNull} from "../config/helper";


const ProductDas = () => {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [formCate] = Form.useForm();
  // const [role, setRole] = useState([]);
  const [category, setCategory] = useState([]);
  const [fileSelected,setFileSelected] = useState(null) // past to api
  const [filePreview, setFilePreview] = useState(null); // preview in client


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
  const fileRef = useRef(null);

  const getList = async () => {
    var param = {
      txt_search: filterRef.current.txt_search,
      status: filterRef.current.status,
      // role_id : filterRef.current.role_id,
    };
    const res = await request("product/getlist", "get", param);
    if (res) {
      setList(res.list);
      // setRole(res.role)
      setCategory(res.category);
    }
  };
  const onClickEdit = (item) => {
    formCate.setFieldsValue({
      ...item,
      Status: item.Status == null ? "0" : item.Status+"",

    })
    setFilePreview(Config.image_path+item.Image)
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
        const res = await request("product/delete", "delete", data);
        if (res) {
          message.success(res.message);
          getList();
        }
      },
    });
  };
  const onFinish = async (item) => {
    var Id = formCate.getFieldValue("Id");
    var form = new FormData();
    form.append("Id",Id);
    form.append("Name",item.Name);
    form.append("Description",item.Description);
    form.append("Qty",item.Qty);
    form.append("Price",item.Price);
    form.append("Discount",item.Discount);
    form.append("CategoryId",item.CategoryId);
    if(fileSelected != null){
      form.append("Image",fileSelected);
    }
    var method = Id == null ? "post" : "put";
    var url = Id == null ? "product/create" : "product/update";
    const res = await request(url, method, form);
    if (res) {
      if(res.error){
        var mgs = ""
        Object.keys(res.message).map((key,index)=>{
          mgs += res.message[key]
        })
        message.error(mgs)
        return false
      }
      message.success(res.message)
      getList();
      onCloseModal();
    }
  };
  const onTextSearch = (value) => {
    filterRef.current.txt_search = value; // set value to ref key txt_search
    getList();
  };
  const onChangeStatus = (value) => {
    filterRef.current.value = value;
    // alert(value)
  };
  const onCloseModal = () => {
    formCate.resetFields(); // clear for history
    formCate.setFieldsValue({
      Status: "1",
    });
    setOpen(false);
    onRemoveFileSelected();
  };

  const onSelectRole = (value) => {
    filterRef.current.role_id = value;
    getList();
  };
  const onChangeFile = (e) => {
    var file = e.target.files[0]; 
    var filePreview = URL.createObjectURL(file)
    setFileSelected(file);
    setFilePreview(filePreview);
  }
  const onRemoveFileSelected = () =>{
    fileRef.current.value = null;
    setFileSelected(null)
    setFilePreview(null)
  }

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
          <div>Product</div>
          <Input.Search placeholder="Search" onSearch={onTextSearch} />
          <Select placeholder="Select Category" showSearch optionFilterProp="label" onChange={onSelectRole} style={{width:120}} allowClear>
            {category.map((item, index) => (
              <Select.Option label={item.Name} key={index} value={item.Id}>
                {item.Name}
              </Select.Option>
            ))}
          </Select>
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
            dataIndex: "Name",
            render: (value, item, index) => index + 1,
          },
          {
            key: "Name",
            title: "Name",
            dataIndex: "Name",
          },
          {
            key: "Description",
            title: "Description",
            dataIndex: "Description",
            render: (value, item, index) => value,
          },
          {
            key: "Qty",
            title: "Qty",
            dataIndex: "Qty",
          },
          {
            key: "Price",
            title: "Price",
            dataIndex: "Price",
          },
          {
            key: "Discount",
            title: "Discount",
            dataIndex: "Discount",
          },
          {
            key: "Image",
            title: "Image",
            dataIndex: "Image",
            render: (value) => {
              if (value != null && value != "") {
                return (
                  <Image src={Config.image_path + value} alt="" width={60} />
                );
              } else {
                return <div style={{ height: 60, width: 60 }} />;
              }
            },
          },
          {
            key: "Status",
            title: "Status",
            dataIndex: "Status",
            render: (value, item, index) =>
              value == 1 ? (
                <Tag color="green">Actived</Tag>
              ) : (
                <Tag color="red">InActived</Tag>
              ),
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
          formCate.getFieldValue("Id") == null
            ? "New employee"
            : "Update employee"
        }
        open={open}
        onCancel={onCloseModal}
        footer={null}
        maskClosable={false} // click ben ngoai modal khong close
      >
        <Form form={formCate} layout="vertical" onFinish={onFinish}>
          <Row gutter={5}>
            <Col span={12}>
              <Form.Item
                label="Name"
                name={"Name"}
                rules={[
                  {
                    required: true,
                    message: "Please fill in product Name",
                  },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Description"
                name={"Description"}
                rules={[
                  {
                    required: true,
                    message: "Please fill in product Description",
                  },
                ]}
              >
                <Input placeholder="Description" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={5}>
            <Col span={12}>
              <Form.Item
                label="Qty"
                name={"Qty"}
                rules={[
                  {
                    required: true,
                    message: "Please fill in product Qty",
                  },
                ]}
              >
              <InputNumber placeholder="Qty" style={{width:'100%'}} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Price"
                name={"Price"}
                rules={[
                  {
                    required: true,
                    message: "Please fill in product Price",
                  },
                ]}
              >
                <InputNumber placeholder="Price" style={{width:'100%'}} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={5}>
            <Col span={12}>
              <Form.Item
                label="Discount"
                name={"Discount"}
                rules={[
                  {
                    required: true,
                    message: "Please fill in employee Discount",
                  },
                ]}
              >
                <Input placeholder="Discount" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Status" name={"Status"}>
                <Select>
                  <Select.Option value="1">Actived</Select.Option>
                  <Select.Option value="0">InActived</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={5}>
            <Col span={12}>
              <Form.Item
                label="Category"
                name={"CategoryId"}
                rules={[
                  {
                    required: true,
                    message: "Please select Category",
                  },
                ]}
              >
                <Select
                  placeholder="Select Category"
                  showSearch
                  optionFilterProp="label"
                >
                  {category.map((item, index) => (
                    <Select.Option label={item.Name} key={index} value={item.Id}>{item.Name}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Upload Image"
              >
              <div style={{width:80,position:'relative',top:1}}>
                {!isEmptyOrNull(filePreview) && <TiDeleteOutline  onClick={onRemoveFileSelected} style={{color:'red',position:'absolute',top:-12,right:-17,fontSize:22}} />}
                    {!isEmptyOrNull(filePreview) ?
                        <img
                          src={filePreview}
                          width={80}
                          alt=""
                        />
                        :
                        <div style={{width:80,height:80,backgroundColor:'#EEE'}}></div>
                    }
                </div>
                    <Input
                      ref={fileRef}
                      type="file"
                      onChange={onChangeFile}
                      style={{top:10}}
                    />
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

export default ProductDas;
