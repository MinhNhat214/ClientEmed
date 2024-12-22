// src/components/DanhMucThuocBHYT/Header.js
import React from "react";
import {
    PlusOutlined,
    CloseSquareFilled,
    EditFilled,
    PrinterFilled,
    SaveFilled,
    UnorderedListOutlined
} from "@ant-design/icons";
import { Button } from "antd";
import FormModal from "../../XetNghiem/KhaiBaoTenTraKetQua/FormModal";


const Header = ({ onAdd }) => {
  return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2><UnorderedListOutlined/> Khai báo tên kết quả xét nghiệm</h2>
          <FormModal onAdd={onAdd} />
      </div>
  );
};

export default Header;
