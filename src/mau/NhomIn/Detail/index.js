import {Modal, Button, Form, Input, Select, InputNumber} from "antd";
import { SaveOutlined, CloseOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { setDataNhomIn } from "../../reducers/dataAdd";
import './phannhom.scss';

function DetailNhomIn(props) {
    const { open, setOpen, handleCreate, handleUpdate, listServiceGroup } = props;
    const { nhomin } = useSelector((state) => state.dataAdd);
    const [form] = Form.useForm(); // Định nghĩa form ở đây
    const dispatch = useDispatch();

    // const handleSubmit = async (values) => {
    //     const defaultValues = {
    //         STT: '2',
    //         EmployeeID: '333',
    //         Hide: 0
    //     };
    //
    //     const finalData = {
    //         ...values,
    //         ...defaultValues
    //     };
    //
    //     Swal.fire({
    //         title: "BẠN CÓ MUỐN LƯU THÔNG TIN?",
    //         confirmButtonText: "Đồng ý",
    //         showCancelButton: true,
    //         cancelButtonText: "Hủy",
    //         customClass: {
    //             title: "fs-5 text-dark",
    //             confirmButton: "bg-primary shadow-none",
    //             cancelButton: "bg-warning shadow-none",
    //         },
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             console.log("finalData: ", finalData)
    //             if (nhomin?.GroupPrinterID) {
    //                 handleUpdate(finalData);
    //                 dispatch(setDataNhomIn());
    //             } else {
    //                 handleCreate(finalData);
    //             }
    //             form.resetFields();
    //             setOpen(false);
    //         }
    //     });
    // }
    const handleSubmit = async (values) => {
        Swal.fire({
            title: "BẠN CÓ MUỐN LƯU THÔNG TIN?",
            confirmButtonText: "Đồng ý",
            showCancelButton: true,
            cancelButtonText: "Hủy",
            customClass: {
                title: "fs-5 text-dark",
                confirmButton: "bg-primary shadow-none",
                cancelButton: "bg-warning shadow-none",
            },
        }).then((result) => {
            if (result.isConfirmed) {
                if (nhomin?.GroupPrinterID) {
                    var upNhomIn = {
                        GroupPrinterID: values?.GroupPrinterID,
                        GroupPrinterName: values?.GroupPrinterName,
                        STT: 1,
                        EmployeeID: 333,
                        Hide: 0
                    }
                    console.log("updated data: ",upNhomIn);
                    handleUpdate(upNhomIn);
                    dispatch(setDataNhomIn());
                    form.resetFields();
                    setOpen(false);
                } else {
                    var addNhomIn = {
                        // UnitID: values.UnitID,
                        GroupPrinterName: values.GroupPrinterName,
                        STT: 1,
                        EmployeeID: 333,
                        Hide: 0
                    }
                    console.log("created data: ",addNhomIn);
                    handleCreate(addNhomIn);
                    form.resetFields();
                    setOpen(false);
                }
            }
        });
    }

    useEffect(() => {
        if (open) {  // Chỉ set giá trị khi modal mở
            form.setFieldsValue({
                GroupPrinterID: nhomin?.GroupPrinterID,
                STT: nhomin?.STT,
                GroupPrinterName: nhomin?.GroupPrinterName,
            });
        }
    }, [nhomin, open]);

    const handleCancel = () => {
        form.resetFields();
        setOpen(false);
    };

    return (
        <Modal
            title="Khai báo nhóm in"
            centered
            open={open}
            onCancel={handleCancel}
            width={800}
            footer={null}
            destroyOnClose={true}
            forceRender
        >
            <Form
                form={form}  // Thêm prop form vào đây
                onFinish={handleSubmit}
                layout="vertical"
                preserve={false}
            >
                {/*<Form.Item*/}
                {/*    name="GroupPrinterID"*/}
                {/*    label="Mã nhóm"*/}
                {/*    rules={[{ required: true, message: 'Vui lòng nhập mã nhóm!' }]}*/}
                {/*>*/}
                {/*    <Input />*/}
                {/*</Form.Item>*/}
                <Form.Item
                    name="STT"
                    label="STT"
                    rules={[{ required: true, message: 'Vui lòng nhập STT!' }]}
                >
                    <InputNumber min={0} className="form-control inputdm"/>
                </Form.Item>
                <Form.Item
                    name="GroupPrinterID"
                    label="Mã nhóm"
                    rules={[{ required: true, message: 'Vui lòng nhập Mã nhóm!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="GroupPrinterName"
                    label="Tên nhóm"
                    rules={[{ required: true, message: 'Vui lòng nhập tên nhóm!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item className="text-center" style={{paddingTop: "20px"}}>
                    <Button type="primary" htmlType="submit" icon={<SaveOutlined />} style={{ marginRight: 8 }}>
                        Lưu
                    </Button>
                    <Button danger onClick={handleCancel} icon={<CloseOutlined />}>
                        Thoát
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default DetailNhomIn;