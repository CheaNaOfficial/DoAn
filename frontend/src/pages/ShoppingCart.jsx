

import React,{useState,useEffect} from 'react'
import {Row,Col,Image,Button, Rate} from "antd"
import { request } from '../config/request';
import { Config } from '../config/helper';
import '../Styles/StylePage/ProductPage.scss';
import {NavLink, useNavigate} from "react-router-dom"
import { useCart } from '../Context/CartContext';



const ProductPage = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);

  useEffect(()=>{
    getList()
  },[])

  const getList = async () => {

    const res = await request("product/getlist", "get",{});
    if (res) {
      setList(res.list);
    }
  }

  const ClikAddToCart = async (productId) => {
   
    try {
        // Make a request to the backend to add the item to the cart
        const res = await request("cart/create", "post", {
            user_id:9, 
            product_id: productId, 
            quantity: 1 
        });
        navigate("/cart");
       
    } catch (error) {
        // Handle errors, e.g., show an error message
        console.error("Error adding item to cart:", error);
    }
}


  const { addToCart } = useCart();
  return (
    
    <div className='main-product' style={{marginTop:'0px'}}>


      <Row gutter={[8,8]} style={{display:'flex',justifyContent:'space-evenly',marginTop:'140px'}}>
      {list.map((item,index)=>{
        return (
          <div key={index} xs={{span:24}} md={{span:8}} lg={{span:6}} className='productCard'>
            <Col>
              <div  className='productImage'>
                <Image src={Config.image_path + item.Image} style={{width:300,height:200,display:'flex',justifyItems:'center',justifyContent:'center'}} />
              </div>
            </Col>
            <Col>
              <div className='cart-text'>
                <h4 className='product-name'>{item.Name}</h4>
                <p className='product-des'>{item.Description}</p>
                <p><Rate /></p>
                <p className='product-price'>{item.Price +"$"}</p>
                <Button onClick={() => ClikAddToCart(item.Id)}>Add to Cart</Button>

              </div>
            </Col>  
          </div>
        )
      })}
      </Row>
    </div>
    
  )
}

export default ProductPage;




















