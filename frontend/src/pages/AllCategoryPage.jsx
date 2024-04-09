
import React from 'react'
import {Outlet} from 'react-router-dom'
import { Carousel,Row,Col,Button} from 'antd';
import FooterPage from '../components/Footer/FooterPage'
import headphone from '../assets/headphone.png'
import ProductPage from './ProductPage';
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
      <div style={{width:'77%',height:'auto',backgroundColor:'gray',marginLeft:'200px'}}>
        <Carousel afterChange={onChange}>
          <div style={{display:'flex'}}>
            <Row gutter={0}>
              <Col span={14}>
                <div style={{marginTop:'100px',color:'white'}}>
                  <h1 style={{textAlign:'center'}}>HEADPHONE BLUETOOTH SONY</h1>
                  <div style={{fontSize:'15px',marginLeft:80}}>
                    <h4>Sử dụng công nghệ AINC One Push<br/>để khử nhiễu kỹ thuật số Nghe không dây một chạm qua BLUETOOTH</h4>
                  </div>
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px'}}>
                    <Button style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Default Button</Button>
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
                <div style={{backgroundColor:'red',height:'auto'}}> kkkk</div>
              </Col>
              <Col span={10}>
                <div style={{backgroundColor:'blue',height:'auto'}}>
                  <img src={headphone} />
                </div>
              </Col>
            </Row>
          </div>
          <div style={{display:'flex'}}>
            <Row gutter={0}>
              <Col span={14}>
                <div style={{backgroundColor:'red',height:'auto'}}> kkkk</div>
              </Col>
              <Col span={10}>
                <div style={{backgroundColor:'blue',height:'auto'}}>
                  <img src={headphone} />
                </div>
              </Col>
            </Row>
          </div>
          <div style={{display:'flex'}}>
            <Row gutter={0}>
              <Col span={14}>
                <div style={{backgroundColor:'red',height:'auto'}}> kkkk</div>
              </Col>
              <Col span={10}>
                <div style={{backgroundColor:'blue',height:'auto'}}>
                  <img src={headphone} />
                </div>
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'77%',height:'auto',backgroundColor:'red',marginLeft:'200px',marginTop:'10px'}}>
     <div className='main-container'>
      <h1>hello</h1>
      <div >
        <ProductPage />
      </div>
      
     </div>
      {/* <div>
        <Outlet />
      </div> */}
    </div>
    <div className='main-footer'>
      <FooterPage />
    </div>
    </div>
  )
}

export default AllCategoryPage


