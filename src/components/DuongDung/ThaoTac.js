import React from "react";
import { Button, Dropdown } from "antd";
import { EditFilled } from "@ant-design/icons";

const ThaoTac = () => {
    const menuItems = [
        { key: "1", label: "Xem" },
        { key: "2", label: "Xóa" },
        { key: "3", label: "Sửa" },
    ];

    return (
        <Dropdown
            menu={{ items: menuItems }}
            trigger={["click"]}
            placement="bottomRight"
        >
            <Button icon={<EditFilled />} />
        </Dropdown>
    );
};

export default ThaoTac;