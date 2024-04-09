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
import {
  Config,
  formartDateClient,
  formartDateServer,
  isEmptyOrNull,
} from "../config/helper";
import { MdDelete } from "react-icons/md";

const CartPage = () => {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [formCate] = Form.useForm();
  // const [role, setRole] = useState([]);
  const [category, setCategory] = useState([]);
  const [fileSelected, setFileSelected] = useState(null); // past to api
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
  // const onClickEdit = (item) => {
  //   formCate.setFieldsValue({
  //     ...item,
  //     Status: item.Status == null ? "0" : item.Status + "",
  //   });
  //   setFilePreview(Config.image_path + item.Image);
  //   setOpen(true);
  // };
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
    form.append("Id", Id);
    form.append("Name", item.Name);
    form.append("Description", item.Description);
    form.append("Qty", item.Qty);
    form.append("Price", item.Price);
    form.append("Discount", item.Discount);
    form.append("CategoryId", item.CategoryId);
    if (fileSelected != null) {
      form.append("Image", fileSelected);
    }
    var method = Id == null ? "post" : "put";
    var url = Id == null ? "product/create" : "product/update";
    const res = await request(url, method, form);
    if (res) {
      if (res.error) {
        var mgs = "";
        Object.keys(res.message).map((key, index) => {
          mgs += res.message[key];
        });
        message.error(mgs);
        return false;
      }
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
    var filePreview = URL.createObjectURL(file);
    setFileSelected(file);
    setFilePreview(filePreview);
  };
  const onRemoveFileSelected = () => {
    fileRef.current.value = null;
    setFileSelected(null);
    setFilePreview(null);
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
          <div>Product</div>
          <Input.Search placeholder="Search" onSearch={onTextSearch} />
          <Select
            placeholder="Select Category"
            showSearch
            optionFilterProp="label"
            onChange={onSelectRole}
            style={{ width: 120 }}
            allowClear
          >
            {category.map((item, index) => (
              <Select.Option label={item.Name} key={index} value={item.Id}>
                {item.Name}
              </Select.Option>
            ))}
          </Select>
          <Button type="primary" onClick={onCloseModal}>Clear</Button>
        </Space>
      </div>
      <Row gutter={15}>
        <Col span={16}>
          <Table
            dataSource={list}
            columns={[
              {
                key: "Name",
                title: "Name",
                dataIndex: "Name",
                render: (value, item, index) => {
                  return (
                    <div>
                      <div style={{ fontWeight: "bold" }}>
                        {index + 1}. {item.Name}
                      </div>
                      <div>
                        {" "}
                        Fin{" "}
                        <Tag color={item.Qty > 5 ? "green" : "red"}>
                          {item.Qty}
                        </Tag>
                      </div>
                      <div style={{ fontSize: 12, color: "#888" }}>
                        {item.Description}
                      </div>
                    </div>
                  );
                },
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
                      <Image
                        src={Config.image_path + value}
                        alt=""
                        width={60}
                      />
                    );
                  } else {
                    return <div style={{ height: 60, width: 60 }} />;
                  }
                },
              },
              {
                key: "Action",
                title: "Action",
                dataIndex: "Status",
                render: (value, item, index) => (
                  <Space>
                    <Button
                      type="primary"
                      danger
                      onClick={() => onClickDelete(item)}
                    >
                      <MdDelete />
                    </Button>
                  </Space>
                ),
              },
            ]}
          />
        </Col>
        <Col span={8}>
        <Form form={formCate} layout="vertical" onFinish={onFinish}>
        <Form.Item
                label="Customer"
                name={"Customer"}
              >
              <InputNumber placeholder="Customer" style={{width:'100%'}} />
              </Form.Item>
          <Form.Item>
          <Form.Item
                label="Payment Method"
                name={"Payment Method"}
                rules={[
                  {
                    required :true,
                    message: 'Please input Payment Method!',
                  }
                ]}
              >
              <InputNumber placeholder="Payment Method" style={{width:'100%'}} />
              </Form.Item>
          <Form.Item></Form.Item>
            <Space style={{ display: "flex", justifyContent: "right" }}>
              <Button htmlType="submit" type="primary">Checkout</Button>
            </Space>
          </Form.Item>
        </Form>
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
