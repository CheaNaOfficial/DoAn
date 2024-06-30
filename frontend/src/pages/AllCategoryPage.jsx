
import React from 'react'
import {Outlet} from 'react-router-dom'
import { Carousel,Row,Col,Button} from 'antd';
import headphone from '../assets/headphone.png'

import '../Styles/StylePage/AllCategoryPage.scss';
import { MdShoppingCartCheckout } from "react-icons/md";
import AllProduct from './AllProduct';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

const AllCategoryPage = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  }
  return (
    <div>
      <div style={{width:'78%',height:'auto',backgroundColor:'#F1F5F8',marginLeft:'190px',paddingTop:'150px'}}>
        <Carousel afterChange={onChange}>
          <div style={{display:'flex'}}>
            <Row gutter={0}>
              <Col span={14}>
                <div style={{marginTop:'100px',color:'white'}}>
                  <h1 style={{textAlign:'center',color:'black'}}>HEADPHONE BLUETOOTH SONY</h1>
                  <div style={{fontSize:'18px',marginLeft:80,color:'black',marginTop:'50px'}}>
                    <p>Sử dụng công nghệ AINC One Push<br/>để khử nhiễu kỹ thuật số Nghe không dây một chạm qua BLUETOOTH</p>
                  </div>
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px'}}>
                    <Button style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#fd7e14',border:'1px solid #fd7e14',color:'white'}}><MdShoppingCartCheckout /><span style={{marginLeft:'10px'}}>Shop Now</span></Button>
                  </div>
                </div>
              </Col>
              <Col span={10}>
                <div style={{height:'auto'}}>
                  <img src={headphone} />
                </div>
              </Col>
            </Row>
          </div>
          <div style={{display:'flex'}}>
            <Row gutter={0}>
              <Col span={14}>
                <div style={{marginTop:'100px',color:'white'}}>
                  <h1 style={{textAlign:'center',color:'black'}}>HEADPHONE BLUETOOTH SONY</h1>
                  <div style={{fontSize:'18px',marginLeft:80,color:'black',marginTop:'50px'}}>
                    <p>Sử dụng công nghệ AINC One Push<br/>để khử nhiễu kỹ thuật số Nghe không dây một chạm qua BLUETOOTH</p>
                  </div>
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px'}}>
                    <Button style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#fd7e14',border:'1px solid #fd7e14',color:'white'}}><MdShoppingCartCheckout /><span style={{marginLeft:'10px'}}>Shop Now</span></Button>
                  </div>
                </div>
              </Col>
              <Col span={10}>
                <div style={{height:'auto'}}>
                  <img src={headphone} />
                </div>
              </Col>
            </Row>
          </div>
          <div style={{display:'flex'}}>
            <Row gutter={0}>
              <Col span={14}>
                <div style={{marginTop:'100px',color:'white'}}>
                  <h1 style={{textAlign:'center',color:'black'}}>HEADPHONE BLUETOOTH SONY</h1>
                  <div style={{fontSize:'18px',marginLeft:80,color:'black',marginTop:'50px'}}>
                    <p>Sử dụng công nghệ AINC One Push<br/>để khử nhiễu kỹ thuật số Nghe không dây một chạm qua BLUETOOTH</p>
                  </div>
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px'}}>
                    <Button style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#fd7e14',border:'1px solid #fd7e14',color:'white'}}><MdShoppingCartCheckout /><span style={{marginLeft:'10px'}}>Shop Now</span></Button>
                  </div>
                </div>
              </Col>
              <Col span={10}>
                <div style={{height:'auto'}}>
                  <img src={headphone} />
                </div>
              </Col>
            </Row>
          </div>
          <div style={{display:'flex'}}>
            <Row gutter={0}>
              <Col span={14}>
                <div style={{marginTop:'100px',color:'white'}}>
                  <h1 style={{textAlign:'center',color:'black'}}>HEADPHONE BLUETOOTH SONY</h1>
                  <div style={{fontSize:'18px',marginLeft:80,color:'black',marginTop:'50px'}}>
                    <p>Sử dụng công nghệ AINC One Push<br/>để khử nhiễu kỹ thuật số Nghe không dây một chạm qua BLUETOOTH</p>
                  </div>
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px'}}>
                    <Button style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#fd7e14',border:'1px solid #fd7e14',color:'white'}}><MdShoppingCartCheckout /><span style={{marginLeft:'10px'}}>Shop Now</span></Button>
                  </div>
                </div>
              </Col>
              <Col span={10}>
                <div style={{height:'auto'}}>
                  <img src={headphone} />
                </div>
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>

    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'78%',height:'auto',backgroundColor:'#F1F5F8',marginLeft:'190px',marginTop:'10px'}}> 
      <Row gutter={[8,8]} className='main-container'>
        <p style={{fontSize:'20px'}}><span style={{borderBottom:'2px solid #fd7e14',marginLeft:'50px'}}>All</span> <t/>Latop</p>
        <Col style={{marginTop:'-110px',marginLeft:'-190px'}} span={24}>
      <AllProduct/>
        </Col>
       
        <Col>
        <Outlet />
        </Col>
      </Row>
    </div>
    </div>
  )
}

export default AllCategoryPage


