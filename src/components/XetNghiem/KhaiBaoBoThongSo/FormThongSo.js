import React, {useState} from "react";
import {Modal, Button, Form, Input, Select, Row, Col, Checkbox} from "antd";
import {SaveFilled, CloseCircleOutlined, PlusOutlined, RetweetOutlined} from "@ant-design/icons";

const FormThongSo = ({onAdd}) => {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();

    const handleSubmit = async () => {

    };

    const handleCancel = () => {
        setOpen(false);
        form.resetFields();
    };

    const formItems = [
        {name: "Dịch vụ", label: "Dịch vụ", span: 24},
        {name: "Tên mẫu xét nghiệm", label: "Tên mẫu xét nghiệm", span: 24},
        {name: "Loại Xét nghiệm", label: "Loại Xét nghiệm", span: 14},
        {name: "STT", label: "STT", span: 10},
    ];

    const checkboxItems = [
        {name: "set chỉ số nam theo nữ", label: "Ấn BV01", span: 4},
    ];

    return (
        <>
            <div>
                <Form layout="horizontal">
                    <Row>
                        <Col span={24}>
                            <Form.Item label="Dịch vụ" name="tenHangHoa">
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={24}>
                            <Form.Item label="Tên mẫu XN" name="maHangHoa">
                                <Input />
                            </Form.Item>
                        </Col>


                        <Col span={12}>
                            <Form.Item label="Loại XN" name="hamLuong">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="STT" name="hamLuong">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="dmBHYT" valuePropName="checked">
                                <Checkbox>Set chỉ số nam theo nữ</Checkbox>
                            </Form.Item>
                        </Col>
                        <Col>
                            <Button type="primary">
                                <RetweetOutlined/>
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );
};

export default FormThongSo;