import { Modal, Button, Form, Input, Select } from "antd";
import { SaveOutlined, CloseOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { setDataHangSanXuat } from "../../reducers/dataAdd";

function DetailHangSanXuat(props) {
    const { open, setOpen, handleCreate, handleUpdate } = props;
    const { hangsanxuat } = useSelector((state) => state.dataAdd);
    const [form] = Form.useForm(); // Định nghĩa form ở đây
    const dispatch = useDispatch();

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
                if (hangsanxuat?.ProducerID) {
                    var upHangSanXuat = {
                        ProducerID: values?.ProducerID,
                        ProducerName: values?.ProducerName,
                        STT: 1,
                        EmployeeID: 333,
                        Hide: 0
                    }
                    handleUpdate(upHangSanXuat);
                    dispatch(setDataHangSanXuat());
                    form.resetFields();
                    setOpen(false);
                } else {
                    var addHangSanXuat = {
                        // UnitID: values.UnitID,
                        ProducerName: values.ProducerName,
                        STT: 1,
                        EmployeeID: 333,
                        Hide: 0
                    }
                    // console.log("created data: ",addNuocSanXuat);
                    handleCreate(addHangSanXuat);
                    form.resetFields();
                    setOpen(false);
                }
            }
        });
    }

    useEffect(() => {
        if (open) {  // Chỉ set giá trị khi modal mở
            form.setFieldsValue({
                ProducerID: hangsanxuat?.ProducerID,
                // STT: hangsanxuat?.STT,
                ProducerName: hangsanxuat?.ProducerName,
            });
        }
    }, [hangsanxuat, open]);

    const handleCancel = () => {
        form.resetFields();
        setOpen(false);
    };

    return (
        <Modal
            title="Khai báo hãng sản xuất"
            centered
            open={open}
            onCancel={handleCancel}
            width={800}
            footer={null}
            destroyOnClose={true}
            forceRender
        >
            <Form
                form={form}
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
                    name="ProducerName"
                    label="Tên hãng sản xuất"
                    rules={[{ required: true, message: 'Vui lòng nhập tên nước sản xuất!' }]}
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

export default DetailHangSanXuat;