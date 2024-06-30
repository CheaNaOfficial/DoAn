


import React, { useEffect, useState } from "react";
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
import { MdDelete } from "react-icons/md";
import { Config } from "../config/helper";
import { useCart } from "../Context/CartContext";

const CartPage = () => {
  const [list, setList] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await request("cart/getlist", "get");

    if (res) {
      setList(res);
      setCategory(res.category);
    }
  };

  const onClickDelete = async (item) => {
    Modal.confirm({
      title: "Delete",
      content: "Are you sure you want to delete?",
      okText: "Yes",
      cancelText: "No",
      okType: "danger",
      centered: true,
      onOk: async () => {
        const res = await request("cart/delete", "delete", {cart_id: item.cart_id});
        if (res) {
          message.success(res.message);
          getList();
        }
      },
    });
  };

  const onFinish = async (values) => {
    // Logic for checkout
  };
  const { addToCart } = useCart();
  return (
    <div style={{ marginLeft: 190, width: "78%",paddingTop:'200px' }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: 10,
          paddingTop: 20,
        }}
      >
        {/* <Space>
          <div>Product</div>
          <Input.Search placeholder="Search" />
          <Button type="primary">Clear</Button>
        </Space> */}
      </div>
      <Row gutter={15}>
        <Col span={16}>
          <Table
            dataSource={list}
            columns={[
              {
                key: "Name",
                title: "Name",
                // dataIndex: "product.Name",
                dataIndex: ["product", "Name"],
                render: (value, item, index) => (
                  <div>
                    <div style={{ fontWeight: "bold" }}>
                      {index + 1}. {value}
                    </div>
                    <div>Fin{" "}<Tag color={item.product.Qty > 3 ? "green" : "red"}>{item.quantity}</Tag>
                    </div>
                    <div style={{ fontSize: 12, color: "#888" }}>
                      {item.product.Description}
                    </div>
                  </div>
                ),
              },
              {
                key: "Qty",
                title: "Qty",
                dataIndex: "quantity",
                render: () => (
                  <div style={{display:'flex'}}>
                    <button>-</button>
                    <h2>{}</h2>
                    <button style={{marginLeft:'50px'}} onClick={addToCart}>+</button>
                  </div>
                )
              },
              {
      key: "Price",
      title: "Price",
      dataIndex: ["product", "Price"], // Access nested property
    },
    {
      key: "Discount",
      title: "Discount",
      dataIndex: ["product", "Discount"], // Access nested property
    },
    {
      key: "Image",
      title: "Image",
      dataIndex: ["product", "Image"], // Access nested property
      render: (value) => (
        <Image src={Config.image_path + value} alt="" width={60} />
      ),
    },
    {
      key: "Action",
      title: "Action",
      render: (value, item) => (
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
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Customer" name="Customer">
              <Select
                placeholder="Select Customer"
                showSearch
                optionFilterProp="label"
                style={{ width: "100%" }}
                allowClear
              >
                {/* {category.map((item) => (
                  <Select.Option key={item.Id} value={item.Id}>
                    {item.Name}
                  </Select.Option>
                ))} */}
              </Select>
            </Form.Item>
            <Form.Item label="Payment Method" name="PaymentMethod">
              <Select
                placeholder="Select Payment Method"
                style={{ width: "100%" }}
                allowClear
              >
                {/* Options for payment method */}
              </Select>
            </Form.Item>
            <div style={{ padding: "10px 0" }}>
              <div>Sub Total</div>
              <div>1000$</div>
            </div>
            <div style={{ padding: "10px 0" }}>
              <div>Discount</div>
              <div>100$</div>
            </div>
            <div style={{ padding: "10px 0" }}>
              <div>Total</div>
              <div>900$</div>
            </div>
            <Form.Item>
              <Space style={{ justifyContent: "right" }}>
                <Button type="primary" htmlType="submit">
                  Checkout
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
