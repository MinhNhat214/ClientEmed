import React, {useState, useEffect, useRef} from "react";
import {Table, Button, Dropdown, Menu, Checkbox} from "antd";
import ThaoTac from "./ThaoTac";

const Datatable = (props) => {
  const {data} = props;

  const columns = [
    {title: "Mã", dataIndex: "nhom", key: "nhom"},

    {title: "Tên đường dùng", dataIndex: "nhom", key: "nhom"},

    {title: "Mã Đ.dùng (BYT)", dataIndex: "nhom", key: "nhom"},
    {title: "STT", dataIndex: "nhom", key: "nhom"},

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
