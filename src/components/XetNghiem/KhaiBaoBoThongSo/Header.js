// src/components/DanhMucThuocBHYT/Header.js
import React from "react";
import {MedicineBoxFilled, PlusOutlined, CloseSquareFilled, EditFilled, PrinterFilled, SaveFilled} from "@ant-design/icons";
import { Button  } from "antd";


const Header = ({ onAdd }) => {
  return (
      <div>
    <div style={{display: "flex", justifyContent: "flex-end"}}>
        <Button type="primary" style={{margin: 10}}><MedicineBoxFilled />Toa B.Sỹ</Button>
        <Button type="primary" style={{margin: 10}}><PlusOutlined />Mới</Button>
        <Button type="primary" style={{margin: 10}}><SaveFilled />Lưu</Button>
        <Button type="primary" style={{margin: 10}}><PrinterFilled />In T.Thuốc</Button>
        <Button type="primary" style={{margin: 10}}><EditFilled />Sửa</Button>
        <Button type="primary" style={{margin: 10}}><CloseSquareFilled />Hủy</Button>
    </div>
        <hr/>
      </div>
  );
};

export default Header;
