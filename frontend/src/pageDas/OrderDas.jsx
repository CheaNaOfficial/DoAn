
import React, { useEffect, useState,useRef } from "react";
import { request } from "../config/request";
import {Table,Form} from "antd";

const CategoryDas = () => {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);

  const [formCate] = Form.useForm();

  useEffect(() => {
    formCate.setFieldsValue({
      Status: "1",
    });
    getList();
  }, []);

  const filterRef = useRef({ 
    txt_search : null,
    status : null
  })


  const getList = async () => {

    var param = {
      txt_search :filterRef.current.txt_search,
      status : filterRef.current.status,
    }
    const res = await request("order/getlist", "get",param);
    if (res) {
      setList(res.list);
    }
    console.log(res);
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between",paddingBottom:10 }}>
        
      </div>
      <Table
        style={{tableLayout:'fixed'}}
        dataSource={list}
        columns={[
          {
            key: "id",
            title: "id",
            dataIndex: "id",
          },
          {
            key: "user_id",
            title: "user_id",
            dataIndex: "user_id",
          },
          {
            key: "paymentype",
            title: "paymentype",
            dataIndex: "paymentype",
          },
          {
            key: "total_amount",
            title: "total_amount",
            dataIndex: "total_amount",
          }
        ]}
      />

      
    </div>
  );
};

export default CategoryDas;




