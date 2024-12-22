// src/components/Table.js
import React, { Component } from "react";
import { Table, Button, Dropdown, Menu, Checkbox } from "antd";
import { EditFilled } from "@ant-design/icons";

class TableTenToa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data.map((item, index) => ({
                ...item,
                code: item.code || `code-${index}`,
                dmBHYT: item.dmBHYT || false,
                dmDichVu: item.dmDichVu || false,
                quyDoiSLKeToa: item.quyDoiSLKeToa || false,
                anHien: item.anHien || false
            })),
            activeDropdown: null,
        };
    }

    componentDidMount() {
        document.addEventListener("click", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (
            this.state.activeDropdown !== null &&
            !this.dropdownRef.contains(event.target)
        ) {
            this.setState({ activeDropdown: null });
        }
    };

    toggleDropdown = (index) => {
        this.setState((prevState) => {
            const newActiveDropdown =
                prevState.activeDropdown === index ? null : index;
            return { activeDropdown: newActiveDropdown };
        });
    };

    //CHECKBOX
    handleCheckboxChange = (record, column) => {
        this.setState(prevState => ({
            data: prevState.data.map(item => {
                if (item.code === record.code) {
                    return {
                        ...item,
                        [column]: !item[column]
                    };
                }
                return item;
            })
        }));
    };


    getMenu = () => (
        <Menu>
            <Menu.Item key="1">Xem</Menu.Item>
            <Menu.Item key="2">Xóa</Menu.Item>
            <Menu.Item key="3">Sửa</Menu.Item>
        </Menu>
    );


    render() {
        // const { activeDropdown } = this.state;
        const { data, activeDropdown } = this.state;
        const columns = [
            {
                title: "Mã toa",
                dataIndex: "ghiChu",
                key: "ghiChu",
            },
            {
                title: "Tên",
                dataIndex: "ghiChu",
                key: "ghiChu",
            },
            {
                title: "Ghi chú",
                dataIndex: "ghiChu",
                key: "ghiChu",
            },
            {
                title: "Thao tác",
                key: "action",

            },
        ];

        return (
            <Table
                columns={columns}
                dataSource={data}
                rowKey={(record) => record.code}
                scroll={{ x: "max-content" }}
                className="data-table"
            />
        );
    }
}

export default TableTenToa;
