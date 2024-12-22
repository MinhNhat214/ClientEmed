import React from "react";
import { Table, Tree } from "antd";
import { DownOutlined, FileOutlined, FolderOutlined } from "@ant-design/icons";

const XetNghiemKetQua = (props) => {
    const { data } = props;

    // Dữ liệu cho Tree
    const treeData = [
        {
            title: 'elipse1',
            key: 'parent-1',
            icon: <FolderOutlined />,
            children: [
                {
                    title: 'elipse.exe',
                    key: 'parent-1-child-1',
                    icon: <FileOutlined />,
                },
                {
                    title: 'elipse.exe',
                    key: 'parent-1-child-2',
                    icon: <FileOutlined />,
                },
            ],
        },
        {
            title: 'elipse',
            key: 'parent-2',
            icon: <FolderOutlined />,
            children: [
                {
                    title: 'elipse.exe',
                    key: 'parent-2-child-1',
                    icon: <FileOutlined />,
                },
                {
                    title: 'elipse.exe',
                    key: 'parent-2-child-2',
                    icon: <FileOutlined />,
                },
            ],
        },
    ];

    // Cấu hình cột với Tree
    const columns = [
        {
            title: "Xét nghiệm",
            dataIndex: "nhom",
            key: "nhom",
            render: () => (
                <Tree
                    showLine
                    showIcon
                    defaultExpandedKeys={['parent-1']}
                    switcherIcon={<DownOutlined />}
                    treeData={treeData}
                />
            ),
        },
        {
            title: "Hình thức",
            dataIndex: "nhom2",
            key: "nhom2",
        }
    ];

    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey="nhom"
            scroll={{ x: "max-content" }}
            className="data-table"
        />
    );
};

export default XetNghiemKetQua;
