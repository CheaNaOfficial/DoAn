import React from 'react';
import { Carousel } from 'antd';
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
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
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
