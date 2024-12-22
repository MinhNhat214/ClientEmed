import { Modal, Tabs, Button, Form, Input, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBook,
    faCalendarCheck,
    faFileExcel,
    faPenToSquare,
    faReply,
    faSave,
    faFile,
    faAngleRight,
    faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Canlamsanthuoc from "./Canlamsangthuoc";

function LichsuCLSThuoc() {
    //khaibao
    const [click, setClick] = useState(false);
    //truyền props
    const tabkhambenh = [
        {
            key: "1",
            label: "Cận Lâm Sàng - Thuốc",
            children: (
                <div className="tiepnhan-tab">
                    <Canlamsanthuoc />
                </div>
            ),
        },
        {
            key: "2",
            label: "CĐ Hẹn",
            children: <div className="tiepnhan-tab"></div>,
        },
    ];

    return (
        <>
            <div className="color-border">
                <div className="m-1">
                    <Tabs defaultActiveKey="1" type="card" size="small" items={tabkhambenh} />
                </div>
            </div>
        </>
    );
}

export default LichsuCLSThuoc;
