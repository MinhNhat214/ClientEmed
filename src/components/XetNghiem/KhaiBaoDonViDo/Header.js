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
import FormModal from "../../XetNghiem/KhaiBaoDonViDo/FormModal";


const Header = ({ onAdd }) => {
  return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2><UnorderedListOutlined/> Khai báo tên đơn vị đo</h2>
          <FormModal onAdd={onAdd} />
      </div>
  );
};

export default Header;
