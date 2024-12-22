// src/components/DuongDung/Header.js
import React, { Component } from "react";
import { UnorderedListOutlined } from "@ant-design/icons";
// import FormModal from "./FormModal";
import ThaoTac from "./ThaoTac";
import { Input  } from "antd";

class Header extends Component {
  render() {
    const { Search } = Input;
    const { onAdd } = this.props;
    return (
      <header className="header">
        <h2>
          <UnorderedListOutlined /> Khai báo toa mẫu
        </h2>

          <Search placeholder="input search text" allowClear style={{ width: "400px" }} />
        {/*<FormModal onAdd={onAdd} />*/}
          <ThaoTac/>
      </header>
    );
  }
}

export default Header;
