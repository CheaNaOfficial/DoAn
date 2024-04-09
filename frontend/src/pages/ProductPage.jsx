


import React,{useState,useEffect} from 'react'
import {Row,Col,Image,Button} from "antd"
import { request } from '../config/request';
import { Config } from '../config/helper';
import '../Styles/StylePage/ProductPage.scss';
import {useNavigate} from "react-router-dom"


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

  const ClikAddToCart = () =>{
    navigate("/cart")
  }
  return (
    <div className='main-product' style={{marginTop:'100px'}}>
    
      <Row gutter={[8,24]} style={{display:'flex',justifyContent:'space-evenly'}}>
      {list.map((item,index)=>{
        return (
          <div key={index} xs={{span:24}} md={{span:8}} lg={{span:6}} className='productCard'>
            <Col>
              <div  className='productImage'>
                <div className='card-shadow'></div>
                <Image src={Config.image_path + item.Image} style={{width:300,height:200,display:'flex',justifyItems:'center',justifyContent:'center'}} />
              </div>
            </Col>
            <Col>
              <div className='cart-text'>
                <h4 className='product-name'>{item.Name}</h4>
                <p className='product-des'>{item.Description}</p>
                <p className='product-price'>{item.Price +"$"}</p>
                <Button onClick={ClikAddToCart}>Add to Card</Button>
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



























