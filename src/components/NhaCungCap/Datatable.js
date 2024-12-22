import React, {useState, useEffect, useRef} from "react";
import {Table, Button, Dropdown, Menu, Checkbox} from "antd";
import ThaoTac from "./ThaoTac";

const Datatable = (props) => {
  const {data} = props;

  const columns = [
    {title: "Tên nhà cung cấp", dataIndex: "nhom", key: "nhom"},
    {title: "Mã số thuế", dataIndex: "nhom", key: "nhom"},
    {title: "Người đại diện", dataIndex: "nhom", key: "nhom"},
    {title: "Địa chỉ", dataIndex: "nhom", key: "nhom"},
    {title: "Điện thoại", dataIndex: "nhom", key: "nhom"},
    {title: "Số Fax", dataIndex: "nhom", key: "nhom"},

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
