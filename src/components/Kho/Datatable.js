import React, {useState, useEffect, useRef} from "react";
import {Table, Button, Dropdown, Menu, Checkbox} from "antd";
import {EditFilled} from "@ant-design/icons";
import ThaoTac from "./ThaoTac";

const Datatable = (props) => {
  const {data} = props;

  const columns = [
    {title: "Mã kho", dataIndex: "nhom", key: "nhom"},
    {title: "Tên kho", dataIndex: "nhom", key: "nhom"},
    {title: "Nhóm kho", dataIndex: "nhom", key: "nhom"},
    {
      title: "Khóa",
      dataIndex: "lock",
      key: "lock",
      render: (_, record) => (
          <Checkbox
              checked={<record className="lock"></record>}
              // onChange={() => handleCheckboxChange(record, "dmBHYT")}
          />
      ),
    },
    {title: "Ngày lấy BC", dataIndex: "nhom", key: "nhom"},

    {
      title: "Đông Y",
      dataIndex: "dmDichVu",
      key: "dmDichVu",
      render: (_, record) => (
          <Checkbox
              checked={record.dmDichVu}
              // onChange={() => handleCheckboxChange(record, "dmDichVu")}
          />
      ),
    },
    {title: "Kho dự trù", dataIndex: "nhom", key: "nhom"},
{
      title: "Thao tác",
      key: "action",
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
