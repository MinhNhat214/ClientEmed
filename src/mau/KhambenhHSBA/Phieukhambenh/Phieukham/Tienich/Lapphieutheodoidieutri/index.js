import { Modal, Form, Input, Table, Button } from "antd";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faPowerOff,
    faPrint,
    faSave,
    faPenToSquare,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import FormItem from "antd/es/form/FormItem";
import "./lapphieutheodoidieutri.scss";
// import Swal from "sweetalert2";

import {
    align,
    font,
    fontColor,
    fontSize,
    formatBlock,
    hiliteColor,
    horizontalRule,
    lineHeight,
    list,
    paragraphStyle,
    table,
    template,
    textStyle,
    image,
    link,
} from "suneditor/src/plugins";
// import data2 from "../../../../../../util/data3";
function Lapphieutheodoidieutri(props) {
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
            <Modal className="LapPhieuTheoDoiDieuTri"
                title={
                        <div className="d-flex justify-content-between">
                            <div className="title-header">PHIẾU THEO DÕI ĐIỀU TRỊ</div>
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
                                label={<div className="form-input-label ">C. Đoán</div>}
                                className="w-35"
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
                                                label={<div className="form-input-label">Ngày</div>}
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
                                                    <div className="form-input-label modal-input-label">
                                                        BS điều trị
                                                    </div>
                                                }
                                                className="w-50"
                                            >
                                                <Input className="form-control" />
                                            </FormItem>
                                        </div>
                                        <div className="row form-row">
                                            <FormItem
                                                label={
                                                    <div className="form-input-label modal-input-label">
                                                        Giường
                                                    </div>
                                                }
                                                className="w-50"
                                            >
                                                <Input className="form-control" />
                                            </FormItem>

                                            <FormItem
                                                label={
                                                    <div className="form-input-label modal-input-label">
                                                        Buồng
                                                    </div>
                                                }
                                                className="w-50"
                                            >
                                                <Input className="form-control" />
                                            </FormItem>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="w-50">
                                            <div className="bg-title px-2 py-1 fw-bold">
                                                THEO DÕI DIỄN BIẾN
                                            </div>
                                            <SunEditor
                                                autoFocus={true}
                                                lang="en"
                                                setDefaultStyle="height:310px"
                                                setOptions={{
                                                    showPathLabel: false,

                                                    placeholder: "Enter your text here!!!",
                                                    plugins: [
                                                        align,
                                                        font,
                                                        fontColor,
                                                        fontSize,
                                                        formatBlock,
                                                        hiliteColor,
                                                        horizontalRule,
                                                        lineHeight,
                                                        list,
                                                        paragraphStyle,
                                                        table,
                                                        template,
                                                        textStyle,
                                                        image,
                                                        link,
                                                    ],
                                                    buttonList: [
                                                        ["font", "fontSize", "formatBlock"],
                                                        ["bold", "underline", "italic"],
                                                        ["fontColor", "hiliteColor"],
                                                        ["removeFormat"],

                                                        ["outdent", "indent"],
                                                        [
                                                            "align",
                                                            "horizontalRule",
                                                            "list",
                                                            "lineHeight",
                                                        ],
                                                    ],
                                                    formats: [
                                                        "p",
                                                        "div",
                                                        "h1",
                                                        "h2",
                                                        "h3",
                                                        "h4",
                                                        "h5",
                                                        "h6",
                                                    ],
                                                    font: [
                                                        "Arial",
                                                        "Calibri",
                                                        "Comic Sans",
                                                        "Courier",
                                                        "Garamond",
                                                        "Georgia",
                                                        "Impact",
                                                        "Lucida Console",
                                                        "Palatino Linotype",
                                                        "Segoe UI",
                                                        "Tahoma",
                                                        "Times New Roman",
                                                        "Trebuchet MS",
                                                    ],
                                                }}
                                                // defaultValue={richTextEditorHtml}
                                                // onChange={handleEditorChange}
                                            />
                                        </div>
                                        <div className="w-50">
                                            <div className="bg-title px-2 py-1 fw-bold">
                                                THỰC HIỆN Y LỆNH
                                            </div>
                                            <SunEditor
                                                autoFocus={true}
                                                lang="en"
                                                setDefaultStyle="height:310px"
                                                setOptions={{
                                                    showPathLabel: false,

                                                    placeholder: "Enter your text here!!!",
                                                    plugins: [
                                                        align,
                                                        font,
                                                        fontColor,
                                                        fontSize,
                                                        formatBlock,
                                                        hiliteColor,
                                                        horizontalRule,
                                                        lineHeight,
                                                        list,
                                                        paragraphStyle,
                                                        table,
                                                        template,
                                                        textStyle,
                                                        image,
                                                        link,
                                                    ],
                                                    buttonList: [
                                                        ["font", "fontSize", "formatBlock"],
                                                        ["bold", "underline", "italic"],
                                                        ["fontColor", "hiliteColor"],
                                                        ["removeFormat"],

                                                        ["outdent", "indent"],
                                                        [
                                                            "align",
                                                            "horizontalRule",
                                                            "list",
                                                            "lineHeight",
                                                        ],
                                                    ],
                                                    formats: [
                                                        "p",
                                                        "div",
                                                        "h1",
                                                        "h2",
                                                        "h3",
                                                        "h4",
                                                        "h5",
                                                        "h6",
                                                    ],
                                                    font: [
                                                        "Arial",
                                                        "Calibri",
                                                        "Comic Sans",
                                                        "Courier",
                                                        "Garamond",
                                                        "Georgia",
                                                        "Impact",
                                                        "Lucida Console",
                                                        "Palatino Linotype",
                                                        "Segoe UI",
                                                        "Tahoma",
                                                        "Times New Roman",
                                                        "Trebuchet MS",
                                                    ],
                                                }}
                                                // defaultValue={richTextEditorHtml}
                                                // onChange={handleEditorChange}
                                            />
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

export default Lapphieutheodoidieutri;
