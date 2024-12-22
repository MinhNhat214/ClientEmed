
import React from "react";
import {
    MedicineBoxFilled,
    PlusOutlined,
    CloseSquareFilled,
    EditFilled,
    PrinterFilled,
    SaveFilled,
    SaveTwoTone, CloseCircleTwoTone, PlusSquareTwoTone
} from "@ant-design/icons";
import { Button  } from "antd";


const Header = ({ onAdd }) => {
    return (
            <div style={{display: "flex", justifyContent: "flex-start"}}>
                <Button type="primary" style={{marginLeft: 10}}><PlusSquareTwoTone />Add</Button>
                <Button type="primary" style={{marginLeft: 10}}><SaveTwoTone />Save</Button>
                <Button type="primary" style={{marginLeft: 10}}><CloseCircleTwoTone />Cancel</Button>
            </div>
    );
};

export default Header;
