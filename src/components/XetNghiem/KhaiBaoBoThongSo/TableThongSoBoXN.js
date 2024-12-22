import React, {useState, useEffect, useRef} from "react";
import {Table, Button, Dropdown, Menu, Checkbox} from "antd";
import {EditFilled} from "@ant-design/icons";
import ThaoTac from "./ThaoTac";
import SearchKetQua from "./SearchKetQua";

const TableThongSoXN = (props) => {
    const {data} = props;

    const columns = [
        {title: "Tên nội dung thông số", dataIndex: "nhom", key: "nhom"},
        {title: "Đơn vị đo", dataIndex: "phanLoai", key: "phanLoai"},
        {title: "BT nữ", dataIndex: "phanLoai", key: "phanLoai"},
        {title: "Min nữ", dataIndex: "phanLoai", key: "phanLoai"},
        {title: "Max nữ", dataIndex: "phanLoai", key: "phanLoai"},
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

export default TableThongSoXN;
