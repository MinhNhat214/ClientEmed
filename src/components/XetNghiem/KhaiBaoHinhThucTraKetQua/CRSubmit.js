import React from "react";
import {Button, Dropdown} from "antd";
import {DownOutlined, ArrowLeftOutlined, ArrowRightOutlined} from '@ant-design/icons';

const CRSubmit = () => {

    const menuItems = [
        {key: "1", label: "Xem"},
        {key: "2", label: "Xóa"},
        {key: "3", label: "Sửa"},
    ];

    return (
        <div style={{textAlign: "center", marginTop: 100}}>
            <div style={{marginTop: 10, marginBottom: 10}}>
                <Dropdown
                    menu={{items: menuItems}}
                    trigger={["click"]}
                    placement="bottomRight"
                >
                    <Button>
                        Tùy chọn <DownOutlined/>
                    </Button>
                </Dropdown>
            </div>
            <div style={{marginTop: 10, marginBottom: 10}}>
                <Button icon={<ArrowLeftOutlined/>}>Thêm</Button>
            </div>
            <div style={{marginTop: 10, marginBottom: 10}}>
                <Button icon={<ArrowRightOutlined/>}> Xóa</Button>
            </div>
        </div>
    );
};

export default CRSubmit;
