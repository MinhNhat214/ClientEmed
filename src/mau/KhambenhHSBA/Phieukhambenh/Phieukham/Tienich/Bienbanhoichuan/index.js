import { Modal, Button, Form, Input, Table, Checkbox, Radio } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faFastForward,
    faPenToSquare,
    faPowerOff,
    faPrint,
    faSave,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
// import ds from "../../../../../../util/data";
import TextArea from "antd/es/input/TextArea";
// import "../../../../../../styles/style.scss";
import "./bienbanhoichung.scss";
// import Swal from "sweetalert2";
function Bienbanhoichuan(props) {
    const { open, setOpen } = props;
    const column = [
        {
            title: "Ho và tên",
            dataIndex: "TDV",
        },
        {
            title: "Chức danh",
            dataIndex: "TDVVT",
        },
        {
            title: "Chức vụ",
            dataIndex: "MADVKT",
        },
    ];
    const items1 = [
        {
            label: <div className="form-input-label">F2 - Mới</div>,
            key: "1",
            icon: (
                <div className="">
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
                <div className="">
                    {" "}
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label">F6 - In biên bản</div>,
            key: "4",
            icon: (
                <div className="">
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
            <Modal className="BienBangHoiChuan"
                title={
                    <>
                        <div className="d-flex justify-content-between">
                            <div className="title-header">BIÊN BẢNG HỘI CHUẨN</div>
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
                closable={false}
            >
                <div className="text-center">
                    {" "}
                    <Form onFinish={""}>
                        <div className="scroll">
                            <div className="bg-title fw-bold p-1">A. PHÂN HÀNH CHÍNH</div>
                            <div className="row form-row">
                                <Form.Item
                                    label={
                                        <div className="form-input-label">
                                            1. Bác sĩ điều trị/ bác sĩ trưởng khoa
                                        </div>
                                    }
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row form-row">
                                <Form.Item
                                    label={
                                        <div className="form-input-label">2. Lý do hội chuẩn </div>
                                    }
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row form-row">
                                <Form.Item
                                    label={
                                        <div className="form-input-label">
                                            3. Ngày giờ hội chuẩn
                                        </div>
                                    }
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row mt-2">
                                <Form.Item
                                    label={
                                        <div className="form-input-label">
                                            4. Thành phần tham gia hội chuẩn
                                        </div>
                                    }
                                >
                                    <Table
                                        columns={column}
                                        // dataSource={ds}
                                        // loading={loading}
                                        scroll={{ x: true, y: 155 }}
                                        size="small"
                                        bordered={true}
                                        pagination={false}
                                    />
                                </Form.Item>
                            </div>
                            <div className="row form-row">
                                <Form.Item
                                    label={<div className="form-input-label">5. Họp tại</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row form-row">
                                <Form.Item
                                    label={
                                        <div className="form-input-label">
                                            6. Chủ tọa: (họ tên, chứuc danh,chức vụ)
                                        </div>
                                    }
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row form-row">
                                <Form.Item
                                    label={
                                        <div className="form-input-label">
                                            7. Thư ký: (họ tên, chức danh, chức vụ)
                                        </div>
                                    }
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="bg-title fw-bold p-1 mt-4">B. NỘI DUNG HỘI CHUẨN</div>
                            <div className="title-highlight-note">
                                I. Phần hành chính người bệnh
                            </div>
                            <div className="row form-row">
                                <Form.Item
                                    className="col-md-6 "
                                    label={<div className="form-input-label">Họ và tên</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    className="col-md-2 "
                                    label={<div className="form-input-label">Năm sinh</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>{" "}
                                <Form.Item
                                    className="col-md-2 "
                                    label={<div className="form-input-label">Giới tính</div>}
                                >
                                    <Radio.Group>
                                        <Radio value={1}>Nam</Radio>
                                        <Radio value={2}>Nữ</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </div>
                            <div className="row form-row">
                                <Form.Item
                                    className="col-md-6 "
                                    label={<div className="form-input-label">Dân tộc</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    className="col-md-6 "
                                    label={<div className="form-input-label">Ngoại kiều</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row form-row">
                                <Form.Item
                                    className="col-md-6 "
                                    label={<div className="form-input-label">Số hộ chiếu</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    className="col-md-3 "
                                    label={<div className="form-input-label">Ngày cấp</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    className="col-md-3 "
                                    label={<div className="form-input-label">Nơi cấp</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row form-row">
                                <Form.Item
                                    className="col-md-6 "
                                    label={<div className="form-input-label">Nghề nghiệp</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    className="col-md-6 "
                                    label={<div className="form-input-label">Nơi làm việc</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row form-row">
                                <Form.Item label={<div className="form-input-label">Địa chỉ</div>}>
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row form-row">
                                <Form.Item
                                    label={<div className="form-input-label">Số vào viện</div>}
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row form-row">
                                <div className="form-input-label col-md-1 text-start">
                                    <div className="pt-2">Đối tượng:</div>
                                </div>
                                <div className="form-input-label col-md-1 fw-bold color-text text-start">
                                    <div className="pt-2"> Thu phí</div>
                                </div>
                                <div className="col-md-6">
                                    <Form.Item
                                        label={<div className="form-input-label">Số thẻ</div>}
                                    >
                                        <div className="d-flex">
                                            <Input className="form-control" />
                                            <Input className="form-control" />
                                            <Input className="form-control" />
                                            <Input className="form-control" />
                                            <Input className="form-control" />
                                        </div>
                                    </Form.Item>
                                </div>
                                <div className="col-md-4">
                                    {" "}
                                    <Form.Item
                                        label={<div className="form-input-label">Giá trị đến</div>}
                                    >
                                        <Input className="form-control" />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="row form-row">
                                <Form.Item
                                    label={<div className="form-input-label">Vào viện</div>}
                                    className="col-md-4"
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label">Ngày</div>}
                                    className="col-md-4"
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                                <Form.Item
                                    label={<div className="form-input-label">Tại khoa</div>}
                                    className="col-md-4"
                                >
                                    <Input className="form-control" />
                                </Form.Item>
                            </div>
                            <div className="row mt-2">
                                <Form.Item
                                    label={
                                        <div className="form-input-label">Yêu cầu chuẩn hội</div>
                                    }
                                >
                                    <TextArea
                                        autoSize={{
                                            minRows: 3,
                                            maxRows: 3,
                                        }}
                                        className="form-control"
                                    />
                                </Form.Item>
                            </div>
                            <div className="title-highlight-note">II. Diễn biến bệnh</div>
                            <div className="row">
                                <Form.Item
                                    label={<div className="form-input-label">1. Tiểu sử bệnh</div>}
                                >
                                    <TextArea
                                        autoSize={{
                                            minRows: 3,
                                            maxRows: 3,
                                        }}
                                        className="form-control"
                                    />
                                </Form.Item>
                            </div>
                            <div className="row">
                                <Form.Item
                                    label={
                                        <div className="form-input-label">
                                            2. Tình trạng lúc vào viện
                                        </div>
                                    }
                                >
                                    <TextArea
                                        maxLength={5}
                                        minLength={3}
                                        className="form-control"
                                    />
                                </Form.Item>
                            </div>{" "}
                            <div className="row">
                                <Form.Item
                                    label={
                                        <div className="form-input-label">
                                            3. Chuẩn đoán (tuyến dưới, khoa khám bệnh, khoa điều
                                            trị):
                                        </div>
                                    }
                                >
                                    <TextArea
                                        maxLength={5}
                                        minLength={3}
                                        className="form-control"
                                    />
                                </Form.Item>
                            </div>{" "}
                            <div className="row">
                                <Form.Item
                                    label={
                                        <div className="form-input-label">
                                            4. Tóm tắt diễn biến bệnh, quá trình điều trị, quá trình
                                            chăm sóc ở khoa:
                                        </div>
                                    }
                                >
                                    <TextArea
                                        maxLength={5}
                                        minLength={3}
                                        className="form-control"
                                    />
                                </Form.Item>
                            </div>{" "}
                            <div className="title-highlight-note">
                                III. Sau khi các thành viên đã khám lại người bệnh và thảo luận
                                thống nhất ý kiến như sau:
                            </div>
                            <div className="row">
                                <Form.Item
                                    label={
                                        <div className="form-input-label">
                                            1. Chuẩn đôán, nguyên nhân, tiên lượng
                                        </div>
                                    }
                                >
                                    <TextArea
                                        maxLength={5}
                                        minLength={3}
                                        className="form-control"
                                    />
                                </Form.Item>
                            </div>{" "}
                            <div className="row">
                                <Form.Item
                                    label={
                                        <div className="form-input-label">
                                            2. Phương pháp điều trị
                                        </div>
                                    }
                                >
                                    <TextArea
                                        maxLength={5}
                                        minLength={3}
                                        className="form-control"
                                    />
                                </Form.Item>
                            </div>{" "}
                            <div className="row">
                                <Form.Item
                                    label={<div className="form-input-label">3. Chăm sóc</div>}
                                >
                                    <TextArea
                                        maxLength={5}
                                        minLength={3}
                                        className="form-control"
                                    />
                                </Form.Item>
                            </div>
                            <div className="title-highlight-note">IV. Kết luận</div>
                            <div className="row">
                                <Form.Item
                                    label={
                                        <div className="form-input-label">
                                            1. Chuẩn đoán, nguyên nhân, tiên lượng
                                        </div>
                                    }
                                >
                                    <TextArea
                                        maxLength={5}
                                        minLength={3}
                                        className="form-control"
                                    />
                                </Form.Item>
                            </div>{" "}
                        </div>
                    </Form>
                </div>
            </Modal>
        </>
    );
}

export default Bienbanhoichuan;
