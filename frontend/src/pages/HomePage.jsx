import React from 'react';
import { Carousel,Row,Col,Button} from 'antd';
import headphone from '../assets/headphone.png'
import { MdShoppingCartCheckout } from "react-icons/md";
import msi from '../assets/msi.png'
import macbook from '../assets/macbook.png'
import acer from '../assets/acer.png'

const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
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
                  <img src={msi} />
                </div>
              </Col>
            </Row>
          </div>
          <div style={{display:'flex'}}>
            <Row gutter={0}>
              <Col span={14}>
                <div style={{marginTop:'100px',color:'white'}}>
                  <h1 style={{textAlign:'center',color:'black'}}>Apple Macbook Air 13 M3</h1>
                  <div style={{fontSize:'18px',marginLeft:80,color:'black',marginTop:'50px'}}>
                    <p>Apple Macbook Air 13 M3 là mẫu Macbook Air thế hệ 2024 với nhiều nâng cấp về cấu hình. Vậy chính xác dòng Macbook Air m3 này có gì nổi bật đáng để mua sử dụng thì cùng tìm hiểu chi tiết sau đây.</p>
                  </div>
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px'}}>
                    <Button style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#fd7e14',border:'1px solid #fd7e14',color:'white'}}><MdShoppingCartCheckout /><span style={{marginLeft:'10px'}}>Shop Now</span></Button>
                  </div>
                </div>
              </Col>
              <Col span={10}>
                <div style={{height:'auto'}}>
                  <img src={macbook} />
                </div>
              </Col>
            </Row>
          </div>
          <div style={{display:'flex'}}>
            <Row gutter={0}>
              <Col span={14}>
                <div style={{marginTop:'100px',color:'white'}}>
                  <h1 style={{textAlign:'center',color:'black'}}>Laptop Acer Swift</h1>
                  <div style={{fontSize:'18px',marginLeft:80,color:'black',marginTop:'50px'}}>
                    <p>Laptop Acer Swift 3 SF314-512-56QN NX.K0FSV.002 là một laptop di động với thiết kế gọn nhẹ.</p>
                  </div>
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'50px'}}>
                    <Button style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#fd7e14',border:'1px solid #fd7e14',color:'white'}}><MdShoppingCartCheckout /><span style={{marginLeft:'10px'}}>Shop Now</span></Button>
                  </div>
                </div>
              </Col>
              <Col span={10}>
                <div style={{height:'auto'}}>
                  <img src={acer} />
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
    
    </div>
  );
};
export default App;








// import React,{useEffect,useState} from 'react'
// import axios from "axios"
// import { request } from '../config/request';


// const HomePage = () => {
//   const [list,setList] = useState([]);
//   useEffect(()=>{
//     getList();
//   },[])

//   const getList = async () =>{
//     const res = await request("customer/getlist","get",{});
//     if(res){
//       setList(res.list)
//     }
//   }

//   return (
//     <div>
//     <h1>Hello</h1>
//     <h1>List : {list.length > 0}</h1>
//      {list.map((item,index)=>(
//       <div>
//         <div style={{marginLeft:'100px',color:'black'}}>{index+1}.{item.Firstname} | |=========| | {item.Lastname}</div>
//       </div>
//      ))}
      
//     </div>
//   )
// }

// export default HomePage;
