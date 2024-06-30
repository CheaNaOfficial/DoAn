


import React, { cloneElement } from 'react'
import { Typography,Space,Card, Statistic} from 'antd';
import { FaCartPlus } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
const ChartDas = () => {
  return (
    
    <div>
    <Typography.Title level={4}>Dashboard</Typography.Title>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
      <Space direction='horizontal'>
        <Card style={{width:250}}>
          <Space direction='horizontal'>
            <span style={{color:'green',background:'rgba(0,255,0,0.5)',borderRadius:20,fontSize:24,padding:8,width:'60px',height:'60px'}}>
              <FaCartPlus style={{fontSize:'20'}} />
            </span>
            <Statistic title='Orders' value={1234} /> 
          </Space>
        </Card>
      </Space>
      <Space direction='horizontal'>
        <Card style={{width:250}}>
          <Space direction='horizontal'>
            <span style={{color:'purple',background:'rgba(0,255,255,0.25)',borderRadius:20,fontSize:24,padding:8}}>
              <LuUser2 />
            </span>
              
              <Statistic title='Customer' value={1234} /> 
          
          </Space>
        </Card>
      </Space>
      <Space direction='horizontal'>
        <Card style={{width:250}}>
          <Space direction='horizontal'>
            <span style={{color:'red',background:'rgba(255,0,0,0.25)',borderRadius:20,fontSize:24,padding:8}}>
              <HiOutlineCurrencyDollar />
            </span>
            <Statistic title='Revenue' value={1234} /> 
          </Space>
        </Card>
      </Space>
      <Space direction='horizontal'>
        <Card style={{width:250}}>
          <Space direction='horizontal'>
            <span style={{color:'green',background:'rgba(0,255,0,0.5)',borderRadius:20,fontSize:24,padding:8}}>
              <FaCartPlus />
            </span>
            <Statistic title='Revenue' value={1234} /> 
          </Space>
        </Card>
      </Space>
      
    </div>
    </div>
  )
}

export default ChartDas;

