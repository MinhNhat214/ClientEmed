// src/components/DanhMucThuocBHYT/Header.js
import React from "react";
import { UnorderedListOutlined } from "@ant-design/icons";
import FormModal from "./FormModal";

const Header = ({ onAdd }) => {
  return (
    <header className="header">
      <h2>
        <UnorderedListOutlined /> Danh mục thuốc thầu BHYT
      </h2>
      <FormModal onAdd={onAdd} />
    </header>
  );
};

export default Header;
