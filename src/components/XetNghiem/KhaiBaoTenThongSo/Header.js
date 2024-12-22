
import React from "react";
import {
    UnorderedListOutlined
} from "@ant-design/icons";
import FormModal from "../../XetNghiem/KhaiBaoTenThongSo/FormModal";

const Header = ({ onAdd }) => {
  return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2><UnorderedListOutlined/> Khai báo tên thông số</h2>
          <FormModal onAdd={onAdd} />
      </div>
  );
};

export default Header;
