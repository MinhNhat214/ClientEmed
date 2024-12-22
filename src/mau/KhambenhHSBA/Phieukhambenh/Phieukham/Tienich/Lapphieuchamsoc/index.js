import { Modal, Form, Input, Table, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPowerOff,
    faPrint,
    faSave,
    faPenToSquare,
    faTrashCan,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import FormItem from "antd/es/form/FormItem";
import "./lapphieuchamsoc.scss";
// import data2 from "../../../../../../util/data3";
import TextArea from "antd/es/input/TextArea";
// import Swal from "sweetalert2";

function Lapphieuchamsoc(props) {
    const { open, setOpen } = props;
    const columns = [
        {
            title: "Ngày",
            dataIndex: "ngay",
            fixed: "left",
            render: (ngay) => <div> {ngay} </div>,
        },
        {
            title: "Giờ",
            dataIndex: "mach",
            render: (mach) => <div> {mach} </div>,
        },
        {
            title: "Bác sĩ",
            dataIndex: "nhietdo",
            render: (nhietdo) => <div> {nhietdo} </div>,
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

    return (
        <>
            <Modal className="LapPhieuChamSoc"
                title={
                    <>
                        <div className="d-flex justify-content-between">
                            <div className="title-header">PHIẾU CHĂM SÓC</div>
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
                centered
                closable={false}
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
                                label={<div className="form-input-label ">N.Sinh</div>}
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
                                label={<div className="form-input-label ">BHYT đến ngày</div>}
                                className="w-15"
                            >
                                <Input className="form-control" />
                            </FormItem>

                            <FormItem
                                label={<div className="form-input-label ">Địa chỉ</div>}
                                className="w-40"
                            >
                                <Input className="form-control" />
                            </FormItem>

                            <FormItem
                                label={<div className="form-input-label ">C.Đoán</div>}
                                className="w-35"
                            >
                                <Input className="form-control" />
                            </FormItem>
                        </div>
                        <div className="mt-2">
                            <div className="d-flex">
                                <div className="w-25 color-border">
                                    <div className="bg-label color-text fw-bold p-1 px-2">
                                        Lịch sử lập tờ điều trị
                                    </div>
                                    <Table
                                        columns={columns}
                                        // dataSource={data2}
                                        // loading={loading}
                                        scroll={{ x: true, y: 200 }}
                                        size="small"
                                        pagination={false}
                                    />
                                </div>
                                <div className="w-75">
                                    <div>
                                        <div className="row form-row">
                                            <FormItem
                                                label={
                                                    <div className="form-input-label modal-input-label">
                                                        Số phiếu
                                                    </div>
                                                }
                                                className="w-20 "
                                            >
                                                <Input className="form-control" />
                                            </FormItem>
                                            <FormItem
                                                label={
                                                    <div className="form-input-label">
                                                        Ngày y lệnh
                                                    </div>
                                                }
                                                className="w-15"
                                            >
                                                <Input className="form-control" />
                                            </FormItem>
                                            <FormItem
                                                label={<div className="form-input-label">Giờ</div>}
                                                className="w-15"
                                            >
                                                <Input className="form-control" />
                                            </FormItem>
                                            <FormItem
                                                label={
                                                    <div className="form-input-label modal-input-label-ytađieuuong">
                                                        Y tá ( điều dưỡng )
                                                    </div>
                                                }
                                                className="w-50"
                                            >
                                                <Input className="form-control" />
                                            </FormItem>
                                        </div>
                                        <div className="mt-2 color-border">
                                            <div className="px-2 py-1 fw-bold bg-title">
                                                THEO DÕI DIỄN BIẾN
                                            </div>
                                            <div className="row form-row px-2">
                                                <FormItem
                                                    label={
                                                        <div className="form-input-label modal-input-label">
                                                            Mạch(l/p)
                                                        </div>
                                                    }
                                                    className="col-md-3 "
                                                >
                                                    <Input className="form-control" />
                                                </FormItem>
                                                <FormItem
                                                    label={
                                                        <div className="form-input-label">
                                                            Nh.Độ(<sup>o</sup>C)
                                                        </div>
                                                    }
                                                    className="col-md-3"
                                                >
                                                    <Input className="form-control" />
                                                </FormItem>
                                                <FormItem
                                                    label={
                                                        <div className="form-input-label">
                                                            Huyết áp (mmHg)
                                                        </div>
                                                    }
                                                    className="col-md-3"
                                                >
                                                    <Input className="form-control" />
                                                </FormItem>
                                                <FormItem
                                                    label={
                                                        <div className="form-input-label modal-input-label">
                                                            Nhịp thở (l/p)
                                                        </div>
                                                    }
                                                    className="col-md-3"
                                                >
                                                    <Input className="form-control" />
                                                </FormItem>
                                            </div>
                                            <div className="row mt-2 p-2">
                                                <FormItem>
                                                    <TextArea
                                                        autoSize={{
                                                            minRows: 6,
                                                            maxRows: 6,
                                                        }}
                                                        className="form-control"
                                                    />
                                                </FormItem>
                                            </div>
                                            <div className="">
                                                <div className=" fw-bold bg-title py-1 px-2">
                                                    THỰC HIỆN Y LỆNH / CHĂM SÓC
                                                </div>
                                                <div className="row p-2">
                                                    <FormItem>
                                                        <TextArea
                                                            autoSize={{
                                                                minRows: 6,
                                                                maxRows: 6,
                                                            }}
                                                            className="form-control"
                                                        />
                                                    </FormItem>
                                                </div>
                                            </div>
                                        </div>
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

export default Lapphieuchamsoc;
