import React, { useState } from "react";
import { Modal, Button, Form, Input, Select, Row, Col, Checkbox } from "antd";
import { SaveFilled, CloseCircleOutlined, PlusOutlined } from "@ant-design/icons";

const FormModal = ({ onAdd }) => {
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
        <Button type="primary" onClick={() => setOpen(true)} icon={<PlusOutlined />}>
          Thêm mới
        </Button>

        <Modal
            title="Khai báo nhà cung cấp"
            open={open}
            width={"80%"}
            onCancel={handleCancel}
            footer={null}
        >
          <Form form={form} layout="horizontal">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Tên nhà CC" name="nhom">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Địa chỉ" name="nhom">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Số TK NH" name="nhom">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Email" name="nhom">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Mã số thuế" name="nhom">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Điện thoại" name="nhom">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Số Fax" name="sttThuoc">
                  <Input />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item style={{ textAlign: "right", marginBottom: 0 }}>
                  <Button icon={<CloseCircleOutlined />} onClick={handleCancel}>
                    Thoát
                  </Button>
                  <Button
                      type="primary"
                      icon={<SaveFilled />}
                      onClick={handleSubmit}
                      style={{ marginLeft: 8 }}
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