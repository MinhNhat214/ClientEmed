import React, {useState, useEffect, useRef} from "react";
import {Table, Button, Dropdown, Menu, Checkbox} from "antd";
import {EditFilled} from "@ant-design/icons";
import ThaoTac from "./ThaoTac";

const Datatable = (props) => {
  const {data} = props;

  const columns = [
    {title: "Mã đơn vị", dataIndex: "nhom", key: "nhom"},

    {title: "Tên diễn giải đơn vị tính", dataIndex: "nhom", key: "nhom"},

    {
      title: "Thao tác",
      key: "action",
      width: "10%",
      render: (_, record, index) => <ThaoTac index={index}/>,
    },
  ];


  return (
      <Table
          columns={columns}
          dataSource={data}
          rowKey="nhom"
          scroll={{x: "max-content"}}
          className="data-table"
      />
  );
};

export default Datatable;
