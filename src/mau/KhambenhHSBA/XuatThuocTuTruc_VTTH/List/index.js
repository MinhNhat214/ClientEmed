import { Table, Button, Dropdown, Form, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faTrashCan,
    faEye,
    faPenToSquare,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";
import "../xuatthuoctutruc-vtth.scss";
import DetailXuatThuocTuTrucVTTH from "../Detail";
function ListXuatThuocTuTrucVTTH() {
    const [open, setOpen] = useState(false);
    const [click, setClick] = useState(false);
    const [activeModify, setActiveModify] = useState(false);

    const handleDataCreate = () => {
        setOpen(true);
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    const items = [
        {
            key: "1",
            label: "Xem",
            icon: <FontAwesomeIcon icon={faEye} />,
        },
        {
            key: "2",
            label: "Xóa",
            icon: <FontAwesomeIcon icon={faTrashCan} />,
        },
        {
            key: "3",
            label: "Sửa",
            icon: <FontAwesomeIcon icon={faPenToSquare} />,
        },
    ];
    const columns = [
        {
            title: "Ngày",
            dataIndex: "NGAY",
            render: (NGAY) => <div style={{ width: "50px" }}> {NGAY} </div>,
        },
        {
            title: "Mã số",
            dataIndex: "MASO",
            render: (MASO) => <div style={{ width: "50px" }}> {MASO} </div>,
        },
        {
            title: "Họ & Tên",
            dataIndex: "TEN",
            render: (TEN) => <div style={{ width: "200px" }}> {TEN} </div>,
        },
        {
            title: "Phái",
            dataIndex: "PHAI",
            render: (PHAI) => <div style={{ width: "50px" }}> {PHAI} </div>,
        },
        {
            title: "Năm sinh",
            dataIndex: "NAM",
            render: (NAM) => <div style={{ width: "80px" }}> {NAM} </div>,
        },
        {
            title: "Phòng khám",
            dataIndex: "PhongKham",
            render: (PhongKham) => <div style={{ width: "200px" }}> {PhongKham} </div>,
        },
        {
            title: "Bác sĩ",
            dataIndex: "BacSi",
            render: (BacSi) => <div style={{ width: "200px" }}> {BacSi} </div>,
        },
        {
            title: "Đối tượng",
            dataIndex: "DoiTuong",
            render: (DoiTuong) => <div style={{ width: "80px" }}> {DoiTuong} </div>,
        },

        {
            title: "Thao tác",
            dataIndex: "",
            align: "center",
            fixed: "right",
            render: (record) => (
                <div className="d-flex justify-content-center">
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="left"
                        arrow={{
                            pointAtCenter: true,
                        }}
                    >
                        <Button
                            className="bg-light vienphi-danhmuc-icon-modify"
                            onClick={() => {
                                setActiveModify(!activeModify);
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faEdit}
                                style={{ fontSize: "10px" }}
                                className="text-dark"
                            />
                        </Button>
                    </Dropdown>
                </div>
            ),
        },
    ];

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                <div className="text-muted">
                    <div className="d-flex justify-content-between align-items-center mt-2 mx-2">
                        <div className="d-flex align-items-center ">
                            {/*<div className="vienphi-danhmuc-title mx-2">Xuất thuốc tủ trực và vật tư</div>*/}
                            <h2>Xuất thuốc tủ trực và vật tư</h2>
                        </div>
                        <div className="text-end">
                            <Button className="form-btn bg" onClick={handleDataCreate}>
                                <FontAwesomeIcon icon={faPlus} className="mx-1" />
                                Thêm mới
                            </Button>
                        </div>
                    </div>
                    <DetailXuatThuocTuTrucVTTH open={open} setOpen={setOpen} />
                    <hr className="w-100 my-1" />
                    <div className="m-1 danhmuc">
                        <Table
                            columns={columns}
                            dataSource=""
                            // loading={loading}
                            scroll={{ x: true }}
                            size="small"
                            pagination={{ pageSize: 20 }}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default ListXuatThuocTuTrucVTTH;
