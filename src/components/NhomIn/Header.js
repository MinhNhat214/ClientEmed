// src/components/DuongDung/Header.js
import React, { Component } from "react";
import { UnorderedListOutlined } from "@ant-design/icons";
import FormModal from "./FormModal";

class Header extends Component {
  render() {
    const { onAdd } = this.props;
    return (
      <header className="header">
        <h2>
          <UnorderedListOutlined /> Khai báo nhóm In
        </h2>
        <FormModal onAdd={onAdd} />
      </header>
    );
  }
}

export default Header;
