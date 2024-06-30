import React, { useState, useEffect } from 'react';
import { Row, Col, Image, Button, Rate } from 'antd';
import { TokenRequest, request } from '../config/request';
import { Config } from '../config/helper';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const AllProduct = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const { addToCart } = useCart(); // Destructure setAdd from useCart
  
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await request(`product/getList`, 'get', {});
      if (res) {
        setList(res.list);
      }
    } catch (error) {
      console.error('Error fetching product list:', error);
    }
  };

  const clickAddToCart = async (productId) => {
    try {
      const res = await TokenRequest.post('cart/create', {
        product_id: productId,
        quantity: 1
      });
      navigate("/cart");
      addToCart()
      if (res.data) {
        console.log('Item added to cart successfully:', res);
        // Handle successful response (e.g., show success message)
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      // Display user-friendly error message
    }
  };
  
  return (
    <div className="main-product" style={{ marginTop: '0px' }}>
      <Row gutter={[8, 8]} style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '140px' }}>
        {list && list.map((item, index) => (
          <div key={index} xs={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }} className="productCard">
            <Col>
              <div className="productImage">
                <Image src={Config.image_path + item.Image} style={{ width: 300, height: 200, display: 'flex', justifyItems: 'center', justifyContent: 'center' }} />
              </div>
            </Col>
            <Col>
              <div className="cart-text">
                <h4 className="product-name">{item.Name}</h4>
                <p className="product-des">{item.Description}</p>
                <p><Rate /></p>
                <p className="product-price">{item.Price + '$'}</p>
                <Button onClick={() => clickAddToCart(item.Id)}>Add to Cart</Button>
              </div>
            </Col>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default AllProduct;
