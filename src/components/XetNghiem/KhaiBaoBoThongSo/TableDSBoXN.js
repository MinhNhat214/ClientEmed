import React, {useState, useEffect, useRef} from "react";
import {Table, Button, Dropdown, Menu, Checkbox} from "antd";
import {EditFilled} from "@ant-design/icons";
import ThaoTac from "./ThaoTac";
import SearchKetQua from "./SearchKetQua";

const TableDSBoXN = (props) => {
    const {data} = props;

    const columns = [
        {title: "Loại xét nghiệm", dataIndex: "nhom", key: "nhom"},
        {title: "Tên xét nghiệm", dataIndex: "phanLoai", key: "phanLoai"},
    ];

    return (
        <Table
            columns={columns}
            dataSource={data}
            // Trong trường hợp này, bạn có thể tính toán hoặc chọn key dựa trên các thuộc tính khác, không chỉ đơn thuần là lấy record.nhom. Điều này hữu ích nếu key cần kết hợp nhiều trường hoặc thực hiện logic tùy chỉnh.
            // Ví dụ: Bạn có thể viết rowKey={(record) => ${record.nhom}-${record.id}} để tạo key bằng cách kết hợp nhom và id.
            // rowKey={(record) => record.nhom}
            rowKey="nhom"
            scroll={{x: "max-content"}}
            className="data-table"
        />
    );
};

export default TableDSBoXN;
