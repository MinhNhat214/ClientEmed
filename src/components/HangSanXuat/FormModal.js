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
            title="Khai báo hãng sản xuất"
            open={open}
            onCancel={handleCancel}
            footer={null}
        >
          <Form form={form} layout="horizontal">
            <Row>
              <Col span={24}>
                <Form.Item label="Tên hãng sản xuất" name="nhom">
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