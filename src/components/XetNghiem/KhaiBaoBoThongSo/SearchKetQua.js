
import React from "react";
import {RetweetOutlined, UnorderedListOutlined} from "@ant-design/icons";
import {Input, Button} from "antd";

const SearchKetQua = ({onAdd}) => {
    return (
        <div>
            <h2><UnorderedListOutlined/> Danh sách bộ xét nghiệm</h2>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                Hình thức trả kết quả:
                <Input style={{width:'60%'}}/>
                    <Button type="primary" icon={<RetweetOutlined/>}>
                </Button>
            </div>
        </div>
    );
};

export default SearchKetQua;
