import { Modal, Form, Input, Table, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPowerOff,
    faPrint,
    faSave,
    faPenToSquare,
    faTrashCan,
    faArrowCircleRight,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import FormItem from "antd/es/form/FormItem";
import "./lapphieutheodoitruyendich.scss";
// import data2 from "../../../../../../util/data3";
import { useRef } from "react";
// import ds from "../../../../../../util/data";
// import Swal from "sweetalert2";

function Lapphieutheodoitruyendich(props) {
    const { open, setOpen } = props;

    const columns = [
        {
            title: "Ngày",
            dataIndex: "ngay",
            fixed: "left",
            render: (ngay) => <div> {ngay} </div>,
        },
        {
            title: "Chuẩn đoán sơ bộ",
            dataIndex: "mach",
            render: (mach) => <div> {mach} </div>,
        },
    ];
    const items1 = [
        {
            label: <div className="form-input-label ">F2 - Mới</div>,
            key: "1",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPowerOff} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">F3 - Lưu</div>,
            key: "2",
            icon: <FontAwesomeIcon icon={faSave} />,
        },
        {
            label: <div className="form-input-label ">Sửa</div>,
            key: "3",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">Bỏ qua</div>,
            key: "3",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                </div>
            ),
        },

        {
            label: <div className="form-input-label ">F6 - In biên bản</div>,
            key: "4",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label ">Thoát</div>,
            key: "5",
            icon: (
                <div className="">
                    <FontAwesomeIcon icon={faCircleXmark} />
                </div>
            ),
        },
    ];
    const handCloseModal = (a) => {
        if (a === "5") {
            setOpen(false);
        }
    };
    const column0 = [
        {
            title: "Ngày",
            dataIndex: "TDV",
            fixed: "left",
            render: (TDV) => <div style={{ width: "100px" }}> {TDV} </div>,
        },
        {
            title: "Tên thuốc truyền dịch",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "200px" }}> {TDVVT} </div>,
        },
        {
            title: "Hàm lượng",
            dataIndex: "MADVKT",
            render: (MADVKT) => <div style={{ width: "100px" }}> {MADVKT} </div>,
        },
        {
            title: "Số lượng",
            dataIndex: "TDVVT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Lô/Số sản xuất",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Tốc độ giọt/phút",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Thời gian bắt đầu",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Thời gian kết thúc",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Bác sĩ chỉ định",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Y tá (ĐD)",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
        {
            title: "Ghi chú",
            dataIndex: "MADVKT",
            render: (TDVVT) => <div style={{ width: "100px" }}> {TDVVT} </div>,
        },
    ];
    return (
        <>
            <Modal className="PhieuTheoDoiTruyenDich"
                title={
                    <>
                        <div className="d-flex justify-content-between">
                            <div className="title-header">PHIẾU THEO DÕI TRUYỀN DỊCH</div>
                            <div className="btn-header">
                                <div className="d-flex justify-content-end">
                                    {items1.map((item) => (
                                        <Button
                                            className="form-btn bg mx-1 px-1"
                                            key={item.key}
                                            onClick={() => handCloseModal(item.key)}
                                        >
                                            {item.icon}
                                            <div className="mx-1 fw-bold">{item.label}</div>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                }
                closable={false}
                centered
                open={open}
                okButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                cancelButtonProps={{
                    style: {
                        display: "none",
                    },
                }}
                onCancel={() => setOpen(false)}
                width={"100vw"}
            >
                <div>
                    <Form>
                        <div className="row form-row">
                            <FormItem
                                label={<div className="form-input-label ">Họ tên</div>}
                                className="w-25"
                            >
                                <Input className="form-control" />
                            </FormItem>

                            <FormItem
                                label={<div className="form-input-label ">Ngày sinh</div>}
                                className="w-15"
                            >
                                <Input className="form-control" />
                            </FormItem>
                            <FormItem
                                label={<div className="form-input-label ">Giới tính</div>}
                                className="w-10"
                            >
                                <Input className="form-control" />
                            </FormItem>
                            <FormItem
                                label={<div className="form-input-label ">Nghề nghiệp</div>}
                                className="w-15"
                            >
                                <Input className="form-control" />
                            </FormItem>

                            <FormItem
                                label={<div className="form-input-label ">Dân tộc</div>}
                                className="w-10"
                            >
                                <Input className="form-control" />
                            </FormItem>
                            <FormItem
                                label={<div className="form-input-label ">Q.tịch</div>}
                                className="w-10"
                            >
                                <Input className="form-control" />
                            </FormItem>
                            <FormItem
                                label={<div className="form-input-label ">Nơi làm việc</div>}
                                className="w-15"
                            >
                                <Input className="form-control" />
                            </FormItem>
                        </div>
                        <div className="row form-row">
                            <FormItem
                                label={<div className="form-input-label ">Đ.tượng</div>}
                                className="w-10"
                            >
                                <Input className="form-control" />
                            </FormItem>
                            <FormItem
                                label={<div className="form-input-label ">Số thẻ BHYT</div>}
                                className="w-15"
                            >
                                <Input className="form-control" />
                            </FormItem>

                            <FormItem
                                label={<div className="form-input-label ">Địa chỉ</div>}
                                className="w-25"
                            >
                                <Input className="form-control" />
                            </FormItem>

                            <FormItem
                                label={<div className="form-input-label ">Hạn thẻ</div>}
                                className="w-15"
                            >
                                <Input className="form-control" />
                            </FormItem>
                            <FormItem
                                label={<div className="form-input-label ">C.Đoán</div>}
                                className="w-20"
                            >
                                <Input className="form-control" />
                            </FormItem>
                            <FormItem
                                label={<div className="form-input-label ">Số phòng</div>}
                                className="w-15"
                            >
                                <Input className="form-control" />
                            </FormItem>
                        </div>
                        <div className="mt-2">
                            <div className="d-flex">
                                <div className="w-25">
                                    <div className="bg-label color-text fw-bold p-1 px-2">
                                        Lịch sử lập tờ điều trị
                                    </div>
                                    <Table
                                        columns={columns}
                                        // dataSource={data2}
                                        // loading={loading}
                                        scroll={{ x: true, y: 500 }}
                                        size="small"
                                        pagination={false}
                                    />
                                </div>
                                <div className="w-75">
                                    <div>
                                        <Table
                                            columns={column0}
                                            // dataSource={ds}
                                            // loading={loading}
                                            scroll={{ x: true, y: 500 }}
                                            size="small"
                                            pagination={false}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </Modal>
        </>
    );
}

export default Lapphieutheodoitruyendich;
