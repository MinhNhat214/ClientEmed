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
  //Type text & select
  const formItems = [
    { name: "tenDonViThau", label: "Tên đơn vị thầu", span: 12 },
    { name: "tenThuocAX", label: "Tên thuốc AX", span: 12, type: "select" },
    { name: "hoatChatAX", label: "Hoạt chất AX", span: 12 },
    { name: "maHoatChat", label: "Mã hoạt chất", span: 6 },
    { name: "maHangHoa", label: "Mã hàng hóa", span: 6 },
    { name: "hamLuongAX", label: "Hàm lượng AX", span: 6 },
    { name: "maDuongDungAX", label: "Mã đường dùng AX", span: 6 },
    { name: "soDangKy", label: "Số đăng ký", span: 6 },
    { name: "giaBHYT", label: "Giá BHYT", span: 6 },
    { name: "maBHYT", label: "Mã BHYT (Mã AX)", span: 6 },
    { name: "phanTramThuongBHYT", label: "% thưởng BHYT", span: 6 },
    { name: "soQDTrungThau", label: "Số QĐ trúng thầu", span: 6 },
    { name: "goiThau", label: "Gói thầu", span: 6 },
    { name: "nhomThau", label: "Nhóm thầu", span: 6 },
    { name: "ttThau4210", label: "TT thầu 4210", span: 6 },
    { name: "hangSX", label: "Hãng SX", span: 12 },
    { name: "soLuong", label: "Số lượng", span: 6 },
    { name: "maNhom9324", label: "Mã nhóm 9324", span: 6 },
    { name: "nuocSX", label: "Nước SX", span: 12 },
    { name: "nhomLoaiThuocBC", label: "Nhóm loại thốc BC", span: 6 },
    { name: "ngayNopM16", label: "Ngày nộp M16", span: 6, type: "select" },
    { name: "ngayPheDuyetBHXH", label: "Ngày P.Duyệt BHXH", span: 6 },
    { name: "ngayHieuLuc", label: "Ngày hiệu lực", span: 6 }
  ];
  // type checkbox
  const checkboxItems = [
    { name: "anBV01", label: "Ấn BV01", span: 4 },
    { name: "anHien", label: "Ẩn/Hiện", span: 4 },
    { name: "mapMaThau", label: "Map mã thầu qua DM", span: 4 }
  ];

  return (
      <>
        <Button type="primary" onClick={() => setOpen(true)} icon={<PlusOutlined />}>
          Thêm mới
        </Button>

        <Modal
            title="Khai báo thuốc thầu BHYT"
            open={open}
            onCancel={handleCancel}
            width={1100}
            footer={null}
            style={{ top: 10 }}
        >
          <Form form={form} layout="horizontal">
            <Row gutter={16}>
              {formItems.map(item => (
                  <Col key={item.name} span={item.span}>
                    <Form.Item label={item.label} name={item.name}>
                      {item.type === "select" ? (
                          <Select placeholder={`Chọn ${item.label}`}>
                            <Select.Option value="option1">Option 1</Select.Option>
                          </Select>
                      ) : (
                          <Input />
                      )}
                    </Form.Item>
                  </Col>
              ))}

              {checkboxItems.map(item => (
                  <Col key={item.name} span={item.span}>
                    <Form.Item name={item.name} valuePropName="checked">
                      <Checkbox>{item.label}</Checkbox>
                    </Form.Item>
                  </Col>
              ))}

              <Col span={12}>
                <Form.Item label="STT thuốc (CV) gửi BHXH" name="sttThuoc">
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