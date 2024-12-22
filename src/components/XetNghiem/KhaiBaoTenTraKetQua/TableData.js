import React from "react";
import {Table} from "antd";
import ThaoTac from "./ThaoTac"
const TableData = (props) => {
    const {data} = props;

    const columns = [
        {
            title: "Tên kết quả xét nghiệm",
            dataIndex: "nhom",
            key: "nhom",
        },
        {
            title: "Thao tác",
            key: "action",
            render: (_, record, index) => <ThaoTac index={index}/>,
            width: "10%"
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

export default TableData;
