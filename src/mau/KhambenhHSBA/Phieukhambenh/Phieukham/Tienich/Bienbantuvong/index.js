import { Modal, Button, Form, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faPowerOff,
    faPrint,
    faSave,
    faPenToSquare,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import TextArea from "antd/es/input/TextArea";
// import "../../../../../../styles/style.scss";
import "./bienbantuvong.scss";
function Bienbantuvong(props) {
    const { open, setOpen } = props;
    const items1 = [
        {
            label: <div className="form-input-label">F2 - Mới</div>,
            key: "1",
            icon: (
                <div className="color-icon-edit blue">
                    <FontAwesomeIcon icon={faPowerOff} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">F3 - Lưu</div>,
            key: "2",
            icon: <FontAwesomeIcon icon={faSave} />,
        },
        {
            label: <div className="form-input-label">Sửa</div>,
            key: "3",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">F6 - In biên bản</div>,
            key: "4",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPrint} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Hủy</div>,
            key: "5",
            icon: (
                <div className="">
                    <FontAwesomeIcon icon={faTrashCan} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">Thoát</div>,
            key: "6",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </div>
            ),
        },
    ];
    const handCloseModal = (a) => {
        if (a === "6") {
            setOpen(false);
        }
    };
    return (
        <>
            <Modal className="BienBanTuVong"
                title={
                    <>
                        <div className="d-flex justify-content-between">
                            <div className="title-header">BIÊN BẢNG TỬ VONG</div>
                            <div className="btn-header">
                                <div className="d-flex justify-content-end">
                                    {items1.map((item) => (
                                        <Button className="form-btn bg mx-1 px-1" key={item.key} onClick={()=>handCloseModal(item.key)}>
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
                <div className="text-center">
                    {" "}
                    <Form>
                        <div className="row form-row">
                            <Form.Item
                                label={<div className="form-input-label">Mã bệnh nhân </div>}
                                className="col-md-3"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                            <Form.Item
                                label={<div className="form-input-label">Họ tên </div>}
                                className="col-md-5"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                            <Form.Item
                                label={<div className="form-input-label">Năm sinh</div>}
                                className="col-md-2"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                            <Form.Item
                                label={<div className="form-input-label">Giới tính </div>}
                                className="col-md-2"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                        </div>
                        <div className="row form-row">
                            <Form.Item
                                label={<div className="form-input-label">Ngày giờ tử vong</div>}
                                className="col-md-3"
                            >
                                <div className="d-flex">
                                    <Input className="form-control w-60" />
                                    <Input className="form-control w-40" />
                                </div>
                            </Form.Item>
                            <Form.Item
                                label={<div className="form-input-label">Địa chỉ </div>}
                                className="col-md-9"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                        </div>
                        <div className="row form-row">
                            <Form.Item
                                label={<div className="form-input-label">Nguyên nhân</div>}
                                className="col-md-12"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                        </div>
                        <div className="row form-row">
                            <Form.Item
                                label={<div className="form-input-label">Người thân</div>}
                                className="col-md-12"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                        </div>
                        <div className="row form-row">
                            <Form.Item
                                label={<div className="form-input-label">Họ tên người đưa đến</div>}
                                className="col-md-8"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                            <Form.Item
                                label={<div className="form-input-label">Năm sinh</div>}
                                className="col-md-2"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                            <Form.Item
                                label={<div className="form-input-label">Giới tính </div>}
                                className="col-md-2"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                        </div>
                        <div className="row form-row">
                            <Form.Item
                                label={
                                    <div className="form-input-label">Đại chỉ người đưa đến</div>
                                }
                                className="col-md-12"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                        </div>
                        <div className="row form-row">
                            <Form.Item
                                label={<div className="form-input-label">Số CMND</div>}
                                className="col-md-8"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                            <Form.Item
                                label={<div className="form-input-label">Quan hệ</div>}
                                className="col-md-4"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                        </div>
                        <div className="row form-row-textarea ">
                            <Form.Item
                                label={
                                    <div className="form-input-label">Tình trạng lúc vào viện</div>
                                }
                                className="col-md-12"
                            >
                                <TextArea
                                    className="form-control"
                                    autoSize={{
                                        minRows: 2,
                                        maxRows: 2,
                                    }}
                                />
                            </Form.Item>
                        </div>
                        <div className="row form-row">
                            <Form.Item
                                label={<div className="form-input-label">Chuẩn đoán</div>}
                                className="col-md-12"
                            >
                                <div className="d-flex">
                                    <Input className="form-control w-20" />
                                    <Input className="form-control w-80" />
                                </div>
                            </Form.Item>
                        </div>
                        <div className="row  form-row-textarea ">
                            <Form.Item
                                label={<div className="form-input-label">Đã xử lý cấp cứu</div>}
                                className="col-md-12"
                            >
                                <TextArea
                                    className="form-control"
                                    autoSize={{
                                        minRows: 2,
                                        maxRows: 2,
                                    }}
                                />
                            </Form.Item>
                        </div>{" "}
                        <div className="row  form-row-textarea ">
                            <Form.Item
                                label={<div className="form-input-label">Ý kiến của thân nhân</div>}
                                className="col-md-12"
                            >
                                <TextArea
                                    className="form-control"
                                    autoSize={{
                                        minRows: 2,
                                        maxRows: 2,
                                    }}
                                />
                            </Form.Item>
                        </div>{" "}
                        {/* <div className="row form-row">
                            <Form.Item
                                label={
                                    <div className="form-input-label">Tài sản của bệnh nhân</div>
                                }
                                className="col-md-12"
                            >
                                <div>
                                    Tiền: <Input className="form-control" />
                                    Tư trang : <Input className="form-control" />
                                </div>
                            </Form.Item>
                        </div> */}
                        <div className="row  form-row-textarea ">
                            <Form.Item
                                label={<div className="form-input-label">Ý kiến của công an</div>}
                                className="col-md-12"
                            >
                                <TextArea
                                    className="form-control"
                                    autoSize={{
                                        minRows: 2,
                                        maxRows: 2,
                                    }}
                                />
                            </Form.Item>
                        </div>
                        <div className="row form-row">
                            <Form.Item
                                label={<div className="form-input-label">Bác sĩ</div>}
                                className="col-md-3"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                            <Form.Item
                                label={<div className="form-input-label">Điều dưỡng</div>}
                                className="col-md-5"
                            >
                                <Input className="form-control" />
                            </Form.Item>{" "}
                            <Form.Item
                                label={<div className="form-input-label">Ngày làm việc</div>}
                                className="col-md-4"
                            >
                                <Input className="form-control" />
                            </Form.Item>
                        </div>
                    </Form>
                    {/* <div>
                        <div className="d-flex  justify-content-end">
                            {items1.map((item) => (
                                <Button className="form-btn color-text mx-1 px-1" key={item.key}>
                                    {item.icon}
                                    <div className="mx-1">{item.label}</div>
                                </Button>
                            ))}
                        </div>
                    </div> */}
                </div>
            </Modal>
        </>
    );
}

export default Bienbantuvong;
