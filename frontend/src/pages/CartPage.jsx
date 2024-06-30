
import React, { useEffect, useState } from "react";
import { TokenRequest, request } from "../config/request";
import {
  Button,
  Modal,
  Space,
  Table,
  Form,
  Select,
  message,
  Tag,
  Row,
  Col,
  Image,
} from "antd";
import { MdDelete } from "react-icons/md";
import { Config } from "../config/helper";
import { useCart } from "../Context/CartContext";

import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
const CartPage = () => {
  const [list, setList] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const stripe = useStripe();
  const [lineItems, setLineItems] = useState([]);
  const { addToCart, removeFromCart,getNumberCart } = useCart();

  useEffect(() => {
    const items = list.map(item => ({
       // Adding the id property
      price_data: {
        currency: 'vnd',
        product_data: {
          name: item.product.Name,
          description: item.product.Description,
          images: [item.product.Image],
        },
        unit_amount: parseFloat(item.product.Price) * 100, // Convert to smallest currency unit
      },
      quantity: item.quantity,
    }));
  
    setLineItems(items);
  }, [list]);
  
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res = await request("cart/getlist", "get");
    if (res) {
      setList(res);
      calculateTotals(res);
    }
  };

  const calculateTotals = (items) => {
    let subTotal = 0;
    let discount = 0;

    items.forEach((item) => {
      const quantity = item.quantity;
      const price = item.product.Price;
      const itemTotal = quantity * price;
      const itemDiscount = (itemTotal * (item.product.Discount || 0)) / 100;

      subTotal += itemTotal;
      discount += itemDiscount;
    });

    const total = subTotal - discount;

    setSubTotal(subTotal);
    setDiscount(discount);
    setTotal(total);
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
        const res = await request("cart/delete", "delete", {
          cart_id: item.cart_id,
        });
        if (res) {
          message.success(res.message);
          getList();
          getNumberCart()
        }
      },
    });
  };

  const onFinish = async (values) => {
    const { data } = await TokenRequest.post('/payment/create', {
      lineItems: lineItems,
      list:list
    });
  
    if (data.sessionId) {
      stripe.redirectToCheckout({ sessionId: data.sessionId });
    }
  };


const updateQuantity = async (item, newQuantity, action) => {
  try {
    const response = await request(`cart/${action}`, "PUT", { cart_id: item.cart_id });
    const data = response; // Assuming response is already parsed JSON
    if (data) {
      const updatedList = list.map((cartItem) =>
        cartItem.cart_id === item.cart_id ? { ...cartItem, quantity: newQuantity } : cartItem
      );
      message.success(data.message);
      setList(updatedList);
      calculateTotals(updatedList);
    } else {
      message.error(data.message || 'Something went wrong');
    }
  } catch (error) {
    console.error('Error updating quantity:', error);
    message.error('An error occurred. Please try again.');
  }
};

const decrease = async (item) => {
  if (item.quantity > 1) {
    const newQuantity = item.quantity - 1;
    await updateQuantity(item, newQuantity, 'subtractQuantity');
    const updatedList = list.map((cartItem) =>
      cartItem.cart_id === item.cart_id ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setList(updatedList);
    await removeFromCart(item.product); // Remove one item from the cart
  } else {
    message.warning('Quantity cannot be less than 1');
  }
};

const increase = async (item) => {
  const newQuantity = item.quantity + 1;
  await updateQuantity(item, newQuantity, 'addQuantity');
  const updatedList = list.map((cartItem) =>
    cartItem.cart_id === item.cart_id ? { ...cartItem, quantity: newQuantity } : cartItem
  );
  setList(updatedList);
  await addToCart(item.product); // Add one item to the cart
};

  

  return (
    <div style={{ marginLeft: 190, width: "78%", paddingTop: "200px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: 10,
          paddingTop: 20,
        }}
      ></div>
      <Row gutter={15}>
        <Col span={17}>
          <Table
            dataSource={list}
            pagination={false}
            columns={[
              {
                key: "Name",
                title: "Name",
                dataIndex: ["product", "Name"],
                render: (value, item, index) => (
                  <div>
                    <div style={{ fontWeight: "bold" }}>
                      {index + 1}. {value}
                    </div>
                    <div>
                      Fin{" "}
                      <Tag color={item.product.Qty > 3 ? "green" : "red"}>
                        {item.quantity}
                      </Tag>
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
                render: (value, item) => (
                  <div style={{ display: "flex" }}>
                    <button
                      style={{ border: "none" }}
                      onClick={() => decrease(item)}
                    >
                      <span>-</span>
                    </button>
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "20px",
                      }}
                    >
                      {item.quantity}
                    </span>
                    <button
                      style={{ marginLeft: "20px", border: "none" }}
                      onClick={() => increase(item)}
                    >
                      <span>+</span>
                    </button>
                  </div>
                ),
              },
              {
                key: "Price",
                title: "Price",
                dataIndex: ["product", "Price"],
              },
              {
                key: "Discount",
                title: "Discount",
                dataIndex: ["product", "Discount"],
              },
              {
                key: "Total",
                title: "Total",
                render: (value, item) => {
                  const quantity = item.quantity;
                  const price = item.product.Price;
                  const discount = item.product.Discount || 0;
                  const discountPrice = (quantity * price * discount) / 100;
                  const total = quantity * price - discountPrice;
                  return total.toFixed(2);
                },
              },
              {
                key: "Image",
                title: "Image",
                dataIndex: ["product", "Image"],
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
        <Col span={7} style={{background:'#eee',borderRadius:'20'}}>
          <Form layout="vertical" onFinish={onFinish} style={{marginTop:20}}>
            <div style={{ padding: "10px 0" }}>
                <Row gutter={15} style={{marginLeft:'10px'}}>
                  <Col span={18}><div><b style={{fontSize:18}}>Sub total :</b></div></Col>
                  <Col><div><b>{subTotal.toFixed(2)}$</b></div></Col>
                </Row>
            </div>
                <Row gutter={15} style={{marginLeft:'10px'}}>
                  <Col span={18}><div><b style={{fontSize:18}}>Discount : </b></div></Col>
                  <Col><div><b>{discount.toFixed(2)}$</b></div></Col>
                </Row>
            <div style={{ padding: "10px 0" }}>
                <Row gutter={15} style={{marginLeft:'10px'}}>
                  <Col span={18}><div><b style={{fontSize:18,color:'red'}}>Total :</b></div></Col>
                  <Col><div><b style={{color:'red'}}>{total.toFixed(2)}$</b></div></Col>
                </Row>
            </div>
      
            <Form.Item>
              <Space style={{display:'flex',justifyContent: "right",marginTop:50 }}>
             
              <Button type="primary" htmlType="submit"  >Checkout</Button>
         

              </Space>
            </Form.Item>
         
           
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;






