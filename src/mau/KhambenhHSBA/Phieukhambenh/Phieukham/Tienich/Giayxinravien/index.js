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
import './giayxinravien.scss';
function Giayxinravien(props) {
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
            <Modal className="modefileghinhanhoso"
                title={
                    <>
                        <div className="d-flex justify-content-between">
                            <div className="title-header">GHI NHẬN HỒ SƠ</div>
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
                width={"50vw"}
            >
                <div className="fileghinhanhoso">
                    <Form>
                        <ul className="title">
                            <li>Loại</li>
                            <li>Số tờ</li>
                        </ul>
                        <ul>
                            <li>Xquang</li>
                            <li>  <Input className="form-control" /></li>
                        </ul>
                        <ul>
                            <li>CT Scanner</li>
                            <li>  <Input className="form-control" /></li>
                        </ul>
                        <ul>
                            <li>Siêu âm</li>
                            <li>  <Input className="form-control" /></li>
                        </ul>
                        <ul>
                            <li>Xét nghiệm</li>
                            <li>  <Input className="form-control" /></li>
                        </ul>

                        <ul>
                            <li>Khác</li>
                            <li>  <Input className="form-control" /></li>
                        </ul>


                    </Form>
                </div>
            </Modal>
        </>
    );
}

export default Giayxinravien;
