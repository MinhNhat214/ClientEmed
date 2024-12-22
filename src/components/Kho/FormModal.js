import React, {useState} from "react";
import {Modal, Button, Form, Input, Select, Row, Col, DatePicker} from "antd";
import {SaveFilled, CloseCircleOutlined, PlusOutlined} from "@ant-design/icons";

const FormModal = ({onAdd}) => {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();

    const handleSubmit = async () => {

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
                title="Khai báo kho"
                open={open}
                width={"80%"}
                onCancel={handleCancel}
                footer={null}
            >
                <Form form={form} layout="horizontal">
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Tên kho" name="nhom">
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Nhóm kho" name="nhom2">
                                <Select>
                                    <Select.Option value="option1">Option 1</Select.Option>
                                    <Select.Option value="option2">Option 2</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Kho dự trù" name="nhom1">
                                <Select>
                                    <Select.Option value="option1">Option 1</Select.Option>
                                    <Select.Option value="option2">Option 2</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="nhom1"
                                label="Ngày lấy BC"
                            >
                                <DatePicker placeholder="Chọn ngày"/>
                            </Form.Item>
                        </Col>


                        <Col span={24}>
                            <Form.Item style={{textAlign: "right", marginBottom: 0}}>
                                <Button icon={<CloseCircleOutlined/>} onClick={handleCancel}>
                                    Thoát
                                </Button>
                                <Button
                                    type="primary"
                                    icon={<SaveFilled/>}
                                    onClick={handleSubmit}
                                    style={{marginLeft: 8}}
                                >
                                    Xác nhận
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    );
};

export default FormModal;