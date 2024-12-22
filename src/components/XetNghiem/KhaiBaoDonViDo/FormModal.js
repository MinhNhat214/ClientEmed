import React, {useState} from "react";
import {Modal, Button, Form, Input, Select, Row, Col, Checkbox} from "antd";
import {SaveFilled, CloseCircleOutlined, PlusOutlined} from "@ant-design/icons";

const FormModal = ({onAdd}) => {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();

    const handleSubmit = async () => {
        try {
            const values = await form.validateFields();
            onAdd(values);
            setOpen(false);
            form.resetFields();
        } catch (error) {
            console.error("Form validation failed:", error);
        }
    };

    const handleCancel = () => {
        setOpen(false);
        form.resetFields();
    };

    return (
        <>
            <Button type="primary" onClick={() => setOpen(true)} icon={<PlusOutlined/>}>
                Thêm mới
            </Button>

            <Modal
                title="Khai báo thuốc thầu BHYT"
                open={open}
                onCancel={handleCancel}
                footer={null}
            >
                <Form form={form} layout="horizontal">
                    <Form.Item label={"Chỉ số đo"}>
                        <Input></Input>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            style={{marginLeft: "8px", float: "right"}}
                            onClick={handleCancel}
                        >
                            <CloseCircleOutlined/> Thoát
                        </Button>
                        <Button
                            type="primary"
                            style={{float: "right"}}
                            onClick={handleSubmit}
                        >
                            <SaveFilled/> Xác nhận
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default FormModal;