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

  const formItemOld = [
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

  const formItems = [
    {label: "Nhóm", name: "nhom", span: "6", type: "select"},
    {label: "Phân loại", name: "phanLoai", span: "6", type: "select"},
    {label: "Tên hàng hóa", name: "tenHangHoa", span: "12"},
    {label: "Mã hàng hóa", name: "maHangHoa", span: "6"},
    {label: "Hàm luợng AX", name: "hamLuong", span: "6"},
    {label: "Hoạt chất", name: "hoatChat", span: "12"},
    {label: "Đường dùng", name: "duongDung", span: "6", type: "select"},
    {label: "ĐVT Đ.Gói (Nh.Kho)", name: "dvtDGoi", span: "6", type: "select"},
    {label: "ĐVT", name: "dvt", span: "6", type: "select"},
    {label: "ĐV kê toa", name: "dvKetoa", span: "6", type: "select"},
    {label: "SL Q.Đổi N.Kho", name: "slQDoiNK", span: "6"},
    {label: "Số đăng ký", name: "dangBaoChe", span: "6"},
    {label: "Dạng bào chế", name: "giaMua", span: "12"},
    {label: "Giá mua", name: "giaBHYT", span: "6"},
    {label: "Giá BHYT", name: "phuThuBHYT", span: "6"},
    {label: "Phụ thu BHYT", name: "giaDichVu", span: "6"},
    {label: "Giá dịch vụ", name: "giaBanSi", span: "6"},
    {label: "Giá bán sĩ", name: "giaBanSi", span: "6"},
    {label: "Mã thuốc 9324_AX", name: "giaBanSi", span: "6"},
    {label: "Mã theo kết quả đấu thầu (STT mã hóa theo KQĐT)", name: "giaBanSi", span: "12"},
    {label: "Hạn mức tồn", name: "giaBanSi", span: "6"},
    {label: "Nhóm in", name: "giaBanSi", span: "6", type: "select"},
    {label: "Kho", name: "giaBanSi", span: "6"},
    {label: "Kê đơn BS", name: "giaBanSi", span: "6"},
    {label: "Q.Cách Đ.Gói", name: "giaBanSi", span: "6"},
    // {label: "DM BHYT", name: "giaBanSi", span: "6"
    // {label: "DM Dịch vụ", name: "giaBanSi", span: "6"
    // {label: "Quy đổi SL kê toa", name: "giaBanSi", span: "6"
    // {label: "Ẩn/Hiện", name: "giaBanSi", span: "6"
    {label: "Hãng sản xuất", name: "giaBanSi", span: "6", type: "select"},
    {label: "Nước sản xuất", name: "giaBanSi", span: "6", type: "select"},
    {label: "Ghi chú", name: "giaBanSi", span: "6"},
  ];
  // mảng chứa các object
  const checkboxItems = [
    { name: "DM BHYT", label: "DM BHYT", span: 4 },
    { name: "DM Dich vu", label: "DM Dịch vụ", span: 4 },
    { name: "mapMaThau", label: "Quy đổi SL kê toa", span: 4 },
    { name: "anHien", label: "Ẩn/Hiện", span: 4 }
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
