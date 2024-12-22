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
import "./khambenh.scss";
import Danhsachleft from "./Danhsachleft";
import Phieukham from "./Phieukham";
import LichsuCLSThuoc from "./LichsuCLS&Thuoc";

function Phieukhambenh() {
    //khaibao
    const [click, setClick] = useState(false);
    //truyền props
    const tabkhambenh = [
        {
            key: "1",
            label: "Phiếu khám",
            children: (
                <div className="tiepnhan-tab">
                    <Phieukham />
                </div>
            ),
        },
        {
            key: "2",
            label: "Lịch sử CLS & Thuốc",
            children: (
                <div className="tiepnhan-tab">
                    <LichsuCLSThuoc />
                </div>
            ),
        },
    ];
    const items1 = [
        {
            label: <div className="form-input-label khambenh-form-input-label">F3 - Lưu</div>,
            key: "1",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faSave} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">F2 - Bỏ qua</div>,
            key: "2",
            icon: <FontAwesomeIcon icon={faReply} />,
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">F4 - Sửa</div>,
            key: "3",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">Hủy</div>,
            key: "4",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faFileExcel} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">F5 - In toa</div>,
            key: "5",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faFileExcel} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">Toa trắng</div>,
            key: "6",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faFile} />
                </div>
            ),
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">CĐ hẹn TK</div>,
            key: "7",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faCalendarCheck} type="regular" />
                </div>
            ),
        },
        {
            label: <div className="form-input-label khambenh-form-input-label">Đóng HS</div>,
            key: "8",
            icon: (
                <div>
                    <FontAwesomeIcon icon={faBook} />
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="div-shadow v3">
                <div className="d-flex justify-content-end align-items-center p-1">
                    <Form>
                        <div className="kb-checktoa">
                            <div className=" kb-checkintoa checkintoa-name"> In toa A4 :</div>
                            <div className=" kb-checkintoa check-1"> <Checkbox /></div>
                        </div>
                    </Form>

                    {items1.map((item) => (
                        <Button className="form-btn bg mx-1" key={item.key}>
                            {item.icon}
                            <div className="mx-1 fw-bold ">{item.label}</div>
                        </Button>
                    ))}
                </div>
            </div>
            <div>
                <div className="px-1 pk-profile">
                    <Form>
                        <div className="row form-row m-0 p-0">
                            <Form.Item
                                className="m-0 w-30"
                                label={
                                    <div className="form-input-label khambenh-form-input-label">
                                        Họ và tên
                                    </div>
                                }
                            >
                                <Input className="form-control m-0" />
                            </Form.Item>
                            <Form.Item
                                className="m-0 w-15"
                                label={
                                    <div className="form-input-label khambenh-form-input-label">
                                        Ng.sinh
                                    </div>
                                }
                            >
                                <Input className="form-control m-0" />
                            </Form.Item>
                            <Form.Item
                                className="m-0 w-10"
                                label={
                                    <div className="form-input-label khambenh-form-input-label">
                                        Giới tính
                                    </div>
                                }
                            >
                                <Input className="form-control m-0" />
                            </Form.Item>
                            <Form.Item
                                className="m-0 w-15"
                                label={
                                    <div className="form-input-label khambenh-form-input-label">
                                        N.Nghiệp
                                    </div>
                                }
                            >
                                <Input className="form-control m-0" />
                            </Form.Item>
                            <Form.Item
                                className="m-0 w-15"
                                label={
                                    <div className="form-input-label khambenh-form-input-label">
                                        Ngày vv
                                    </div>
                                }
                            >
                                <Input className="form-control m-0" />
                            </Form.Item>
                            <Form.Item
                                className="m-0 w-15"
                                label={
                                    <div className="form-input-label khambenh-form-input-label">
                                        Ngày KB
                                    </div>
                                }
                            >
                                <Input className="form-control m-0" />
                            </Form.Item>
                        </div>
                        <div className="row form-row m-0 p-0">
                            <Form.Item
                                className="m-0 w-15"
                                label={
                                    <div className="form-input-label khambenh-form-input-label">
                                        Dân tộc
                                    </div>
                                }
                            >
                                <Input className="form-control m-0" />
                            </Form.Item>
                            <Form.Item
                                className="m-0 w-15"
                                label={
                                    <div className="form-input-label khambenh-form-input-label">
                                        Q.tịch
                                    </div>
                                }
                            >
                                <Input className="form-control m-0" />
                            </Form.Item>
                            <Form.Item
                                className="m-0 w-40"
                                label={
                                    <div className="form-input-label khambenh-form-input-label">
                                        Địa chỉ
                                    </div>
                                }
                            >
                                <Input className="form-control m-0" />
                            </Form.Item>
                            <Form.Item
                                className="m-0 w-30"
                                label={
                                    <div className="form-input-label khambenh-form-input-label">
                                        Đ.Tượng
                                    </div>
                                }
                            >
                                <Input className="form-control m-0" />
                            </Form.Item>
                        </div>
                    </Form>
                </div>
                <div className="d-flex h-max pt-2">
                    <div
                        className={
                            click
                                ? "khambenh-danhsach-left w-0 div-shadow v5"
                                : "khambenh-danhsach-left w-25 div-shadow color-border v5"
                        }
                    >
                        <div
                            className={
                                click
                                    ? "khambenh-danhsach-close-left"
                                    : "khambenh-danhsach-open-left"
                            }
                            onClick={() => setClick(!click)}
                        >
                            {click ? (
                                <FontAwesomeIcon icon={faAngleRight} />
                            ) : (
                                <FontAwesomeIcon icon={faAngleLeft} />
                            )}
                        </div>
                        <div>
                            <div className="mt-1 shadow ">
                                <div className="v6">
                                    <div className={click ? "d-none" : "w-100 scroll-dsleft"}>
                                        <Danhsachleft />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={click ? "w-100 vh-100" : "w-75"}>
                        <div className="mx-1 my-2 tab-khambenh">
                            <Tabs
                                defaultActiveKey="1"
                                type="card"
                                size="small"
                                items={tabkhambenh}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Phieukhambenh;
